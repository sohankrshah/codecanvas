import { NextResponse } from "next/server";
import { Resend } from 'resend';

// Initialize Resend only if API key exists
let resend: Resend | null = null;

if (process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY);
}

interface ContactRequestBody {
    name: string;
    email: string;
    subject?: string;
    message: string;
}

export async function POST(request: Request) {
    try {
        // DEBUG: Check environment variables (REMOVE AFTER TESTING)
        console.log('🔍 DEBUG INFO:');
        console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);
        console.log('YOUR_EMAIL exists:', !!process.env.YOUR_EMAIL);
        console.log('RESEND_API_KEY starts with:', process.env.RESEND_API_KEY?.substring(0, 5));
        
        // Parse the request body
        const body = await request.json() as ContactRequestBody;

        // Validate required fields
        if (!body.name || !body.email || !body.message) {
            return NextResponse.json(
                { message: "Missing required fields" },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(body.email)) {
            return NextResponse.json(
                { message: "Invalid email format" },
                { status: 400 }
            );
        }

        // Check if environment variables are set
        if (!process.env.RESEND_API_KEY || !process.env.YOUR_EMAIL) {
            console.error("❌ Missing environment variables");
            console.error("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);
            console.error("YOUR_EMAIL exists:", !!process.env.YOUR_EMAIL);
            return NextResponse.json(
                { message: "Server configuration error. Please contact the administrator." },
                { status: 500 }
            );
        }

        // Check if Resend is initialized
        if (!resend) {
            console.error("❌ Resend client not initialized");
            return NextResponse.json(
                { message: "Email service not configured" },
                { status: 500 }
            );
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: [process.env.YOUR_EMAIL],
            replyTo: body.email,
            subject: body.subject || `✨ New message from ${body.name}`,
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                        * { margin: 0; padding: 0; box-sizing: border-box; }
                        body { 
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                            line-height: 1.6; 
                            color: #1f2937;
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            padding: 40px 20px;
                        }
                        .email-wrapper {
                            max-width: 600px;
                            margin: 0 auto;
                        }
                        .container { 
                            background: #ffffff;
                            border-radius: 20px;
                            overflow: hidden;
                            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                        }
                        .header { 
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            padding: 50px 30px;
                            text-align: center;
                            position: relative;
                            overflow: hidden;
                        }
                        .header::before {
                            content: '';
                            position: absolute;
                            top: -50%;
                            left: -50%;
                            width: 200%;
                            height: 200%;
                            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
                            animation: pulse 4s ease-in-out infinite;
                        }
                        @keyframes pulse {
                            0%, 100% { transform: scale(1); opacity: 0.5; }
                            50% { transform: scale(1.1); opacity: 0.8; }
                        }
                        .header-icon {
                            font-size: 48px;
                            margin-bottom: 15px;
                            display: inline-block;
                            animation: bounce 2s ease-in-out infinite;
                        }
                        @keyframes bounce {
                            0%, 100% { transform: translateY(0); }
                            50% { transform: translateY(-10px); }
                        }
                        .header h2 {
                            position: relative;
                            z-index: 1;
                            color: #ffffff;
                            font-size: 28px;
                            font-weight: 700;
                            margin: 0;
                            text-shadow: 0 2px 10px rgba(0,0,0,0.2);
                        }
                        .badge {
                            display: inline-block;
                            background: rgba(255,255,255,0.2);
                            color: white;
                            padding: 8px 16px;
                            border-radius: 20px;
                            font-size: 12px;
                            font-weight: 600;
                            margin-top: 15px;
                            backdrop-filter: blur(10px);
                        }
                        .content { 
                            padding: 40px 30px;
                            background: #ffffff;
                        }
                        .field { 
                            margin-bottom: 25px;
                            padding: 20px;
                            background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
                            border-radius: 12px;
                            border-left: 4px solid #667eea;
                            transition: transform 0.2s ease;
                        }
                        .field:hover {
                            transform: translateX(5px);
                        }
                        .label { 
                            font-weight: 700;
                            color: #667eea;
                            font-size: 11px;
                            text-transform: uppercase;
                            letter-spacing: 1px;
                            margin-bottom: 8px;
                            display: flex;
                            align-items: center;
                            gap: 6px;
                        }
                        .label::before {
                            content: '●';
                            color: #764ba2;
                            font-size: 8px;
                        }
                        .value { 
                            color: #1f2937;
                            font-size: 16px;
                            line-height: 1.6;
                            white-space: pre-wrap;
                            word-wrap: break-word;
                        }
                        .value a {
                            color: #667eea;
                            text-decoration: none;
                            font-weight: 600;
                            border-bottom: 2px solid transparent;
                            transition: border-color 0.2s ease;
                        }
                        .value a:hover {
                            border-bottom-color: #667eea;
                        }
                        .message-field {
                            background: linear-gradient(135deg, #fff5f5 0%, #fffaf0 100%);
                            border-left-color: #764ba2;
                        }
                        .cta-section {
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            padding: 30px;
                            text-align: center;
                            margin: 30px 0 0 0;
                            border-radius: 12px;
                        }
                        .cta-button {
                            display: inline-block;
                            background: white;
                            color: #667eea;
                            padding: 14px 32px;
                            border-radius: 8px;
                            text-decoration: none;
                            font-weight: 700;
                            font-size: 15px;
                            transition: transform 0.2s ease, box-shadow 0.2s ease;
                            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                        }
                        .cta-button:hover {
                            transform: translateY(-2px);
                            box-shadow: 0 6px 20px rgba(0,0,0,0.3);
                        }
                        .footer { 
                            background: #f9fafb;
                            padding: 25px 30px;
                            text-align: center;
                        }
                        .footer-content {
                            color: #6b7280;
                            font-size: 13px;
                            line-height: 1.6;
                        }
                        .timestamp {
                            display: inline-flex;
                            align-items: center;
                            gap: 6px;
                            background: white;
                            padding: 8px 16px;
                            border-radius: 20px;
                            margin-top: 10px;
                            font-size: 12px;
                            font-weight: 600;
                            color: #667eea;
                            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                        }
                        .divider {
                            height: 2px;
                            background: linear-gradient(90deg, transparent, #e5e7eb, transparent);
                            margin: 20px 0;
                        }
                        @media only screen and (max-width: 600px) {
                            body { padding: 20px 10px; }
                            .header { padding: 40px 20px; }
                            .content { padding: 30px 20px; }
                            .header h2 { font-size: 24px; }
                        }
                    </style>
                </head>
                <body>
                    <div class="email-wrapper">
                        <div class="container">
                            <!-- Header -->
                            <div class="header">
                                <div class="header-icon">📬</div>
                                <h2>New Contact Form Message</h2>
                                <div class="badge">Portfolio Website</div>
                            </div>
                            
                            <!-- Content -->
                            <div class="content">
                                <!-- From Field -->
                                <div class="field">
                                    <div class="label">From</div>
                                    <div class="value">${body.name}</div>
                                </div>
                                
                                <!-- Email Field -->
                                <div class="field">
                                    <div class="label">Email Address</div>
                                    <div class="value">
                                        <a href="mailto:${body.email}">${body.email}</a>
                                    </div>
                                </div>
                                
                                ${body.subject ? `
                                <!-- Subject Field -->
                                <div class="field">
                                    <div class="label">Subject</div>
                                    <div class="value">${body.subject}</div>
                                </div>
                                ` : ''}
                                
                                <!-- Message Field -->
                                <div class="field message-field">
                                    <div class="label">Message</div>
                                    <div class="value">${body.message.replace(/\n/g, '<br>')}</div>
                                </div>
                                
                                <!-- Call to Action -->
                                <div class="cta-section">
                                    <a href="mailto:${body.email}" class="cta-button">
                                        📧 Reply to ${body.name.split(' ')[0]}
                                    </a>
                                </div>
                            </div>
                            
                            <!-- Footer -->
                            <div class="footer">
                                <div class="footer-content">
                                    <p>This message was sent through your portfolio contact form</p>
                                    <div class="timestamp">
                                        🕐 ${new Date().toLocaleString('en-US', { 
                                            dateStyle: 'full', 
                                            timeStyle: 'short' 
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
                </html>
            `,
        });

        if (error) {
            console.error("❌ Resend API error details:");
            console.error("Error object:", JSON.stringify(error, null, 2));
            return NextResponse.json(
                { message: "Failed to send email. Please try again later." },
                { status: 500 }
            );
        }

        console.log("✅ Email sent successfully:", data?.id);

        return NextResponse.json(
            { 
                message: "Message sent successfully! I'll get back to you soon.",
                emailId: data?.id 
            },
            { status: 200 }
        );

    } catch (error) {
        console.error("❌ Error processing contact form:");
        console.error("Error type:", error instanceof Error ? 'Error object' : typeof error);
        console.error("Error message:", error instanceof Error ? error.message : String(error));
        console.error("Full error:", error);
        
        const errorMessage = error instanceof Error 
            ? error.message 
            : "Failed to send message";
            
        return NextResponse.json(
            { message: errorMessage },
            { status: 500 }
        );
    }
}