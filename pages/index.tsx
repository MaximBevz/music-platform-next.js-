import Head from 'next/head';
import Socials from "../components/Socials";

export const getStaticProps = async () => {
    try {
        const response = await fetch(`${process.env.API_URL}/socials/`);
        const data = await response.json();

        if (!data) {
            return {
                notFound: true
            }
        }

        return {
            props: {socials: data}
        }
    } catch (e) {
        return {
            props: { social: null }
        }
    }
}

const Home = ({ socials }) => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Socials socials={socials}/>
        </>
    )
}

export default Home;
