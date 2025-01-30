import './FormList.scss';
import FormItem from '../FormItem/FormItem';
import FormAddItem from '../FormAddItem/FormAddItem';

interface FormList_props {
    additionalClass: string;
}

export default function FormList({additionalClass}: FormList_props) {
    return (
        <ul className={`form_ul ${additionalClass ? 'modal': ''}`}>
            <FormItem readonly additionalClass='required' labelSpan='Тема' placeholder='На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller'/>
            <FormItem readonly labelSpan='Статус' placeholder='Новая'/>
            <FormItem readonly labelSpan='Описание'/>
            <FormItem readonly labelSpan='Продукт' placeholder='Platform' searchButton/>
            <FormItem readonly additionalClass='required' labelSpan='Рабочие заметки' placeholder='Проверить ACL id=172830402014193655'/>
            <FormItem readonly labelSpan='Приоритет' placeholder='Средний'/>
            <FormAddItem labelSpan='Ответственный' spanText='Константин Константинопольский'/>
            <FormAddItem labelSpan='Группа' spanText='Support Group'/>
            <FormItem labelSpan='Комментарии' additionalClass='comments'/>
            <FormAddItem labelSpan='Согласующие' spanText={['Андрей Пивоваров', 'Максим Галактионов', 'Анна', 'Андрей Пивоваров', 'Максим Галактионов', 'Анна']} additionalClass='concordants'/>
            <FormItem labelSpan='Календарь' calendarButton/>
            <FormItem labelSpan='Когда создано' placeholder='22.10.2024' calendarButton/>
            <FormAddItem labelSpan='Кем открыто' spanText={'Андрей Пивоваров'}/>
            <FormAddItem labelSpan='Кем создано' spanText={'Андрей Пивоваров'}/>
        </ul>
    )
}