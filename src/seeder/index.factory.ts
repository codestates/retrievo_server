import { define } from "typeorm-seeding";
import Faker from "faker";

// entities
import User, { roleTypes } from "../entities/User";
import Project from "../entities/Project";
import ProjectPermission from "../entities/ProjectPermission";
import SocialLogin, { socialProviderType } from "../entities/SocialLogins";

define(User, (faker: typeof Faker) => {
  const roles = [roleTypes.MEMBER, roleTypes.GUEST, roleTypes.ADMIN];

  const user = new User();
  user.id = faker.random.uuid();
  user.username = faker.name.findName();
  user.email = faker.internet.email();
  user.password = faker.random.word();
  user.role = roles[Math.floor(Math.random() * 2 + 1)];
  return user;
});

define(SocialLogin, (faker: typeof Faker) => {
  const renderSocialProvider = (): socialProviderType => {
    const socialProviderArray = [
      socialProviderType.GITHUB,
      socialProviderType.GOOGLE,
    ];
    return socialProviderArray[Math.floor(Math.random())];
  };

  const socialLogin = new SocialLogin();
  socialLogin.id = faker.random.uuid();
  socialLogin.providerId = faker.random.word();
  socialLogin.socialProvider = renderSocialProvider();
  return socialLogin;
});

define(ProjectPermission, (faker: typeof Faker) => {
  const projectPermission = new ProjectPermission();
  projectPermission.id = faker.random.uuid();
  projectPermission.isAdmin = faker.random.boolean();
  return projectPermission;
});

define(Project, (faker: typeof Faker) => {
  const project = new Project();
  project.id = faker.random.uuid();
  project.name = faker.company.companyName();
  project.logo = faker.image.imageUrl();
  return project;
});

//   export default class CreatePets implements Seeder {
//   public async run(factory: Factory, connection: Connection): Promise<any> {

//     await factory(User)().map(async (user: User) => {
//     const socialLogins: Users[] = await factory(User)().createMany(5);
//     const socialProviderIds = users.map((user: User) => user.Id);
//     await Project.user().attach(userIds);

// //
// await factory(ProjectPermission)()
//   .map(async (projectPermission: Project) => {
//     const users: Users[] = await factory(User)().createMany(5);
//     const userIds = users.map((user: User) => user.Id);
//     const projectIds = users.map(());
//     const socialLogin: afacas~
//
//     await Projectpermisison.user().attach(userIds);
//     await Projectpermisison.project().attac(usdf);
//   })
//   .createMany(5);
// // project Many(5);
// // project
