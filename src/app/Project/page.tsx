import { ImagesSliderDemo } from "@/components/Image";

export default function Projects() {
  return (
    <>
      <div className="min-h-screen bg-gray-900">
        <h1 className="text-2xl font-bold text-white text-white text-center">My Projects</h1>
        <div>
          <div className="flex flex-row md:flex-row items-center justify-between p-4">
            <div className="m-2">
              <h1 className="text-4xl font-bold text-white mb-4">Indiube</h1>
              <p className="text-lg text-white mb-4 ">
                Indiube is an innovative video-sharing platform designed to provide a user experience similar to YouTube. It allows users to upload, share, and view videos across a wide range of categories. Key features include:</p>
                <ul className="text-white">
                  <li>User Profiles: Users can create and customize their profiles, subscribe to channels, and interact with other community members.</li>
                  <li>Video Uploads: Users can upload and edit videos, including captions, tags, and metadata.</li>
                  <li>Community Engagement: Features for liking, commenting, and sharing videos, as well as creating playlists.</li>
                  <li>Video Search: Users can search for videos by title, tags, and other criteria.</li>
                </ul>
            </div>
          </div>
          <div className="flex flex-row md:flex-row items-center justify-between p-4">
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">Mini-Project:Github-search-Gallery</h1>
              <p className="text-lg text-white mb-4">GitHub Search Gallery is a frontend project designed to provide users with an intuitive interface for searching and exploring GitHub repositories. Leveraging the GitHub API, the application allows users to input search queries and view a gallery of repositories that match their criteria. Key features include repository details such as name, description, stars, and forks, presented in a visually appealing and user-friendly manner. This project showcases modern web development techniques and frameworks, ensuring a responsive and efficient user experience.</p>
            </div>
            <div></div>
          </div>
        </div>
        <h1 className="text-xl font-bold text-center text-white">Many more to come...</h1>
      </div>
      <div>
        <ImagesSliderDemo/>
      </div>
    </>
  )
}