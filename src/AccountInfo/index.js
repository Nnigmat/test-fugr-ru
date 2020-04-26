import React from 'react'

export default ({ data }) => {
    const { firstName, lastName, description, address } = data
    const { streetAddress, city, state, zip } = address

    return (
        <div>
            Выбран пользователь <b> {`${firstName} ${lastName}`}</b> <br />
            Описание: <br />
            <textarea>
                {description}
            </textarea> <br />
            Адрес проживания: <b>{streetAddress}</b> <br />
            Город: <b>{city}</b> <br />
            Провинция/штат: <b>{state}</b> <br />
            Индекс: <b>{zip}</b>
        </div>
    )
}
