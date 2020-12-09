# Details

Date : 2020-12-08 06:28:36

Directory /Users/paulkim/Desktop/cs_projects/retrievo_server

Total : 67 files,  3975 codes, 256 comments, 679 blanks, all 4910 lines

[summary](results.md)

## Files
| filename | language | code | comment | blank | total |
| :--- | :--- | ---: | ---: | ---: | ---: |
| [.circleci/config.yml](/.circleci/config.yml) | YAML | 36 | 3 | 10 | 49 |
| [.eslintrc.js](/.eslintrc.js) | JavaScript | 50 | 0 | 1 | 51 |
| [.github/ISSUE_TEMPLATE/-retrospect--n----------.md](/.github/ISSUE_TEMPLATE/-retrospect--n----------.md) | Markdown | 16 | 0 | 7 | 23 |
| [.prettierrc](/.prettierrc) | JSON | 4 | 0 | 1 | 5 |
| [README.md](/README.md) | Markdown | 4 | 0 | 4 | 8 |
| [memo.temp.md](/memo.temp.md) | Markdown | 3 | 0 | 1 | 4 |
| [package.json](/package.json) | JSON | 94 | 0 | 1 | 95 |
| [scripts/pre-commit.sh](/scripts/pre-commit.sh) | Shell Script | 4 | 1 | 3 | 8 |
| [scripts/pre-push.sh](/scripts/pre-push.sh) | Shell Script | 8 | 1 | 3 | 12 |
| [scripts/prepare-commit-msg.sh](/scripts/prepare-commit-msg.sh) | Shell Script | 17 | 1 | 6 | 24 |
| [src/bin/invitation.ts](/src/bin/invitation.ts) | TypeScript | 110 | 0 | 4 | 114 |
| [src/constants.ts](/src/constants.ts) | TypeScript | 3 | 0 | 1 | 4 |
| [src/entities/Board.ts](/src/entities/Board.ts) | TypeScript | 49 | 0 | 9 | 58 |
| [src/entities/Comment.ts](/src/entities/Comment.ts) | TypeScript | 53 | 0 | 9 | 62 |
| [src/entities/CommentNotification.ts](/src/entities/CommentNotification.ts) | TypeScript | 62 | 8 | 11 | 81 |
| [src/entities/File.ts](/src/entities/File.ts) | TypeScript | 32 | 0 | 6 | 38 |
| [src/entities/Label.ts](/src/entities/Label.ts) | TypeScript | 34 | 0 | 6 | 40 |
| [src/entities/Project.ts](/src/entities/Project.ts) | TypeScript | 69 | 0 | 14 | 83 |
| [src/entities/ProjectPermission.ts](/src/entities/ProjectPermission.ts) | TypeScript | 29 | 0 | 5 | 34 |
| [src/entities/SocialLogins.ts](/src/entities/SocialLogins.ts) | TypeScript | 45 | 1 | 7 | 53 |
| [src/entities/Sprint.ts](/src/entities/Sprint.ts) | TypeScript | 64 | 0 | 14 | 78 |
| [src/entities/SprintNotification.ts](/src/entities/SprintNotification.ts) | TypeScript | 68 | 9 | 12 | 89 |
| [src/entities/Task.ts](/src/entities/Task.ts) | TypeScript | 109 | 0 | 22 | 131 |
| [src/entities/TaskLabel.ts](/src/entities/TaskLabel.ts) | TypeScript | 25 | 0 | 4 | 29 |
| [src/entities/TaskNotification.ts](/src/entities/TaskNotification.ts) | TypeScript | 66 | 5 | 13 | 84 |
| [src/entities/User.ts](/src/entities/User.ts) | TypeScript | 101 | 0 | 19 | 120 |
| [src/entities/UserTask.ts](/src/entities/UserTask.ts) | TypeScript | 25 | 0 | 4 | 29 |
| [src/entities/index.ts](/src/entities/index.ts) | TypeScript | 33 | 0 | 2 | 35 |
| [src/index.ts](/src/index.ts) | TypeScript | 95 | 8 | 16 | 119 |
| [src/middleware/checkAdminPermission.ts](/src/middleware/checkAdminPermission.ts) | TypeScript | 25 | 0 | 4 | 29 |
| [src/middleware/checkAuthStatus.ts](/src/middleware/checkAuthStatus.ts) | TypeScript | 13 | 0 | 3 | 16 |
| [src/middleware/checkIfGuest.ts](/src/middleware/checkIfGuest.ts) | TypeScript | 20 | 0 | 4 | 24 |
| [src/middleware/checkProjectPermission.ts](/src/middleware/checkProjectPermission.ts) | TypeScript | 26 | 2 | 4 | 32 |
| [src/repository/BoardCustomRepository.ts](/src/repository/BoardCustomRepository.ts) | TypeScript | 145 | 46 | 32 | 223 |
| [src/repository/TaskCustomRepository.ts](/src/repository/TaskCustomRepository.ts) | TypeScript | 441 | 64 | 60 | 565 |
| [src/resolvers/board.ts](/src/resolvers/board.ts) | TypeScript | 189 | 18 | 34 | 241 |
| [src/resolvers/index.ts](/src/resolvers/index.ts) | TypeScript | 13 | 0 | 2 | 15 |
| [src/resolvers/project.ts](/src/resolvers/project.ts) | TypeScript | 302 | 19 | 52 | 373 |
| [src/resolvers/sprint.ts](/src/resolvers/sprint.ts) | TypeScript | 261 | 16 | 44 | 321 |
| [src/resolvers/task.ts](/src/resolvers/task.ts) | TypeScript | 134 | 9 | 19 | 162 |
| [src/resolvers/types/BoardOptionInput.ts](/src/resolvers/types/BoardOptionInput.ts) | TypeScript | 11 | 1 | 4 | 16 |
| [src/resolvers/types/BoardResponse.ts](/src/resolvers/types/BoardResponse.ts) | TypeScript | 11 | 0 | 4 | 15 |
| [src/resolvers/types/BoardUpdateInput.ts](/src/resolvers/types/BoardUpdateInput.ts) | TypeScript | 11 | 1 | 4 | 16 |
| [src/resolvers/types/Error.ts](/src/resolvers/types/Error.ts) | TypeScript | 11 | 0 | 5 | 16 |
| [src/resolvers/types/MyContext.ts](/src/resolvers/types/MyContext.ts) | TypeScript | 10 | 0 | 2 | 12 |
| [src/resolvers/types/ProjectListResponse.ts](/src/resolvers/types/ProjectListResponse.ts) | TypeScript | 11 | 0 | 4 | 15 |
| [src/resolvers/types/ProjectResponse.ts](/src/resolvers/types/ProjectResponse.ts) | TypeScript | 21 | 0 | 6 | 27 |
| [src/resolvers/types/SprintOptionInput.ts](/src/resolvers/types/SprintOptionInput.ts) | TypeScript | 21 | 1 | 9 | 31 |
| [src/resolvers/types/SprintResponse.ts](/src/resolvers/types/SprintResponse.ts) | TypeScript | 15 | 3 | 7 | 25 |
| [src/resolvers/types/TaskCreateInput.ts](/src/resolvers/types/TaskCreateInput.ts) | TypeScript | 13 | 0 | 6 | 19 |
| [src/resolvers/types/TaskResponse.ts](/src/resolvers/types/TaskResponse.ts) | TypeScript | 11 | 0 | 4 | 15 |
| [src/resolvers/types/TaskUpdateInput.ts](/src/resolvers/types/TaskUpdateInput.ts) | TypeScript | 34 | 0 | 13 | 47 |
| [src/resolvers/types/UserResponse.ts](/src/resolvers/types/UserResponse.ts) | TypeScript | 19 | 0 | 7 | 26 |
| [src/resolvers/types/UserUpdateOptions.ts](/src/resolvers/types/UserUpdateOptions.ts) | TypeScript | 10 | 0 | 4 | 14 |
| [src/resolvers/types/UsernamePasswordInput.ts](/src/resolvers/types/UsernamePasswordInput.ts) | TypeScript | 11 | 1 | 4 | 16 |
| [src/resolvers/user.ts](/src/resolvers/user.ts) | TypeScript | 225 | 5 | 32 | 262 |
| [src/seeder/index.factory.ts](/src/seeder/index.factory.ts) | TypeScript | 143 | 1 | 20 | 164 |
| [src/seeder/index.seed.ts](/src/seeder/index.seed.ts) | TypeScript | 159 | 24 | 16 | 199 |
| [src/services/authService.ts](/src/services/authService.ts) | TypeScript | 113 | 5 | 20 | 138 |
| [src/services/invitationService.ts](/src/services/invitationService.ts) | TypeScript | 0 | 0 | 1 | 1 |
| [src/services/mailerService.ts](/src/services/mailerService.ts) | TypeScript | 25 | 0 | 4 | 29 |
| [src/services/notificationService.ts](/src/services/notificationService.ts) | TypeScript | 0 | 0 | 1 | 1 |
| [src/types.ts](/src/types.ts) | TypeScript | 36 | 1 | 6 | 43 |
| [src/utils/ErrorFactory.ts](/src/utils/ErrorFactory.ts) | TypeScript | 78 | 1 | 9 | 88 |
| [src/utils/authUtils.ts](/src/utils/authUtils.ts) | TypeScript | 25 | 0 | 3 | 28 |
| [src/utils/sprintRowDnd.ts](/src/utils/sprintRowDnd.ts) | TypeScript | 47 | 1 | 10 | 58 |
| [tsconfig.json](/tsconfig.json) | JSON | 27 | 0 | 1 | 28 |

[summary](results.md)