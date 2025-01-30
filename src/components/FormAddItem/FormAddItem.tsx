import './FormAddItem.scss';
import Image from 'next/image';
import DeleteItem from '@/images/delete_icon.svg';
import ClearTextarea from '@/images/delete_btn_2.svg';
import AddItem from '@/images/Plus.svg';
import Lupa from '@/images/search_black.svg';

interface FormAddItem_props {
    additionalClass?: string;
    spanText?: string | string[];
    labelSpan: string;
}

export default function FormAddItem({ spanText, labelSpan, additionalClass }: FormAddItem_props) {
    return (
        <li className={`form_item form_add_item ${additionalClass}`}>
            <label htmlFor='form_add_input' className='form_add_label'>
                {labelSpan}
            </label>
            <div className='form_add_item_container'>
                <div className='form_add_border'>
                    <div className='form_add_input_container'>
                        {Array.isArray(spanText) ? (
                            spanText.map((text, index) => (
                                <div key={index} className='input_item'>
                                    <span>{text}</span>
                                    <button className='delete_btn'>
                                        <Image
                                            src={DeleteItem}
                                            width={10}
                                            height={10}
                                            alt='удалить'
                                        />
                                    </button>
                                </div>
                            ))
                        ) : (
                            <div className='form_add_input_span_wrap'>
                                <span className='form_add_input'>{spanText}</span>
                            </div>
                        )}
                    </div>
                    <button className='clear_textarea'>
                        <Image
                            src={ClearTextarea}
                            width={16}
                            height={16}
                            alt='Очистить'
                        />
                    </button>
                </div>
                    <div className='form_add_buttons'>
                        <button className='add_button'>
                            <Image
                                src={AddItem}
                                width={20}
                                height={20}
                                alt='Добавить'
                            />
                        </button>
                        <button className='search_button'>
                            <Image
                                src={Lupa}
                                width={20}
                                height={20}
                                alt='Найти'
                            />
                        </button>
                    </div>
            </div>

        </li>
    );
}
