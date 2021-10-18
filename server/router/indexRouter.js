const e = require('express');

const router = require('express').Router();

let db = {
  topic: [
    {
      id: '1',
      title: 'Литература',
    },
    {
      id: '2',
      title: 'Кино',
    },
    {
      id: '3',
      title: 'Музыка',
    },
  ],
  questions: [
    {
      topicId: '1',
      id: '1',
      question: 'Как звали главного героя "Острова сокровищ"?',
      answer: 'Джим Хокинс',
      value: '200',
    },
    {
      topicId: '1',
      id: '2',
      question: 'Кто написал произведение "Мгла над Инсмутом"?',
      answer: 'Рэй Бредбери',
      value: '400',
    },
    {
      topicId: '1',
      id: '3',
      question: 'В каком веке жил Владимир Маяковский?',
      answer: '20',
      value: '600',
    },
    {
      topicId: '2',
      id: '1',
      question: 'Кто являлся отцом Арагорна в трилогии "Властелин колец"?',
      answer: 'Араторн',
      value: '200',
    },
    {
      topicId: '2',
      id: '2',
      question: 'Кто срежиссировал фильм "Отель Гранд Будапешт"?',
      answer: 'Уэс Андерсон',
      value: '400',
    },
    {
      topicId: '2',
      id: '3',
      question: 'Какой отечественный фильм был удостоен премии Оскар?',
      answer: 'Москва слезам не верит',
      value: '600',
    },
    {
      topicId: '3',
      id: '1',
      question: 'Кто ялвяется солистом группы Rolling Stones?',
      answer: 'Мик Джаггер',
      value: '200',
    },
    {
      topicId: '3',
      id: '2',
      question: 'С какой известной студией звукозаписи сотрудничали The Beatles?',
      answer: 'Abbey Road Studios',
      value: '400',
    },
    {
      topicId: '3',
      id: '3',
      question: 'Когда родился Владимир Высоцкий?',
      answer: '25 января 1938',
      value: '600',
    },
  ],
};

router.get('/', (req, res) => {
  res.json({ topic: db.topic });
});

router.get('/questions', (req, res) => {
  res.json({ questions: db.questions });
});

router.post('/modalquestion', (req, res) => {
  console.log(req.body);
  const oneQuestion = db.questions.find(
    (el) => el.id === req.body.id && el.topicId === req.body.topicId
  );

  res.json({ oneQuestion });
});

module.exports = router;
