import { NextResponse } from "next/server";

interface ContactRequestBody {
    name: string;
    email: string;
    subject?: string;
    message: string;
}

export async function POST(request: Request) {
    try {
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

        // TODO: Add your email sending logic here
        // For example, using Nodemailer, SendGrid, Resend, etc.
        console.log("Contact form submission:", {
            name: body.name,
            email: body.email,
            subject: body.subject,
            message: body.message,
            timestamp: new Date().toISOString()
        });

        // Simulate processing time (remove in production)
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json(
            { message: "Message sent successfully" },
            { status: 200 }
        );

    } catch (error) {
        console.error("Error processing contact form:", error);
        
        const errorMessage = error instanceof Error 
            ? error.message 
            : "Failed to send message";
            
        return NextResponse.json(
            { message: errorMessage },
            { status: 500 }
        );
    }
}