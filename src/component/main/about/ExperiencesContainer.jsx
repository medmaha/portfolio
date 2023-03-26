import AboutMe from "./AboutMe"

import React from "react"

export default function ExperiencesContainer() {
    const experiences = [0]
    return (
        <div className="max-w-[1000px] mx-auto" id="aboutMe">
            <div className="flex items-center flex-col gap-2">
                <>
                    <p>
                        Celesup is a social media platform that allows
                        supporters to connect with their favorite celebrities,
                        while also providing a range of features that promote
                        engagement and interactivity. The platform was designed
                        to create a space where fans and celebrities can
                        interact, share content, and engage in meaningful
                        conversations.
                    </p>

                    <p>
                        Built using the powerful combination of Django and
                        Next.js, Celesup is a full-stack web application that
                        offers robust functionality for both supporters and
                        celebrities. The platform includes features such as
                        content sharing, commenting, liking, following,
                        messaging, and more. With additional third-party
                        libraries like Redux and Django-cors-headers, Celesup is
                        a scalable and performant application that prioritizes
                        security and user experience.
                    </p>

                    <p>
                        One of the primary goals of Celesup is to provide a safe
                        and secure environment for users to connect and engage
                        with one another. To that end, the platform employs a
                        range of security measures, including secure
                        authentication methods such as JWT tokens and OAuth.
                        Additionally, the platform uses a task queue like Celery
                        to handle long-running or background tasks, such as
                        sending emails or processing uploaded images, which
                        helps improve the scalability and performance of the
                        application.
                    </p>

                    <p>
                        Another key feature of Celesup is its intuitive and
                        engaging user interface. The platform is designed to be
                        easy to use, with a clean and modern design that makes
                        it simple for users to navigate and find the content
                        they're looking for. Whether you're a celebrity looking
                        to connect with your fans or a supporter looking to
                        engage with your favorite celebrity, Celesup makes it
                        easy and fun to do so.
                    </p>

                    <p>
                        Overall, Celesup is an exciting and innovative social
                        media platform that offers a range of features and
                        functionality designed to connect supporters with their
                        favorite celebrities. With its robust technology stack,
                        focus on security and performance, and engaging user
                        interface, Celesup is poised to become one of the
                        leading social media platforms for fans and celebrities
                        alike
                    </p>
                </>
            </div>
        </div>
    )
}
