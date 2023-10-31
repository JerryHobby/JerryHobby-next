import {Resend} from "resend";
import WelcomeTemplate from "@/emails/WelcomeTemplate";
import {NextRequest, NextResponse} from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(request: NextRequest) {
    const body = await request.json();

    const email = body.email;
    const name = body.name;
    const token = body.token;

    if(!email || !name || !token){
        return NextResponse.json({
                error: "Missing Required Fields"
            },
            {
                status: 400
            });
    }

    const response = await resend.emails.send({
        from: "Jerry Hobby <Jerry@jerryhobby.com>",
        to: name + " <" + email + ">",
        subject: "Welcome to Call Journal",
        react: <WelcomeTemplate
            name={name}
            token={token}/>
    }).catch((error) => {
        console.log(error);
        return NextResponse.json(error);
    });

    console.log(response);
    return NextResponse.json(response);
}
