import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline';
import Image from 'next/image';
import HeaderItem from './HeaderItem';

const items = [
    {
        title: 'HOME',
        Icon: HomeIcon
    },
    {
        title: 'TRENDING',
        Icon: LightningBoltIcon
    },
    {
        title: 'VERIFIED',
        Icon: BadgeCheckIcon
    },
    {
        title: 'COLLECTIONS',
        Icon: CollectionIcon
    },
    {
        title: 'SEARCH',
        Icon: SearchIcon
    },
    {
        title: 'ACCOUNT',
        Icon: UserIcon
    },
]

function Header() {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center'>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                {items.map(item => {
                    return <HeaderItem 
                        title={item.title}
                        Icon={item.Icon}
                        key={item.title}
                    />
                })}
                
            </div>
            <Image 
                src={`https://cdn1.iconfinder.com/data/icons/hex-ico/128/hulu.png`}
                height='100'
                width='200'
            />
        </header>
    )
}

export default Header
