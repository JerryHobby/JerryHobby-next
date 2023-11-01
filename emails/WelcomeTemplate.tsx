import React from 'react';
import {Body, Container, Html, Link, Preview, Tailwind, Text} from "@react-email/components";

interface Props {
    name: string,
    token: string,
}

const WelcomeTemplate = ({name, token}: Props) => {
    return (
        <Html>
            <Tailwind>
                <Preview className={preview}>
                    {name}, Welcome to Call Journal
                </Preview>
                <Body className={body}>
                    <Container className={container}>
                        <Text className={heading}>Welcome to Call Journal</Text>
                        <Text className={text}>Please click the link below to verify your email address.</Text>
                        <Link className={link} href={"https://calljournal.app/verify/" + token}>Verify Email</Link>
                        <Text className={text}>If you did not request this email, please ignore it.</Text>
                        <Text className={text}>Thanks,</Text>
                        <Text className={text}>Call Journal Team</Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

const body: string = "bg-white"
const container: string = "p-10"
const text: string = "text-md"
const link: string = "text-blue-500"
const preview: string = "text-lg"
const heading: string = "text-3xl"

export default WelcomeTemplate;