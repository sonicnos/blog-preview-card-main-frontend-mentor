import Card from "./components/Card";
import illustrationArticle from "../public/illustration-article.svg";
import userAvatar from "../public/image-avatar.webp";

function App() {
  const illustrationArticleAlt = "illustration-article";
  const bannerText = "Learning";
  const title = "HTML & CSS foundations";
  const publishedDate = "Published 21 Dec 2023";
  const description =
    "These languages are the backbone of every website, defining structure, content, and presentation.";
  const username = "Greg Hooper";
  return (
    <body className="h-screen bg-[#f5d04e] font-Figtree">
      <div className="flex items-center justify-center h-full w full">
        <Card
          image={illustrationArticle}
          alt={illustrationArticleAlt}
          bannerText={bannerText}
          publishedDate={publishedDate}
          title={title}
          description={description}
          username={username}
          usernameAvatar={userAvatar}
        />
      </div>
    </body>
  );
}

export default App;
