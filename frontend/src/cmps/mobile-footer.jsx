import { GrHomeRounded } from 'react-icons/gr'
import { FiMail } from 'react-icons/fi'
import { BiSearchAlt } from 'react-icons/bi'
import { HiOutlineClipboardList } from 'react-icons/hi'
import { HiOutlineUserCircle } from 'react-icons/hi'

export function MobileFooter() {


    return (
        <section className="mobile-footer">
            <div className='icon'>
                <GrHomeRounded size={20}/>
            </div>
            <div className='icon'>
                <FiMail size={22} />
            </div>
            <div className='icon'>
                <BiSearchAlt size={25} />
            </div>
            <div className='icon'>
                <HiOutlineClipboardList size={25} />
            </div>
            <div className='icon'>
                <HiOutlineUserCircle size={25} />
            </div>
        </section>
    )
}