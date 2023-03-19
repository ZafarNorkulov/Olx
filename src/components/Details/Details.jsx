import React from 'react';
import './Details.scss'
import { Button, Container } from '../../Utils/Components';
import { useTranslation } from 'react-i18next';
const Details = () => {
    const { t } = useTranslation()
    return (
        <section className='details'>
            <Container>
                <img src="https://static.olx.uz/static/olxuz/packed/font/2fbd23c39bff0aee6c0c84aaf60e66347d.svg" />
                <strong>{t("details__text")}</strong>
                <Button type={'light'} text={t('details__button')} />
            </Container>


        </section>
    );
}

export default Details;
