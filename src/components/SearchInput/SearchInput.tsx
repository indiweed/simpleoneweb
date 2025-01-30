import './SearchInput.scss';
import Search from '@/images/search.svg';
import Filter from '@/images/filter.svg';
import Image from 'next/image';

interface searchInput_props {
    placeholder?: string;
    type?: 'text' | 'password' | 'tel' | 'email' | 'file' | 'number';
    additionalClass?: 'search' | 'filter';
}

export default function SearchInput({ placeholder, type, additionalClass }: searchInput_props) {
   
    const src = additionalClass === 'search' ? Search : additionalClass === 'filter' ? Filter : null;

    const inputSizeClass = additionalClass === 'search' ? 'input-large' : additionalClass === 'filter' ? 'input-small' : '';

    return (
        <div className={`input_container ${inputSizeClass}`}>
            <input className='input' type={type} placeholder={placeholder} />
            <button className={`${additionalClass}`}>
                {src && (
                    <Image
                        src={src}
                        width={20}
                        height={20}
                        alt='Найти'
                        className='input_icon'
                    />
                )}
            </button>
        </div>
    );
}
