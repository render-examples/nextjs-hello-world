import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const topicData = [
  {
    title: 'CSS',
    superTopicId: 6

  },
  {
    title: 'HTML',
    superTopicId: 6
  },
]

const notesData = [
{
  title: "HuggingFace - index2",
  body: "Hugging Face Hub documentationHugging Face				Models					Datasets					Spaces					Docs			Solutions		Pricing				Log In				Sign Up Hub documentation			Hugging Face Hub documentation					Hub					Search documentationmainEN🤗 Hugging Face HubRepositoriesGetting Started with RepositoriesRepository SettingsPull Requests & DiscussionsNotificationsWebhooksNext StepsLicensesModelsThe Model HubModel CardsGated ModelsUploading ModelsDownloading ModelsIntegrated LibrariesModel WidgetsInference API docsFrequently Asked QuestionsAdvanced TopicsDatasetsDatasets OverviewDataset CardsGated DatasetsDataset ViewerUsing DatasetsAdding New DatasetsSpacesSpaces OverviewSpaces GPU UpgradesGradio SpacesStreamlit SpacesStatic HTML SpacesDocker SpacesEmbed your SpaceSpaces Configuration ReferenceSpaces ChangelogAdvanced TopicsOtherOrganizationsBillingDigital Object Identifier (DOI)SecurityHub API EndpointsJoin the Hugging Face communityand get access to the augmented documentation experience		Collaborate on models, datasets and Spaces				Faster examples with accelerated inference				Switch between documentation themes				Sign Upto get started Hugging Face Hub documentation	The Hugging Face Hub is a platform with over 120k models, 20k datasets, and 50k demo apps (Spaces), all open source and publicly available, in an online platform where people can easily collaborate and build ML together. The Hub works as a central place where anyone can explore, experiment, collaborate and build technology with Machine Learning. Are you ready to join the path towards open source Machine Learning? 🤗RepositoriesIntroductionGetting StartedRepository SettingsPull requests and DiscussionsWebhooksNext StepsLicenses ModelsIntroductionThe Model HubModel CardsLibrariesTasksUploading ModelsDownloading ModelsWidgetsInference API DatasetsIntroductionDatasets OverviewDataset CardsGated DatasetsDataset viewerUsing DatasetsAdding New Datasets SpacesIntroductionSpaces OverviewGradio SpacesStreamlit SpacesStatic HTML SpacesDocker SpacesEmbed your SpaceReferenceChangelogAdvanced Topics OtherOrganizationsDigital Object Identifier (DOI)SecurityHub API EndpointsContributor Code of ConductContent GuidelinesWhat's the Hugging Face Hub?	We are helping the community work together towards the goal of advancing Machine Learning 🔥.The Hugging Face Hub is a platform with over 120k models, 20k datasets, and 50k demos in which people can easily collaborate in their ML workflows. The Hub works as a central place where anyone can share, explore, discover, and experiment with open-source Machine Learning.No single company, including the Tech Titans, will be able to “solve AI” by themselves – the only way we’ll achieve this is by sharing knowledge and resources in a community-centric approach. We are building the largest open-source collection of models, datasets, demos and metrics on the Hugging Face Hub to democratize and advance ML for everyone 🚀.We encourage you to read the Code of Conduct and the Content Guidelines to familiarize yourself with the values that we expect our community members to uphold 🤗. What can you find on the Hub?	The Hugging Face Hub hosts Git-based repositories, which are version-controlled places that can contain all your files. 💾On it, you’ll be able to upload and discover…Models, hosting the latest state-of-the-art models for NLP, vision, and audio tasksDatasets, featuring a wide variety of data for different domains and modalities..Spaces, interactive apps for demonstrating ML models directly in your browser.The Hub offers versioning, commit history, diffs, branches, and over a dozen library integrations! You can learn more about the features that all repositories share in the Repositories documentation.Models	You can discover and use dozens of thousands of open-source ML models shared by the community. To promote responsible model usage and development, model repos are equipped with Model Cards to inform users of each model’s limitations and biases. Additional metadata about info such as their tasks, languages, and metrics can be included, with training metrics charts even added if the repository contains TensorBoard traces. It’s also easy to add an inference widget to your model, allowing anyone to play with the model directly in the browser! For production settings, an API is provided to instantly serve your model.To upload models to the Hub, or download models and integrate them into your work, explore the Models documentation. You can also choose from over a dozen libraries such as 🤗 Transformers, Asteroid, and ESPnet that support the Hub.Datasets	The Hub is home to over 5,000 datasets in more than 100 languages that can be used for a broad range of tasks across NLP, Computer Vision, and Audio. The Hub makes it simple to find, download, and upload datasets. Datasets are accompanied by extensive documentation in the form of Dataset Cards and Dataset Preview to let you explore the data directly in your browser. While many datasets are public, organizations and individuals can create private datasets to comply with licensing or privacy issues. You can learn more about Datasets here on Hugging Face Hub documentation.The 🤗 datasets library allows you to programmatically interact with the datasets, so you can easily use datasets from the Hub in your projects. With a single line of code, you can access the datasets; even if they are so large they don’t fit in your computer, you can use streaming to efficiently access the data.Spaces	Spaces is a simple way to host ML demo apps on the Hub. They allow you to build your ML portfolio, showcase your projects at conferences or to stakeholders, and work collaboratively with other people in the ML ecosystem.We currently support two awesome Python SDKs (Gradio and Streamlit) that let you build cool apps in a matter of minutes. Users can also create static Spaces which are simple HTML/CSS/JavaScript page within a Space.After you’ve explored a few Spaces (take a look at our Space of the Week!), dive into the Spaces documentation to learn all about how you can create your own Space. You’ll also be able to upgrade your Space to run on a GPU or other accelerated hardware. ⚡️Organizations	Companies, universities and non-profits are an essential part of the Hugging Face community! The Hub offers Organizations, which can be used to group accounts and manage datasets, models, and Spaces. Educators can also create collaborative organizations for students using Hugging Face for Classrooms. An organization’s repositories will be featured on the organization’s page and every member of the organization will have the ability to contribute to the repository. In addition to conveniently grouping all of an organization’s work, the Hub allows admins to set roles to control access to repositories, and manage their organization’s payment method and billing info. Machine Learning is more fun when collaborating! 🔥Explore existing organizations, create a new organization here, and then visit the Organizations documentation to learn more.Security	The Hugging Face Hub supports security and access control features to give you the peace of mind that your code, models, and data are safe. Visit the Security section in these docs to learn about:User Access TokensAccess Control for OrganizationsSigning commits with GPGMalware scanningRepositories→Hugging Face Hub documentationWhat's the Hugging Face Hub?What can you find on the Hub?ModelsDatasetsSpacesOrganizationsSecurity",
  topicId: 7
}
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of topicData) {
    const topic = await prisma.topic.create({
      data: u,
    })
    console.log(`Created Topic with id: ${topic.id}`)
  }

  for (const u of notesData) {
    const note = await prisma.note.create({
      data: u,
    })
    console.log(`Created Topic with id: ${note.id}`)
  }

  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })