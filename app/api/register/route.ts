import { NextRequest, NextResponse } from 'next/server';
import { createHash } from 'crypto';

export async function POST(req: NextRequest) {
  const { nombre, email, telefono } = await req.json();

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const server = process.env.MAILCHIMP_SERVER_PREFIX;

  if (!apiKey || !audienceId || !server) {
    console.error('Missing Mailchimp env vars');
    return NextResponse.json({ success: true }); // fail silently to user
  }

  const [firstName, ...rest] = (nombre as string).trim().split(' ');
  const lastName = rest.join(' ');
  const subscriberHash = createHash('md5').update((email as string).toLowerCase()).digest('hex');

  const base = `https://${server}.api.mailchimp.com/3.0`;
  const auth = Buffer.from(`anystring:${apiKey}`).toString('base64');
  const headers = { 'Content-Type': 'application/json', Authorization: `Basic ${auth}` };

  try {
    // Upsert member — adds if new, updates if existing
    const memberRes = await fetch(`${base}/lists/${audienceId}/members/${subscriberHash}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify({
        email_address: email,
        status_if_new: 'subscribed',
        merge_fields: { FNAME: firstName, LNAME: lastName || '', PHONE: telefono },
      }),
    });

    if (!memberRes.ok) {
      const err = await memberRes.json();
      console.error('Mailchimp member upsert failed:', err);
    }

    // Add tag
    const tagRes = await fetch(`${base}/lists/${audienceId}/members/${subscriberHash}/tags`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        tags: [{ name: 'Cresta de la Ola Attendees', status: 'active' }],
      }),
    });

    if (!tagRes.ok) {
      const err = await tagRes.json();
      console.error('Mailchimp tag failed:', err);
    }
  } catch (err) {
    console.error('Mailchimp request error:', err);
  }

  return NextResponse.json({ success: true });
}
