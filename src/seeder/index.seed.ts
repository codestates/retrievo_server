import { Factory, Seeder } from "typeorm-seeding";
// entities
import User from "../entities/User";
import Project from "../entities/Project";
import ProjectPermission from "../entities/ProjectPermission";
import SocialLogin from "../entities/SocialLogins";

export default class CreateSeeds implements Seeder {
  async run(factory: Factory): Promise<void> {
    const users = await factory(User)()
      .map(async (user: User) => {
        const socialLogin = await factory(SocialLogin)().create();
        return Object.assign(user, { socialLogin });
      })
      .createMany(30);

    const projects = await factory(Project)().createMany(10);
    const projectPermissions = await factory(ProjectPermission)().makeMany(30);

    let index = 0;

    // eslint-disable-next-line no-restricted-syntax
    for await (const projectPermission of projectPermissions) {
      const user = users[index];
      const project = projects[index % 10];
      Object.assign(projectPermission, { user, project });
      await factory(ProjectPermission)().create(projectPermission);
      index += 1;
    }
  }
}
