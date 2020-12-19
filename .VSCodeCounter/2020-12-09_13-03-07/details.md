# Details

Date : 2020-12-09 13:03:07

Directory /Users/paulkim/Desktop/cs_projects/retrievo_server

Total : 86 files,  4754 codes, 329 comments, 850 blanks, all 5933 lines

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
| [package.json](/package.json) | JSON | 95 | 0 | 1 | 96 |
| [scripts/pre-commit.sh](/scripts/pre-commit.sh) | Shell Script | 4 | 1 | 3 | 8 |
| [scripts/pre-push.sh](/scripts/pre-push.sh) | Shell Script | 8 | 1 | 3 | 12 |
| [scripts/prepare-commit-msg.sh](/scripts/prepare-commit-msg.sh) | Shell Script | 17 | 1 | 6 | 24 |
| [src/bin/invitation.ts](/src/bin/invitation.ts) | TypeScript | 110 | 0 | 4 | 114 |
| [src/constants.ts](/src/constants.ts) | TypeScript | 3 | 0 | 1 | 4 |
| [src/entities/Board.ts](/src/entities/Board.ts) | TypeScript | 49 | 0 | 9 | 58 |
| [src/entities/Comment.ts](/src/entities/Comment.ts) | TypeScript | 52 | 0 | 9 | 61 |
| [src/entities/CommentNotification.ts](/src/entities/CommentNotification.ts) | TypeScript | 62 | 0 | 10 | 72 |
| [src/entities/File.ts](/src/entities/File.ts) | TypeScript | 32 | 0 | 6 | 38 |
| [src/entities/Label.ts](/src/entities/Label.ts) | TypeScript | 34 | 0 | 6 | 40 |
| [src/entities/Project.ts](/src/entities/Project.ts) | TypeScript | 69 | 0 | 14 | 83 |
| [src/entities/ProjectPermission.ts](/src/entities/ProjectPermission.ts) | TypeScript | 33 | 0 | 5 | 38 |
| [src/entities/SocialLogins.ts](/src/entities/SocialLogins.ts) | TypeScript | 45 | 1 | 7 | 53 |
| [src/entities/Sprint.ts](/src/entities/Sprint.ts) | TypeScript | 64 | 0 | 14 | 78 |
| [src/entities/SprintNotification.ts](/src/entities/SprintNotification.ts) | TypeScript | 68 | 9 | 12 | 89 |
| [src/entities/Task.ts](/src/entities/Task.ts) | TypeScript | 108 | 0 | 22 | 130 |
| [src/entities/TaskLabel.ts](/src/entities/TaskLabel.ts) | TypeScript | 25 | 0 | 4 | 29 |
| [src/entities/TaskNotification.ts](/src/entities/TaskNotification.ts) | TypeScript | 68 | 5 | 13 | 86 |
| [src/entities/User.ts](/src/entities/User.ts) | TypeScript | 102 | 3 | 20 | 125 |
| [src/entities/UserTask.ts](/src/entities/UserTask.ts) | TypeScript | 28 | 0 | 4 | 32 |
| [src/entities/index.ts](/src/entities/index.ts) | TypeScript | 33 | 0 | 2 | 35 |
| [src/index.ts](/src/index.ts) | TypeScript | 95 | 8 | 16 | 119 |
| [src/middleware/checkAdminPermission.ts](/src/middleware/checkAdminPermission.ts) | TypeScript | 25 | 0 | 4 | 29 |
| [src/middleware/checkAuthStatus.ts](/src/middleware/checkAuthStatus.ts) | TypeScript | 13 | 0 | 3 | 16 |
| [src/middleware/checkIfGuest.ts](/src/middleware/checkIfGuest.ts) | TypeScript | 20 | 0 | 4 | 24 |
| [src/middleware/checkProjectPermission.ts](/src/middleware/checkProjectPermission.ts) | TypeScript | 26 | 2 | 4 | 32 |
| [src/repository/BoardCustomRepository.ts](/src/repository/BoardCustomRepository.ts) | TypeScript | 145 | 46 | 32 | 223 |
| [src/repository/TaskCustomRepository.ts](/src/repository/TaskCustomRepository.ts) | TypeScript | 507 | 43 | 69 | 619 |
| [src/repository/UserTaskRepository.ts](/src/repository/UserTaskRepository.ts) | TypeScript | 76 | 0 | 12 | 88 |
| [src/resolvers/board.ts](/src/resolvers/board.ts) | TypeScript | 206 | 10 | 39 | 255 |
| [src/resolvers/comment.ts](/src/resolvers/comment.ts) | TypeScript | 130 | 7 | 24 | 161 |
| [src/resolvers/file.ts](/src/resolvers/file.ts) | TypeScript | 0 | 14 | 3 | 17 |
| [src/resolvers/index.ts](/src/resolvers/index.ts) | TypeScript | 21 | 0 | 2 | 23 |
| [src/resolvers/label.ts](/src/resolvers/label.ts) | TypeScript | 79 | 6 | 12 | 97 |
| [src/resolvers/project.ts](/src/resolvers/project.ts) | TypeScript | 399 | 41 | 67 | 507 |
| [src/resolvers/sprint.ts](/src/resolvers/sprint.ts) | TypeScript | 263 | 21 | 43 | 327 |
| [src/resolvers/task.ts](/src/resolvers/task.ts) | TypeScript | 158 | 5 | 18 | 181 |
| [src/resolvers/taskLabel.ts](/src/resolvers/taskLabel.ts) | TypeScript | 71 | 5 | 12 | 88 |
| [src/resolvers/types/BoardOptionInput.ts](/src/resolvers/types/BoardOptionInput.ts) | TypeScript | 11 | 1 | 4 | 16 |
| [src/resolvers/types/BoardResponse.ts](/src/resolvers/types/BoardResponse.ts) | TypeScript | 11 | 0 | 4 | 15 |
| [src/resolvers/types/BoardUpdateInput.ts](/src/resolvers/types/BoardUpdateInput.ts) | TypeScript | 11 | 1 | 4 | 16 |
| [src/resolvers/types/CommentCreateInput.ts](/src/resolvers/types/CommentCreateInput.ts) | TypeScript | 9 | 0 | 4 | 13 |
| [src/resolvers/types/CommentDeleteResponse.ts](/src/resolvers/types/CommentDeleteResponse.ts) | TypeScript | 10 | 0 | 4 | 14 |
| [src/resolvers/types/CommentResponse.ts](/src/resolvers/types/CommentResponse.ts) | TypeScript | 11 | 0 | 4 | 15 |
| [src/resolvers/types/DeleteResponse.ts](/src/resolvers/types/DeleteResponse.ts) | TypeScript | 10 | 0 | 4 | 14 |
| [src/resolvers/types/Error.ts](/src/resolvers/types/Error.ts) | TypeScript | 11 | 0 | 5 | 16 |
| [src/resolvers/types/LabelDeleteRespons.ts](/src/resolvers/types/LabelDeleteRespons.ts) | TypeScript | 10 | 0 | 4 | 14 |
| [src/resolvers/types/LabelResponse.ts](/src/resolvers/types/LabelResponse.ts) | TypeScript | 11 | 0 | 4 | 15 |
| [src/resolvers/types/LabelUpdateInput.ts](/src/resolvers/types/LabelUpdateInput.ts) | TypeScript | 9 | 0 | 4 | 13 |
| [src/resolvers/types/MyContext.ts](/src/resolvers/types/MyContext.ts) | TypeScript | 10 | 0 | 2 | 12 |
| [src/resolvers/types/ProjectListResponse.ts](/src/resolvers/types/ProjectListResponse.ts) | TypeScript | 11 | 0 | 4 | 15 |
| [src/resolvers/types/ProjectResponse.ts](/src/resolvers/types/ProjectResponse.ts) | TypeScript | 63 | 0 | 21 | 84 |
| [src/resolvers/types/SprintOptionInput.ts](/src/resolvers/types/SprintOptionInput.ts) | TypeScript | 21 | 1 | 9 | 31 |
| [src/resolvers/types/SprintResponse.ts](/src/resolvers/types/SprintResponse.ts) | TypeScript | 15 | 3 | 7 | 25 |
| [src/resolvers/types/TaskCreateInput.ts](/src/resolvers/types/TaskCreateInput.ts) | TypeScript | 13 | 0 | 6 | 19 |
| [src/resolvers/types/TaskDeleteRespons.ts](/src/resolvers/types/TaskDeleteRespons.ts) | TypeScript | 10 | 0 | 4 | 14 |
| [src/resolvers/types/TaskLabelResponse.ts](/src/resolvers/types/TaskLabelResponse.ts) | TypeScript | 11 | 0 | 4 | 15 |
| [src/resolvers/types/TaskResponse.ts](/src/resolvers/types/TaskResponse.ts) | TypeScript | 11 | 0 | 4 | 15 |
| [src/resolvers/types/TaskUpdateInput.ts](/src/resolvers/types/TaskUpdateInput.ts) | TypeScript | 34 | 0 | 13 | 47 |
| [src/resolvers/types/TaskUpdateResponse.ts](/src/resolvers/types/TaskUpdateResponse.ts) | TypeScript | 10 | 0 | 4 | 14 |
| [src/resolvers/types/UserResponse.ts](/src/resolvers/types/UserResponse.ts) | TypeScript | 19 | 0 | 7 | 26 |
| [src/resolvers/types/UserTaskResponse.ts](/src/resolvers/types/UserTaskResponse.ts) | TypeScript | 11 | 0 | 4 | 15 |
| [src/resolvers/types/UserUpdateOptions.ts](/src/resolvers/types/UserUpdateOptions.ts) | TypeScript | 10 | 0 | 4 | 14 |
| [src/resolvers/types/UsernamePasswordInput.ts](/src/resolvers/types/UsernamePasswordInput.ts) | TypeScript | 11 | 1 | 4 | 16 |
| [src/resolvers/user.ts](/src/resolvers/user.ts) | TypeScript | 229 | 4 | 32 | 265 |
| [src/resolvers/userTask.ts](/src/resolvers/userTask.ts) | TypeScript | 44 | 5 | 10 | 59 |
| [src/seeder/index.factory.ts](/src/seeder/index.factory.ts) | TypeScript | 143 | 1 | 20 | 164 |
| [src/seeder/index.seed.ts](/src/seeder/index.seed.ts) | TypeScript | 157 | 26 | 16 | 199 |
| [src/services/authService.ts](/src/services/authService.ts) | TypeScript | 113 | 5 | 20 | 138 |
| [src/services/fileService.ts](/src/services/fileService.ts) | TypeScript | 0 | 40 | 10 | 50 |
| [src/services/invitationService.ts](/src/services/invitationService.ts) | TypeScript | 0 | 0 | 1 | 1 |
| [src/services/mailerService.ts](/src/services/mailerService.ts) | TypeScript | 25 | 0 | 4 | 29 |
| [src/services/notificationService.ts](/src/services/notificationService.ts) | TypeScript | 0 | 0 | 1 | 1 |
| [src/types.ts](/src/types.ts) | TypeScript | 36 | 1 | 6 | 43 |
| [src/utils/AWSS3Uploader.ts](/src/utils/AWSS3Uploader.ts) | TypeScript | 0 | 6 | 2 | 8 |
| [src/utils/ErrorFactory.ts](/src/utils/ErrorFactory.ts) | TypeScript | 78 | 1 | 9 | 88 |
| [src/utils/authUtils.ts](/src/utils/authUtils.ts) | TypeScript | 25 | 0 | 3 | 28 |
| [src/utils/sprintRowDnd.ts](/src/utils/sprintRowDnd.ts) | TypeScript | 47 | 1 | 10 | 58 |
| [tsconfig.json](/tsconfig.json) | JSON | 27 | 0 | 1 | 28 |

[summary](results.md)