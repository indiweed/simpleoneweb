import './FormItem.scss';
import Image from 'next/image';
import Required from '@/images/required.svg';
import SearchBlack from '@/images/search_black.svg';
import Calendar from '@/images/calendar.svg';

interface FormItem_props {
    additionalClass?: 'required' |string;
    placeholder?: string;
    labelSpan?: string;
    searchButton?: boolean;
    calendarButton?: boolean
    readonly?: boolean;
}

export default function FormItem({ additionalClass, placeholder, labelSpan, searchButton, calendarButton, readonly }: FormItem_props) {
    return (
        <li className={`form_item ${additionalClass}`}>
            <label htmlFor='form_input' className='form_input_title'>
                {additionalClass === 'required' && (
                    <Image
                        src={Required}
                        width={8}
                        height={20}
                        alt='Обязательное поле'
                        className='lable_icon'
                    />
                )}
                <span>{labelSpan}</span>
            </label>
            <div className="form_input_container">
                <input readOnly = {readonly} placeholder={placeholder} className='form_input' />
                {searchButton === true && (
                    <button className='form_search_button form_button'>
                        <Image
                            src={SearchBlack}
                            width={20}
                            height={20}
                            alt='Поиск'
                        />
                    </button>
                )}
                {calendarButton === true && (
                    <button className='form_calendar_button form_button'>
                        <Image
                            src={Calendar}
                            width={20}
                            height={20}
                            alt='Календарь'
                        />
                    </button>
                )}
            </div>
        </li>
    );
}
