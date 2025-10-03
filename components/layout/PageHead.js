import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Punchi Pasala"}
                </title>
            </Head>
        </>
    )
}

export default PageHead