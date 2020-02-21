const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');
const axios = require('axios').default;
const cheerio = require('cheerio');
const cron = require('node-cron');
const { News } = require('./models');

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

cron.schedule("*0 */4 * * *", async () => {
  console.log("Cron Job Executed!");
  const html = await axios.get("https://cnnespanol.cnn.com/");
  const $ = cheerio.load(html.data);
  const title = $(".news__title");

  title.each((index, element) => {
    const news = {
      title: $(element)
        .text()
        .toString()
        .trim(),
      link: $(element)
        .children()
        .attr("href")
    };

    News.create([news]);
  });
});