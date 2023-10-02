const js = {
  name: "JavaScript",
  author: {
    name: "HM Nayem",
    email: "nayem@mail.com",
  },
  contents: {
    video: {
      counts: 222,
    },
  },
};

const node = {
    name: "node js",
    author: {
      name: "HM Nayem",
      email: "nayem@mail.com",
    },
    contents: {
      video: {
        counts: 234,
      },
    },
  };

  const react = {
    name: "React Mastery",
    author: {
      name: "HM Nayem",
      email: "nayem@mail.com",
    },
    contents: {
      video: {
        counts: 234,
      },
      article: {
        counts: 10,
      },
      quiz: {
        counts: 15,
      },
    },
  };

  const inspectObj = (obj, path, returnValue = 0) => {
    return path.split('.').reduce((acc, field) => {
        if (acc) {
            return acc[field];
        }
        return returnValue;
    }, obj)
  }

  const courses = [js, node, react];

  courses.forEach((course) => {
    const videoCount = inspectObj(course, 'contents.video.counts');
    const articleCount = inspectObj(course, 'contents.article.counts');
    const quizCount = inspectObj(course, 'contents.quiz.counts');
    console.log(`video: ${videoCount}, article: ${articleCount}, quiz: ${quizCount}`);
  });
