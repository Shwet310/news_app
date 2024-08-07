import React, { Component } from 'react'


const textStyle = {
  textAlign: 'justify',
  margin: '0 auto',
  maxWidth: '1000px'
};

export default class About extends Component {
  render() {
    return (
      <div  style={textStyle}>  

      <h6>
        Welcome to the News App, a dynamic and comprehensive platform designed to keep you informed with the latest news articles from across the globe. Our application is built to deliver up-to-date and relevant news content on a wide range of topics, providing you with a valuable resource for staying informed about current events.
      </h6>

      <h6><b>News Categories:</b></h6>

      <p>
        The News App offers a diverse selection of news categories, each catering to different interests and ensuring you have access to a broad spectrum of information:
      </p>

      <ul>
        <li><b>General:</b> This category features a wide range of news articles covering important global events and developments. It provides a comprehensive overview of significant occurrences from various domains.</li>
        <li><b>Business:</b> Stay updated with the latest news on business trends, financial markets, and economic developments. This category covers essential updates for professionals and those interested in the business world.</li>
        <li><b>Entertainment:</b> Get the latest updates on movies, music, celebrities, and the entertainment industry. This category ensures you are in the know about popular culture and entertainment trends.</li>
        <li><b>Health:</b> Access information on health-related topics, including medical research, wellness tips, and public health updates. This category helps you stay informed about health issues and advancements.</li>
        <li><b>Science:</b> Discover recent scientific discoveries, research breakthroughs, and technological advancements. This category provides insights into the latest developments in the scientific community.</li>
        <li><b>Sports:</b> Follow news about various sports events, scores, and athlete profiles. This category keeps sports enthusiasts informed about their favorite teams and athletes.</li>
        <li><b>Technology:</b> Explore the latest technology news, gadgets, and innovations that are shaping our digital world. This category covers emerging trends and advancements in technology.</li>
      </ul>

      <h6><b>Features:</b></h6>

      <p>
        <b>Up-to-Date Information:</b> The News App provides real-time updates, ensuring that you receive the latest news articles as they become available.
      </p>
      <p>
        <b>Broad Coverage:</b> With a wide array of categories, the app offers extensive coverage of global events and specialized topics, catering to diverse interests.
      </p>
      <p>
        <b>User-Friendly Experience:</b> Designed with a focus on accessibility and ease of use, the app provides a straightforward and intuitive way to browse and read news articles.
      </p>

      
      </div>
    )
  }
}
