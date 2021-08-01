import Link from 'next/link'

import Image from 'next/image'

import { signIn, signOut, useSession } from 'next-auth/client'

export default function Header() {

    const [session, loading] = useSession();
    return (<header className="g-header">
        <Link href='/'>
            <a>
                <Image
                    alt='Logo'
                    src="/img/logoMarvel.png"
                    className='g-header__brand'
                    width={92}
                    height={37}
                />
            </a>
        </Link>

        <nav className="g-header__nav">
            <ul className='o-ui-list o-ui-list--horizontal'>
                <li className='g-header__nav--item'><Link href='/personajes'><a>Personajes</a></Link></li>
                <li className='g-header__nav--item'><Link href='/comics'><a>Comics</a></Link></li>
                <li className='g-header__nav--item'><Link href='/creadores'><a>Creadores</a></Link></li>
            </ul>
        </nav>

        <nav className="g-header__nav" >
            <ul className='o-ui-list o-ui-list--horizontal' >
                {
                    !session ? (
                        <>
                            <li className='a-btn a-btn--secondary' onClick={signIn}>Sign in</li>
                            <li className='a-btn a-btn--primary'> Sign up </li>
                        </>
                    )
                        : (
                            <><li className='a-btn a-btn--secondary' onClick={signOut}>Log out ({session.user.name})</li></>
                        )
                }

            </ul>
        </nav>
    </header>
    )
}