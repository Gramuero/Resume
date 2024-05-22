import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaGithub, FaUniversity, FaLanguage, FaCode, FaProjectDiagram, FaBriefcase, FaUserAlt } from 'react-icons/fa';

const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  color: #444;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  animation: fadeIn 1s ease-in-out;
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
  background: linear-gradient(to right, #282c34, #61dafb);
  color: white;
  padding: 20px;
  border-radius: 10px 10px 0 0;
`;

const Name = styled.h1`
  font-size: 2.5em;
  margin: 0;
  letter-spacing: 1.5px;
`;

const ContactInfo = styled.p`
  font-size: 1.2em;
  margin: 5px 0;
`;

const Icon = styled.span`
  margin-right: 10px;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8em;
  border-bottom: 2px solid #61dafb;
  padding-bottom: 5px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: #282c34;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 10px 0;
  font-size: 1.2em;
  position: relative;
  padding-left: 20px;
  &:before {
    content: '•';
    color: #61dafb;
    position: absolute;
    left: 0;
    font-size: 1.5em;
  }
`;

const Link = styled.a`
  color: #61dafb;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  text-align: justify;
  color: #555;
`;

const Resume = () => {
  return (
    <Container>
      <Header>
        <Name>Юрий Шедогубов</Name>
        <ContactInfo><Icon><FaPhone /></Icon>Телефон: +7 (919) 577-33-04</ContactInfo>
        <ContactInfo><Icon><FaEnvelope /></Icon>Email: yurashedogubov@yandex.ru</ContactInfo>
        <ContactInfo>
          <Icon><FaGithub /></Icon>
          GitHub: <Link href="https://github.com/Gramuero" target="_blank" rel="noopener noreferrer">Gramuero</Link>
        </ContactInfo>
      </Header>
      <Section>
        <SectionTitle><Icon><FaUniversity /></Icon>Образование</SectionTitle>
        <List>
          <ListItem>Курганский Государственный университет</ListItem>
          <ListItem>Специалитет, Институт математики и интеллектуальных систем</ListItem>
          <ListItem>Специальность: Программная инженерия</ListItem>
          <ListItem>Срок обучения: 2020 – 2024 (очная форма)</ListItem>
        </List>
      </Section>
      <Section>
        <SectionTitle><Icon><FaLanguage /></Icon>Языки</SectionTitle>
        <List>
          <ListItem>Английский: Базовый</ListItem>
        </List>
      </Section>
      <Section>
        <SectionTitle><Icon><FaCode /></Icon>Навыки</SectionTitle>
        <List>
          <ListItem>Программирование: Python, C++, JavaScript, HTML, SQL, Git</ListItem>
          <ListItem>Фреймворки: React, Svelte, Flask</ListItem>
          <ListItem>Инструменты: Visual Studio Code, Microsoft Visual Studio, PyCharm</ListItem>
          <ListItem>Интересы: Разработка игр и сайтов, Программирование</ListItem>
        </List>
      </Section>
      <Section>
        <SectionTitle><Icon><FaProjectDiagram /></Icon>Опыт работы и проекты</SectionTitle>
        <List>
          <ListItem>Работа в команде: На 2 и 3 курсе участвовал в создании веб-сайтов в команде.</ListItem>
          <ListItem>Хакатоны: Занял 4 место на хакатоне вместе с командой, разработав веб-сайт.</ListItem>
          <ListItem>Курсовая работа: Приложение “Шахматы” на C++.</ListItem>
          <ListItem>Курсовая работа: Веб-сайт “Онлайн-магазин” с использованием HTML, CSS и JavaScript.</ListItem>
        </List>
      </Section>
      <Section>
        <SectionTitle><Icon><FaBriefcase /></Icon>Профессиональные интересы</SectionTitle>
        <List>
          <ListItem>Организации: Стартапы, малые технологические компании, крупный бизнес</ListItem>
          <ListItem>Сферы: IT, программирование, разработка игр</ListItem>
        </List>
      </Section>
      <Section>
        <SectionTitle><Icon><FaUserAlt /></Icon>Личные качества</SectionTitle>
        <List>
          <ListItem>Целеустремленность, амбициозность, коммуникабельность, стрессоустойчивость</ListItem>
        </List>
      </Section>
      <Section>
        <SectionTitle><Icon><FaUserAlt /></Icon>О себе</SectionTitle>
        <Paragraph>
          Я целеустремленный и амбициозный студент 4 курса Курганского Государственного университета, обучающийся на специальности "Программная инженерия". Имею базовые знания английского языка и навыки программирования на Python, C++, JavaScript, HTML, а также знаком с SQL и Git. Изучил такие фреймворки, как React, Svelte и Flask. Активно интересуюсь разработкой игр и сайтов, а также программированием. Имею опыт работы в команде над разработкой веб-сайтов и участие в хакатонах. В будущем хотел бы работать в сфере IT, особенно в стартапах или малых технологических компаниях, а также в крупном бизнесе.
        </Paragraph>
      </Section>
    </Container>
  );
};

export default Resume;
