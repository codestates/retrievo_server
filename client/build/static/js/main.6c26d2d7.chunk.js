(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [0],
  {
    535: function (e, t) {},
    634: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "client", function () {
          return wr;
        });
      var C,
        r = n(2),
        a = n(1),
        i = n.n(a),
        o = n(43),
        c = n.n(o),
        s = n(9),
        l = n(29),
        d = n(695),
        u = n(51),
        j = n(660),
        b = Object(j.a)({
          fonts: {
            body: "Open Sans, sans-serif",
            heading: "Open Sans, sans-serif",
            title: "Righteous, cursive",
          },
          fontWeights: { light: 300, normal: 400, medium: 600, bold: 700 },
          colors: {
            primary: {
              100: "#003434",
              200: "#31D5BF",
              300: "#41E1CC",
              400: "#CDF1EC",
            },
            achromatic: {
              100: "#FFFFFF",
              200: "#F5F5F5",
              300: "#E9E9E9",
              400: "#D0D0D0",
              500: "#C4C4C4",
              600: "#828282",
              700: "#4F4F4F",
              800: "#343434",
            },
            labelYellow: "#FFE81D",
            labelOrange: "#FD5C02",
            labelGreen: "#76B515",
            labelViolet: "#933183",
            labelPurple: "#9F7AEA",
            labelPink: "#B83280",
            labelTeal: "#38B2AC",
            labelCyan: "#0987A0",
            violet: "#3949AB",
            violetBg: "#E6E9FA",
            violetLight: "#C4C9E7",
            blueLight: "#E7F5FF",
            warning: "#EE8030",
            danger: "#EE8030",
            fail: "#FF6262",
            failDark: "#DE5B5B",
          },
          styles: {
            global: function () {
              return {
                "html, body": {
                  fontFamily: "body",
                  color: "#343434",
                  fontSize: "md",
                },
                a: { color: "teal.500", _hover: { textDecoration: "none" } },
              };
            },
          },
        }),
        p = n(5),
        L = n(661),
        m = n(112),
        h = n(148),
        x = n(80),
        O = n(204),
        g = n(0),
        f = [
          {
            name: "Dashboard",
            icon: Object(r.jsx)(m.b, {}),
            path: "/project/dashboard",
            description: "Monitor status of individual tasks",
          },
          {
            name: "Sprint",
            icon: Object(r.jsx)(x.f, {}),
            path: "/project/sprint",
            description: "Manage your projects' sprints and tasks",
          },
          {
            name: "Board",
            icon: Object(r.jsx)(h.a, {}),
            path: "/project/board",
            description: "Manage your tasks by task status on kanban board",
          },
          {
            name: "Timeline",
            icon: Object(r.jsx)(x.d, {}),
            path: "/project/timeline",
            description:
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
          },
          {
            name: "Calendar",
            icon: Object(r.jsx)(m.a, {}),
            path: "/project/calendar",
            description:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          },
          {
            name: "Setting",
            icon: Object(r.jsx)(x.h, {}),
            path: "/project/setting",
            description: "Manage team members' access permission ",
          },
        ],
        M = function (e) {
          var t = Object.assign({}, e).match.params.projectId,
            n = function (e) {
              return Object(r.jsx)(L.a, {
                mx: 3,
                children: Object(r.jsx)(g.b.Provider, {
                  value: { color: "#31D5BF", size: "25" },
                  children: e,
                }),
              });
            };
          return Object(r.jsxs)(L.a, {
            position: "fixed",
            zIndex: 999,
            top: 50,
            left: 0,
            bg: "achromatic.200",
            h: "100vh",
            w: 210,
            display: "flex",
            flexDirection: "column",
            boxShadow: "2px 0px 2px rgba(0,0,0,0.1)",
            children: [
              Object(r.jsxs)(L.a, {
                h: 55,
                color: "achromatic.600",
                _hover: { cursor: "pointer" },
                display: "flex",
                alignItems: "center",
                borderLeft: "5px solid transparent",
                borderBottom: "1px solid lightGray",
                children: [n(Object(r.jsx)(O.a, {})), "Hide side bar"],
              }),
              f.map(function (e) {
                return Object(r.jsx)(
                  l.b,
                  {
                    to: "".concat(e.path, "/").concat(t),
                    children: Object(r.jsxs)(L.a, {
                      bg: window.location.pathname.includes(e.path)
                        ? "primary.400"
                        : "transparent",
                      h: 55,
                      fontWeight: "medium",
                      color: window.location.pathname.includes(e.path)
                        ? "achromatic.800"
                        : "achromatic.600",
                      _hover: {
                        backgroundColor: "achromatic.300",
                        cursor: "pointer",
                      },
                      display: "flex",
                      alignItems: "center",
                      borderLeft: "5px solid ".concat(
                        window.location.pathname.includes(e.path)
                          ? "#3949AB"
                          : "#F5F5F5"
                      ),
                      children: [n(e.icon), e.name],
                    }),
                  },
                  e.name
                );
              }),
            ],
          });
        },
        v = n(370),
        Z = n(28),
        A = n(662);
      !(function (e) {
        (e.homepage = "for Retrievo hompage title"),
          (e.auth = "for register, login, new project title"),
          (e.page = "for project pages title"),
          (e.table = "for table header"),
          (e.sprint = "for sprint title in Board page"),
          (e.board = "for board title"),
          (e.taskCard = "for task card title in Board page"),
          (e.task = "for task title"),
          (e.modal = "for modal title"),
          (e.article = "for article title");
      })(C || (C = {}));
      var w,
        k,
        y,
        I = function (e) {
          var t = e.headingType,
            n = e.headingFontWeight,
            a = e.children,
            i = Object(Z.a)(e, [
              "headingType",
              "headingFontWeight",
              "children",
            ]),
            o = (function () {
              var e = "heading",
                r = "6xl",
                a = "normal",
                i = "achromatic.700";
              return (
                t === C.homepage && ((e = "title"), (r = "3xl")),
                t === C.auth &&
                  ((r = "5xl"), (i = "achromatic.800"), (a = n || "normal")),
                t === C.page && ((r = "3xl"), (a = "bold")),
                t === C.table && ((r = "xl"), (a = "bold")),
                t === C.sprint && ((r = "3xl"), (a = "medium")),
                t === C.board && ((r = "md"), (a = "medium")),
                t === C.taskCard && ((r = "md"), (a = "medium")),
                t === C.task && ((r = "3xl"), (a = "medium")),
                t === C.modal && ((r = "xl"), (i = "achromatic.800")),
                t === C.article && ((r = "4xl"), (a = "bold")),
                { fontFamily: e, fontSize: r, fontWeight: a, color: i }
              );
            })();
          return Object(r.jsx)(
            A.a,
            Object(p.a)(Object(p.a)(Object(p.a)({}, o), i), {}, { children: a })
          );
        },
        S = n(692),
        B = n(129),
        D = function (e) {
          var t,
            n = e.projectPermissions,
            C = e.currentProject;
          return Object(r.jsxs)(S.a, {
            children: [
              Object(r.jsx)(S.b, {
                px: 4,
                py: 1,
                w: 230,
                bgColor: "achromatic.100",
                transition: "all 0.2s",
                borderRadius: "md",
                borderWidth: "1px",
                _hover: { bg: "primary.400" },
                _focus: { outline: 0, boxShadow: "outline" },
                children: Object(r.jsxs)(L.a, {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  children: [
                    C && C.project && C.project.id
                      ? null === (t = C.project.name) || void 0 === t
                        ? void 0
                        : t.slice(0, 20)
                      : "Select Project",
                    Object(r.jsx)(B.a, {}),
                  ],
                }),
              }),
              Object(r.jsxs)(S.e, {
                children: [
                  null === n || void 0 === n
                    ? void 0
                    : n.map(function (e, t) {
                        var n,
                          a = e.project;
                        return a
                          ? Object(r.jsx)(
                              l.b,
                              {
                                to: "/project/dashboard/".concat(a.id),
                                children: Object(r.jsx)(S.d, {
                                  value: a.name,
                                  backgroundColor:
                                    (null === C ||
                                    void 0 === C ||
                                    null === (n = C.project) ||
                                    void 0 === n
                                      ? void 0
                                      : n.id) === a.id
                                      ? "violetBg"
                                      : "achromatic.100",
                                  _hover: { bg: "achromatic.200" },
                                  children: a.name,
                                }),
                              },
                              a.id
                            )
                          : null;
                      }),
                  Object(r.jsx)(S.c, {}),
                  Object(r.jsx)(l.b, {
                    to: "/new-project",
                    children: Object(r.jsxs)(S.d, {
                      _hover: { bg: "achromatic.200" },
                      children: [
                        Object(r.jsx)(L.a, {
                          mx: 1,
                          children: Object(r.jsx)(O.b, {}),
                        }),
                        "New Project",
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        T = n(666),
        E = n(181),
        R = n(121);
      !(function (e) {
        (e.xs = "xs"),
          (e.sm = "sm"),
          (e.md = "md"),
          (e.lg = "lg"),
          (e.xl = "xl");
      })(w || (w = {})),
        (function (e) {
          (e.notification = "notification"),
            (e.user = "user"),
            (e.delete = "delete"),
            (e.plus = "plus"),
            (e.calendar = "calendar"),
            (e.deleteBin = "deleteBin"),
            (e.save = "save"),
            (e.close = "close"),
            (e.pencil = "pencil"),
            (e.clip = "clip");
        })(k || (k = {})),
        (function (e) {
          (e.yellow = "yellow"), (e.red = "red");
        })(y || (y = {}));
      var z,
        F = function (e) {
          var t = e.iconButtonType,
            n = Object(Z.a)(e, ["iconButtonType"]);
          return Object(r.jsx)(r.Fragment, {
            children: Object(r.jsx)(
              T.a,
              Object(p.a)(
                {
                  icon:
                    t === k.notification
                      ? Object(r.jsx)(x.b, {})
                      : t === k.user
                      ? Object(r.jsx)(x.i, {})
                      : t === k.delete
                      ? Object(r.jsx)(x.e, {})
                      : t === k.plus
                      ? Object(r.jsx)(x.g, {})
                      : t === k.calendar
                      ? Object(r.jsx)(B.d, {})
                      : t === k.deleteBin
                      ? Object(r.jsx)(E.b, {})
                      : t === k.save
                      ? Object(r.jsx)(E.d, {})
                      : t === k.close
                      ? Object(r.jsx)(E.a, {})
                      : t === k.pencil
                      ? Object(r.jsx)(E.c, {})
                      : t === k.clip
                      ? Object(r.jsx)(R.a, {})
                      : Object(r.jsx)(x.b, {}),
                  bgColor: "transparent",
                  _hover: { background: "transparent" },
                },
                n
              )
            ),
          });
        },
        V = n(669),
        G = n(694),
        Y = n(367);
      !(function (e) {
        (e.xxs = "2xs"),
          (e.xs = "xs"),
          (e.sm = "sm"),
          (e.md = "md"),
          (e.lg = "lg"),
          (e.xl = "xl"),
          (e.xxl = "2xl");
      })(z || (z = {}));
      var W,
        J = function (e) {
          var t = e.name,
            n = Object(Z.a)(e, ["name"]);
          return Object(r.jsx)(
            G.a,
            {
              label: t,
              hasArrow: !0,
              children: Object(r.jsx)(
                Y.a,
                Object(p.a)({ name: t, color: "achromatic.100" }, n),
                t
              ),
            },
            t
          );
        };
      !(function (e) {
        (e.xxs = "2xs"),
          (e.xs = "xs"),
          (e.sm = "sm"),
          (e.md = "md"),
          (e.lg = "lg"),
          (e.xl = "xl"),
          (e.xxl = "2xl");
      })(W || (W = {}));
      var N,
        q,
        Q = function (e) {
          var t = e.avatars,
            n = e.size,
            C = e.max;
          return Object(r.jsx)(V.a, {
            size: n,
            max: C,
            children:
              null === t || void 0 === t
                ? void 0
                : t.map(function (e) {
                    return Object(r.jsx)(J, Object(p.a)({}, e), e.id);
                  }),
          });
        },
        U = n(17);
      function H() {
        var e = Object(U.a)([
          "\n  query GetTask($projectId: String!, $id: String!) {\n    getTask(projectId: $projectId, id: $id) {\n      task {\n        id\n        title\n        description\n        startDate\n        endDate\n        taskIndex\n        completed\n        board {\n          id\n          title\n        }\n        sprint {\n          id\n          title\n          didStart\n        }\n        file {\n          id\n          fileLink\n        }\n        comment {\n          id\n          content\n          createdAt\n          user {\n            id\n            username\n            email\n          }\n        }\n        taskLabel {\n          id\n          label {\n            name\n            id\n            color\n          }\n        }\n        userTask {\n          id\n          user {\n            email\n            id\n            username\n          }\n        }\n      }\n      error {\n        message\n        code\n        field\n      }\n    }\n  }\n",
        ]);
        return (
          (H = function () {
            return e;
          }),
          e
        );
      }
      function P() {
        var e = Object(U.a)([
          "\n  query SetStartedSprint($projectId: String!) {\n    getStartedSprint(projectId: $projectId) {\n      sprint {\n        id\n        title\n      }\n      error {\n        code\n        message\n        field\n      }\n    }\n  }\n",
        ]);
        return (
          (P = function () {
            return e;
          }),
          e
        );
      }
      function K() {
        var e = Object(U.a)([
          "\n  query GetSprints($projectId: String!) {\n    getSprints(projectId: $projectId) {\n      sprints {\n        id\n        title\n        description\n        row\n        dueDate\n        startedAt\n        didStart\n        isCompleted\n        task {\n          id\n          title\n          description\n          taskIndex\n          sprintRowIndex\n          completed\n          startDate\n          endDate\n          createdAt\n          updatedAt\n          userTask {\n            user {\n              username\n              email\n              avatar\n              role\n            }\n          }\n          board {\n            id\n            title\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    }\n  }\n",
        ]);
        return (
          (K = function () {
            return e;
          }),
          e
        );
      }
      function X() {
        var e = Object(U.a)([
          "\n  query GetSprint($id: String!) {\n    getSprint(id: $id) {\n      sprint {\n        title\n        description\n        task {\n          id\n          taskIndex\n          sprintRowIndex\n          title\n          description\n          completed\n          startDate\n          endDate\n          createdAt\n          updatedAt\n          board {\n            id\n            title\n          }\n          userTask {\n            user {\n              avatar\n              username\n              email\n              role\n            }\n          }\n        }\n      }\n    }\n  }\n",
        ]);
        return (
          (X = function () {
            return e;
          }),
          e
        );
      }
      function $() {
        var e = Object(U.a)([
          "\n  query GetReportSummary($projectId: String!) {\n    reportSummary(projectId: $projectId) {\n      taskCountSummary {\n        overdueTasksCount\n        completedTasksCount\n        incompleteTasksCount\n        totalTasksCount\n      }\n      tasksByAssignee {\n        userId\n        username\n        avatar\n        totalTasksCount\n        incompleteTasksCount\n        completedTasksCount\n        overdueTasksCount\n      }\n      incompleteTaskStatus\n      error {\n        code\n        message\n        field\n      }\n    }\n  }\n",
        ]);
        return (
          ($ = function () {
            return e;
          }),
          e
        );
      }
      function _() {
        var e = Object(U.a)([
          "\n  query GetProject($projectId: String!) {\n    project(projectId: $projectId) {\n      project {\n        id\n        name\n        createdAt\n        updatedAt\n        projectPermissions {\n          id\n          isAdmin\n          user {\n            id\n            username\n            email\n            role\n            avatar\n          }\n        }\n        sprint {\n          title\n          id\n        }\n        board {\n          id\n          title\n        }\n        label {\n          id\n          name\n          color\n        }\n      }\n      error {\n        code\n        message\n        field\n      }\n    }\n  }\n",
        ]);
        return (
          (_ = function () {
            return e;
          }),
          e
        );
      }
      function ee() {
        var e = Object(U.a)([
          "\n  query GetMe {\n    getMe {\n      user {\n        id\n        username\n        email\n        avatar\n        projectPermissions {\n          project {\n            id\n            name\n          }\n        }\n        userTask {\n          task {\n            id\n            title\n            board {\n              title\n            }\n            project {\n              id\n            }\n          }\n        }\n      }\n      error {\n        code\n        message\n        field\n      }\n    }\n  }\n",
        ]);
        return (
          (ee = function () {
            return e;
          }),
          e
        );
      }
      function te() {
        var e = Object(U.a)([
          "\n  query GetLabels($projectId: String!) {\n    getLabels(projectId: $projectId) {\n      label {\n        id\n        color\n        name\n      }\n      error {\n        code\n        message\n        field\n      }\n    }\n  }\n",
        ]);
        return (
          (te = function () {
            return e;
          }),
          e
        );
      }
      function ne() {
        var e = Object(U.a)([
          "\n  query GetBoards($projectId: String!) {\n    getBoards(projectId: $projectId) {\n      error {\n        code\n        message\n        field\n      }\n      boards {\n        id\n        title\n        boardColumnIndex\n        task {\n          id\n          title\n          boardRowIndex\n          sprintRowIndex\n          taskIndex\n          startDate\n          endDate\n          userTask {\n            user {\n              id\n              username\n              avatar\n            }\n          }\n          taskLabel {\n            label {\n              id\n              name\n              color\n            }\n          }\n        }\n      }\n    }\n  }\n",
        ]);
        return (
          (ne = function () {
            return e;
          }),
          e
        );
      }
      function Ce() {
        var e = Object(U.a)([
          "\n  mutation UpdateUserSetting(\n    $username: String\n    $password: String\n    $email: String\n  ) {\n    updateUserSetting(\n      options: { username: $username, password: $password, email: $email }\n    ) {\n      error {\n        message\n        code\n        field\n      }\n    }\n  }\n",
        ]);
        return (
          (Ce = function () {
            return e;
          }),
          e
        );
      }
      function re() {
        var e = Object(U.a)([
          "\n  mutation UpdateTask($options: TaskUpdateInput!, $projectId: String!) {\n    updateTask(options: $options, projectId: $projectId) {\n      task {\n        id\n        title\n        description\n        startDate\n        endDate\n        taskIndex\n        completed\n        board {\n          id\n          title\n        }\n        sprint {\n          id\n          title\n        }\n        file {\n          fileLink\n        }\n        comment {\n          content\n          user {\n            id\n            username\n          }\n        }\n        taskLabel {\n          label {\n            name\n            id\n            color\n          }\n        }\n        userTask {\n          user {\n            id\n            username\n          }\n        }\n      }\n      error {\n        message\n        code\n        field\n      }\n    }\n  }\n",
        ]);
        return (
          (re = function () {
            return e;
          }),
          e
        );
      }
      function ae() {
        var e = Object(U.a)([
          "\n  mutation UpdateSprint($projectId: String!, $options: SprintOptionInput!) {\n    updateSprint(projectId: $projectId, options: $options) {\n      success\n      sprint {\n        id\n        title\n        description\n        didStart\n        isCompleted\n        row\n        dueDate\n        startedAt\n      }\n      error {\n        code\n        field\n        message\n      }\n    }\n  }\n",
        ]);
        return (
          (ae = function () {
            return e;
          }),
          e
        );
      }
      function ie() {
        var e = Object(U.a)([
          "\n  mutation UpdateProjectPermission(\n    $userId: String!\n    $isAdmin: Boolean!\n    $projectId: String!\n  ) {\n    updateProjectPermission(\n      userId: $userId\n      isAdmin: $isAdmin\n      projectId: $projectId\n    ) {\n      success\n      projectPermission {\n        id\n        project {\n          id\n          name\n        }\n      }\n      error {\n        code\n        message\n        field\n      }\n    }\n  }\n",
        ]);
        return (
          (ie = function () {
            return e;
          }),
          e
        );
      }
      function oe() {
        var e = Object(U.a)([
          "\n  mutation UpdateProjectName($name: String!, $projectId: String!) {\n    updateProjectName(name: $name, projectId: $projectId) {\n      project {\n        id\n        name\n      }\n      success\n      error {\n        code\n        message\n        field\n      }\n    }\n  }\n",
        ]);
        return (
          (oe = function () {
            return e;
          }),
          e
        );
      }
      function ce() {
        var e = Object(U.a)([
          "\n  mutation UpdateLabel(\n    $projectId: String!\n    $options: LabelUpdateInput!\n    $id: String!\n  ) {\n    updateLabel(projectId: $projectId, options: $options, id: $id) {\n      error {\n        code\n        field\n        message\n      }\n      label {\n        id\n        name\n        color\n      }\n    }\n  }\n",
        ]);
        return (
          (ce = function () {
            return e;
          }),
          e
        );
      }
      function se() {
        var e = Object(U.a)([
          "\n  mutation UpdateComment($id: String!, $content: String!, $projectId: String!) {\n    updateComment(id: $id, content: $content, projectId: $projectId) {\n      error {\n        field\n        message\n        code\n      }\n      comment {\n        id\n        rootCommentId\n        task {\n          id\n          title\n        }\n        user {\n          id\n          username\n        }\n        content\n        createdAt\n      }\n    }\n  }\n",
        ]);
        return (
          (se = function () {
            return e;
          }),
          e
        );
      }
      function le() {
        var e = Object(U.a)([
          "\n  mutation UpdateBoard($options: BoardUpdateInput!, $projectId: String!) {\n    updateBoard(options: $options, projectId: $projectId) {\n      boards {\n        id\n        title\n        boardColumnIndex\n        task {\n          id\n          title\n          boardRowIndex\n          sprintRowIndex\n          taskIndex\n          startDate\n          endDate\n          userTask {\n            user {\n              id\n              username\n              avatar\n            }\n          }\n          taskLabel {\n            label {\n              id\n              name\n              color\n            }\n          }\n        }\n      }\n      error {\n        message\n        code\n        field\n      }\n    }\n  }\n",
        ]);
        return (
          (le = function () {
            return e;
          }),
          e
        );
      }
      function de() {
        var e = Object(U.a)([
          "\n  mutation Register($options: UsernamePasswordInput!) {\n    register(options: $options) {\n      error {\n        message\n        field\n        code\n      }\n      user {\n        username\n        email\n        id\n      }\n    }\n  }\n",
        ]);
        return (
          (de = function () {
            return e;
          }),
          e
        );
      }
      function ue() {
        var e = Object(U.a)(["\n  mutation Logout {\n    logout\n  }\n"]);
        return (
          (ue = function () {
            return e;
          }),
          e
        );
      }
      function je() {
        var e = Object(U.a)([
          "\n  mutation Login($options: LoginInput!) {\n    login(options: $options) {\n      user {\n        email\n        role\n      }\n      error {\n        code\n        field\n        message\n      }\n    }\n  }\n",
        ]);
        return (
          (je = function () {
            return e;
          }),
          e
        );
      }
      function be() {
        var e = Object(U.a)([
          "\n  mutation InviteUser($projectId: String!, $emails: [String!]!) {\n    inviteUser(projectId: $projectId, emails: $emails) {\n      error {\n        code\n        message\n        field\n      }\n      success\n    }\n  }\n",
        ]);
        return (
          (be = function () {
            return e;
          }),
          e
        );
      }
      function pe() {
        var e = Object(U.a)([
          "\n  mutation DeleteUserTask(\n    $userId: String!\n    $taskId: String!\n    $projectId: String!\n  ) {\n    deleteUserTask(userId: $userId, taskId: $taskId, projectId: $projectId) {\n      success\n      error {\n        message\n        code\n        field\n      }\n    }\n  }\n",
        ]);
        return (
          (pe = function () {
            return e;
          }),
          e
        );
      }
      function Le() {
        var e = Object(U.a)([
          "\n  mutation DeleteTaskLabel(\n    $taskId: String!\n    $labelId: String!\n    $projectId: String!\n  ) {\n    deleteTaskLabel(taskId: $taskId, labelId: $labelId, projectId: $projectId) {\n      success\n      error {\n        code\n        field\n        message\n      }\n    }\n  }\n",
        ]);
        return (
          (Le = function () {
            return e;
          }),
          e
        );
      }
      function me() {
        var e = Object(U.a)([
          "\n  mutation DeleteTask($id: String!, $projectId: String!) {\n    deleteTask(id: $id, projectId: $projectId) {\n      success\n      error {\n        message\n        code\n        field\n      }\n    }\n  }\n",
        ]);
        return (
          (me = function () {
            return e;
          }),
          e
        );
      }
      function he() {
        var e = Object(U.a)([
          "\n  mutation DeleteSprint($id: String!, $projectId: String!) {\n    deleteSprint(id: $id, projectId: $projectId) {\n      success\n      error {\n        code\n        field\n        message\n      }\n    }\n  }\n",
        ]);
        return (
          (he = function () {
            return e;
          }),
          e
        );
      }
      function xe() {
        var e = Object(U.a)([
          "\n  mutation DeleteProject($projectId: String!) {\n    deleteProject(projectId: $projectId) {\n      success\n      error {\n        message\n        code\n        field\n      }\n    }\n  }\n",
        ]);
        return (
          (xe = function () {
            return e;
          }),
          e
        );
      }
      function Oe() {
        var e = Object(U.a)([
          "\n  mutation DeleteLabel($projectId: String!, $id: String!) {\n    deleteLabel(projectId: $projectId, id: $id) {\n      error {\n        code\n        field\n        message\n      }\n      success\n    }\n  }\n",
        ]);
        return (
          (Oe = function () {
            return e;
          }),
          e
        );
      }
      function ge() {
        var e = Object(U.a)([
          "\n  mutation DeleteComment($projectId: String!, $id: String!) {\n    deleteComment(projectId: $projectId, id: $id) {\n      error {\n        code\n        field\n        message\n      }\n      success\n    }\n  }\n",
        ]);
        return (
          (ge = function () {
            return e;
          }),
          e
        );
      }
      function fe() {
        var e = Object(U.a)([
          "\n  mutation DeleteBoard(\n    $id: String!\n    $newBoardId: String!\n    $projectId: String!\n  ) {\n    deleteBoard(id: $id, newBoardId: $newBoardId, projectId: $projectId) {\n      boards {\n        id\n        title\n        boardColumnIndex\n        task {\n          id\n          title\n          boardRowIndex\n          sprintRowIndex\n          taskIndex\n          startDate\n          endDate\n          userTask {\n            user {\n              id\n              username\n              avatar\n            }\n          }\n          taskLabel {\n            label {\n              id\n              name\n              color\n            }\n          }\n        }\n      }\n      error {\n        message\n        code\n        field\n      }\n    }\n  }\n",
        ]);
        return (
          (fe = function () {
            return e;
          }),
          e
        );
      }
      function Me() {
        var e = Object(U.a)([
          "\n  mutation CreateUserTask(\n    $userId: String!\n    $taskId: String!\n    $projectId: String!\n  ) {\n    createUserTask(userId: $userId, taskId: $taskId, projectId: $projectId) {\n      userTask {\n        id\n        user {\n          username\n          avatar\n          id\n        }\n        task {\n          id\n          title\n        }\n      }\n      error {\n        code\n        field\n        message\n      }\n    }\n  }\n",
        ]);
        return (
          (Me = function () {
            return e;
          }),
          e
        );
      }
      function ve() {
        var e = Object(U.a)([
          "\n  mutation CreateTaskLabel(\n    $taskId: String!\n    $name: String!\n    $color: String!\n    $projectId: String!\n  ) {\n    createTaskLabel(\n      taskId: $taskId\n      name: $name\n      color: $color\n      projectId: $projectId\n    ) {\n      taskLabel {\n        id\n        task {\n          id\n          title\n        }\n        label {\n          id\n          name\n        }\n      }\n      error {\n        code\n        field\n        message\n      }\n    }\n  }\n",
        ]);
        return (
          (ve = function () {
            return e;
          }),
          e
        );
      }
      function Ze() {
        var e = Object(U.a)([
          "\n  mutation CreateTask($options: TaskCreateInput!, $projectId: String!) {\n    createTask(options: $options, projectId: $projectId) {\n      task {\n        id\n        title\n        description\n        startDate\n        endDate\n        taskIndex\n        completed\n        board {\n          id\n          title\n        }\n        sprint {\n          id\n          title\n        }\n        file {\n          fileLink\n        }\n        comment {\n          content\n          user {\n            id\n            username\n          }\n        }\n        taskLabel {\n          label {\n            name\n            id\n            color\n          }\n        }\n        userTask {\n          user {\n            id\n            username\n          }\n        }\n      }\n      error {\n        message\n        code\n        field\n      }\n    }\n  }\n",
        ]);
        return (
          (Ze = function () {
            return e;
          }),
          e
        );
      }
      function Ae() {
        var e = Object(U.a)([
          "\n  mutation CreateSprint(\n    $projectId: String!\n    $title: String!\n    $description: String!\n  ) {\n    createSprint(\n      projectId: $projectId\n      title: $title\n      description: $description\n    ) {\n      sprint {\n        id\n        title\n        description\n        row\n      }\n      error {\n        message\n        code\n        field\n      }\n    }\n  }\n",
        ]);
        return (
          (Ae = function () {
            return e;
          }),
          e
        );
      }
      function we() {
        var e = Object(U.a)([
          '\n  mutation CreateProject($name: String!) {\n    createProject(name: "hello") {\n      project {\n        id\n        name\n      }\n      error {\n        code\n        message\n        field\n      }\n      project {\n        id\n        name\n      }\n      error {\n        code\n        message\n        field\n      }\n    }\n  }\n',
        ]);
        return (
          (we = function () {
            return e;
          }),
          e
        );
      }
      function ke() {
        var e = Object(U.a)([
          "\n  mutation CreateGuest {\n    createGuest {\n      error {\n        field\n        message\n        code\n      }\n      user {\n        id\n        username\n        role\n      }\n    }\n  }\n",
        ]);
        return (
          (ke = function () {
            return e;
          }),
          e
        );
      }
      function ye() {
        var e = Object(U.a)([
          "\n  mutation CreateComment(\n    $taskId: String!\n    $options: CommentCreateInput!\n    $projectId: String!\n  ) {\n    createComment(taskId: $taskId, options: $options, projectId: $projectId) {\n      error {\n        field\n        message\n        code\n      }\n      comment {\n        id\n        rootCommentId\n        user {\n          username\n          avatar\n          id\n        }\n        task {\n          id\n          title\n        }\n        content\n        createdAt\n      }\n    }\n  }\n",
        ]);
        return (
          (ye = function () {
            return e;
          }),
          e
        );
      }
      function Ie() {
        var e = Object(U.a)([
          "\n  mutation CreateBoard($title: String!, $projectId: String!) {\n    createBoard(title: $title, projectId: $projectId) {\n      boards {\n        id\n        title\n        boardColumnIndex\n        task {\n          id\n          title\n          boardRowIndex\n          sprintRowIndex\n          taskIndex\n          startDate\n          endDate\n          userTask {\n            user {\n              id\n              username\n              avatar\n            }\n          }\n          taskLabel {\n            label {\n              id\n              name\n              color\n            }\n          }\n        }\n      }\n      error {\n        message\n        code\n        field\n      }\n    }\n  }\n",
        ]);
        return (
          (Ie = function () {
            return e;
          }),
          e
        );
      }
      function Se() {
        var e = Object(U.a)([
          "\n  mutation RouteInvitation {\n    routeInvitation {\n      success\n      error {\n        field\n        code\n      }\n    }\n  }\n",
        ]);
        return (
          (Se = function () {
            return e;
          }),
          e
        );
      }
      !(function (e) {
        (e.Member = "MEMBER"), (e.Guest = "GUEST"), (e.Admin = "ADMIN");
      })(N || (N = {})),
        (function (e) {
          (e.SprintStart = "SPRINT_START"), (e.SprintEnd = "SPRINT_END");
        })(q || (q = {}));
      Object(s.gql)(Se());
      var Be = Object(s.gql)(Ie());
      var De = Object(s.gql)(ye());
      var Te = Object(s.gql)(ke());
      Object(s.gql)(we());
      var Ee = Object(s.gql)(Ae());
      var Re = Object(s.gql)(Ze());
      var ze = Object(s.gql)(ve());
      var Fe = Object(s.gql)(Me());
      var Ve = Object(s.gql)(fe());
      var Ge = Object(s.gql)(ge());
      Object(s.gql)(Oe());
      var Ye = Object(s.gql)(xe());
      var We = Object(s.gql)(he());
      var Je = Object(s.gql)(me());
      var Ne = Object(s.gql)(Le());
      var qe = Object(s.gql)(pe());
      Object(s.gql)(be());
      var Qe = Object(s.gql)(je());
      var Ue = Object(s.gql)(ue());
      var He = Object(s.gql)(de());
      var Pe = Object(s.gql)(le());
      Object(s.gql)(se());
      Object(s.gql)(ce());
      var Ke = Object(s.gql)(oe());
      var Xe = Object(s.gql)(ie());
      var $e = Object(s.gql)(ae());
      function _e(e) {
        return s.useMutation($e, e);
      }
      var et = Object(s.gql)(re());
      function tt(e) {
        return s.useMutation(et, e);
      }
      var nt = Object(s.gql)(Ce());
      var Ct = Object(s.gql)(ne());
      Object(s.gql)(te());
      var rt = Object(s.gql)(ee());
      function at(e) {
        return s.useQuery(rt, e);
      }
      var it = Object(s.gql)(_());
      function ot(e) {
        return s.useQuery(it, e);
      }
      var ct = Object(s.gql)($());
      function st(e) {
        return s.useQuery(ct, e);
      }
      Object(s.gql)(X());
      var lt = Object(s.gql)(K());
      var dt = Object(s.gql)(P());
      var ut = Object(s.gql)(H());
      var jt,
        bt = function (e) {
          var t,
            n,
            a,
            i,
            o = Object.assign({}, e).match.params.projectId,
            c = at(),
            s = c.data,
            d = c.loading,
            u =
              null === s ||
              void 0 === s ||
              null === (t = s.getMe.user) ||
              void 0 === t
                ? void 0
                : t.projectPermissions,
            j =
              null === u || void 0 === u
                ? void 0
                : u.find(function (e) {
                    return e.project.id === o;
                  }),
            b = { projectPermissions: u, currentProject: j },
            m = ot({ variables: { projectId: o } }),
            h = m.data,
            x = m.loading,
            O =
              null === h ||
              void 0 === h ||
              null === (n = h.project) ||
              void 0 === n ||
              null === (a = n.project) ||
              void 0 === a
                ? void 0
                : a.projectPermissions,
            f = function () {
              return O
                ? O.map(function (e) {
                    var t = e.user;
                    return { name: t.username, src: t.avatar || void 0 };
                  })
                : null;
            };
          return Object(r.jsxs)(L.a, {
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 999,
            bg: "achromatic.200",
            w: "100%",
            p: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 10,
            h: 50,
            boxShadow: "0 2px 2px rgba(0,0,0,0.1)",
            "z-index": "1",
            children: [
              Object(r.jsxs)(L.a, {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: 450,
                children: [
                  Object(r.jsxs)(L.a, {
                    display: "flex",
                    alignItems: "center",
                    children: [
                      Object(r.jsx)(r.Fragment, {
                        children: Object(r.jsx)(g.b.Provider, {
                          value: { color: "#4F4F4F", size: "25" },
                          children: Object(r.jsx)(v.a, {}),
                        }),
                      }),
                      Object(r.jsx)(l.b, {
                        to: "/",
                        children: Object(r.jsx)(I, {
                          ml: 1,
                          headingType: C.homepage,
                          children: "Retrievo",
                        }),
                      }),
                    ],
                  }),
                  d ||
                  !(null === s ||
                  void 0 === s ||
                  null === (i = s.getMe.user) ||
                  void 0 === i
                    ? void 0
                    : i.projectPermissions)
                    ? null
                    : Object(r.jsx)(D, Object(p.a)({}, b)),
                ],
              }),
              Object(r.jsxs)(L.a, {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                w: 180,
                children: [
                  !x && f()
                    ? Object(r.jsx)(Q, { avatars: f(), size: W.sm, max: 3 })
                    : null,
                  Object(r.jsx)(l.b, {
                    to: "/notification",
                    children: Object(r.jsx)(F, {
                      fontSize: "xl",
                      color: "achromatic.700",
                      "aria-label": "notification",
                      iconButtonType: k.notification,
                    }),
                  }),
                  Object(r.jsx)(l.b, {
                    to: "/my-profile",
                    children: Object(r.jsx)(F, {
                      fontSize: "xl",
                      color: "achromatic.700",
                      "aria-label": "project member list",
                      iconButtonType: k.user,
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        pt = n(4),
        Lt = n(130),
        mt = n.n(Lt),
        ht = n(670),
        xt = function (e) {
          var t = e.color,
            n = e.children,
            C = Object(Z.a)(e, ["color", "children"]),
            a = { color: t || "achromatic.700" };
          return Object(r.jsx)(
            ht.a,
            Object(p.a)(Object(p.a)(Object(p.a)({}, a), C), {}, { children: n })
          );
        },
        Ot = function () {
          var e,
            t = Object(a.useState)(),
            n = Object(pt.a)(t, 2),
            i = n[0],
            o = n[1];
          return (
            Object(a.useEffect)(function () {
              var e = window.location.pathname,
                t =
                  mt.a.find(f, function (t) {
                    return e.includes(t.path);
                  }) || f[0];
              o(t);
            }, []),
            Object(r.jsxs)(L.a, {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              children: [
                ((e =
                  (null === i || void 0 === i ? void 0 : i.icon) || f[0].icon),
                Object(r.jsx)(L.a, {
                  mx: 3,
                  children: Object(r.jsx)(g.b.Provider, {
                    value: { color: "#31D5BF", size: "50" },
                    children: e,
                  }),
                })),
                Object(r.jsxs)(L.a, {
                  children: [
                    Object(r.jsx)(I, {
                      headingType: C.page,
                      children:
                        (null === i || void 0 === i ? void 0 : i.name) ||
                        f[0].name,
                    }),
                    Object(r.jsx)(xt, {
                      color: "achromatic.600",
                      children:
                        (null === i || void 0 === i ? void 0 : i.description) ||
                        f[0].description,
                    }),
                  ],
                }),
              ],
            })
          );
        },
        gt = n(673),
        ft = n(674),
        Mt = n(371),
        vt = n(92),
        Zt = function (e, t) {
          var n = Object(a.useState)(e),
            C = Object(pt.a)(n, 2),
            r = C[0],
            i = C[1],
            o = Object(a.useState)(t),
            c = Object(pt.a)(o, 2),
            s = c[0],
            l = c[1];
          return [
            r,
            i,
            s,
            function (e) {
              l(function (t) {
                return t + e;
              });
            },
            function (e) {
              l(e);
            },
          ];
        },
        At = n(56);
      jt || (jt = {});
      var wt = function (e) {
        var t = e.onClick,
          n = e.children,
          C = Object(Z.a)(e, ["onClick", "children"]);
        return Object(r.jsx)(
          L.a,
          Object(p.a)(
            Object(p.a)(
              { display: "flex", alignItems: "center", onClick: t },
              C
            ),
            {},
            { children: n }
          )
        );
      };
      function kt() {
        var e = Object(U.a)([
          "\n  &:hover {\n    background: #e9e9e9;\n    cursor: pointer;\n    transition: ease 0.3s;\n\n    ._icon {\n      opacity: 1;\n      display: block;\n    }\n  }\n",
        ]);
        return (
          (kt = function () {
            return e;
          }),
          e
        );
      }
      var yt,
        It,
        St,
        Bt = Object(At.a)(wt)(kt()),
        Dt = n(667);
      !(function (e) {
        (e.xs = "xs"),
          (e.sm = "sm"),
          (e.md = "md"),
          (e.lg = "lg"),
          (e.xl = "xl");
      })(yt || (yt = {})),
        (function (e) {
          (e.xs = "2px"),
            (e.sm = "3px"),
            (e.md = "4px"),
            (e.lg = "6px"),
            (e.xl = "8px");
        })(It || (It = {})),
        (function (e) {
          (e.primary = "primary.200"),
            (e.achromatic = "achromatic.600"),
            (e.yellow = "labelYellow"),
            (e.orange = "labelOrange"),
            (e.warning = "warning");
        })(St || (St = {}));
      var Tt = function (e) {
          var t = e.thickness,
            n = e.size,
            C = e.color,
            a = Object(Z.a)(e, ["thickness", "size", "color"]);
          return Object(r.jsx)(
            Dt.a,
            Object(p.a)(
              {
                thickness: t || "4px",
                speed: "0.75s",
                emptyColor: "achromatic.200",
                color: C || "primary.200",
                size: n || "xl",
              },
              a
            )
          );
        },
        Et = n(671),
        Rt = n(672),
        zt = function (e) {
          var t = e.color,
            n = e.bgColor,
            C = e.hasDropdown,
            i = void 0 !== C && C,
            o = e.hasCloseButton,
            c = void 0 !== o && o,
            s = e.children,
            l = e.onClose,
            d = e.labels,
            u = e.defaultValues,
            j =
              (e.onOptionClick,
              Object(Z.a)(e, [
                "color",
                "bgColor",
                "hasDropdown",
                "hasCloseButton",
                "children",
                "onClose",
                "labels",
                "defaultValues",
                "onOptionClick",
              ])),
            b = Object(a.useState)(
              (null === u || void 0 === u ? void 0 : u.color) || "primary.300"
            ),
            L = Object(pt.a)(b, 2),
            m = (L[0], L[1]),
            h = {
              color: t || "achromatic.100",
              bgColor: n || "primary.300",
              _hover: i ? { cursor: "pointer" } : { cursor: "none" },
            };
          return i
            ? Object(r.jsx)(Et.a, {
                onChange: function (e) {
                  m(e.target.value), console.log(e.target);
                },
                bg: "primary.300",
                color: "white",
                fontSize: "sm",
                height: 6,
                maxW: 150,
                children:
                  null === d || void 0 === d
                    ? void 0
                    : d.map(function (e) {
                        return Object(r.jsx)(
                          "option",
                          {
                            value: e.color,
                            selected:
                              (null === u || void 0 === u ? void 0 : u.id) ===
                              e.id,
                            children: e.name,
                          },
                          e.id
                        );
                      }),
              })
            : c
            ? Object(r.jsxs)(
                Rt.a,
                Object(p.a)(
                  Object(p.a)(Object(p.a)({}, h), j),
                  {},
                  {
                    children: [
                      Object(r.jsx)(Rt.c, { children: s }),
                      Object(r.jsx)(Rt.b, { onClick: l }),
                    ],
                  }
                )
              )
            : Object(r.jsx)(
                Rt.a,
                Object(p.a)(
                  Object(p.a)(Object(p.a)({ fontSize: "xs", py: 0 }, h), j),
                  {},
                  { children: s }
                )
              );
        },
        Ft = function () {
          var e = Object(u.h)().pathname.split("/").pop() || "",
            t = at(),
            n = t.data,
            i = t.loading,
            o = Zt([], 3),
            c = Object(pt.a)(o, 5),
            s = c[0],
            l = c[1],
            d = c[2],
            j = c[3],
            b = c[4];
          if (
            (console.log(n),
            Object(a.useEffect)(
              function () {
                var t;
                if (
                  n &&
                  n.getMe &&
                  n.getMe.user &&
                  (null === (t = n.getMe.user) || void 0 === t
                    ? void 0
                    : t.userTask)
                ) {
                  var C = n.getMe.user.userTask.filter(function (t) {
                    var n;
                    return (
                      (null === (n = t.task.project) || void 0 === n
                        ? void 0
                        : n.id) === e
                    );
                  });
                  l(C);
                }
              },
              [n]
            ),
            i)
          )
            return Object(r.jsx)(Tt, {});
          return Object(r.jsxs)(L.a, {
            bg: "achromatic.200",
            borderRadius: 6,
            p: "0",
            boxShadow: "base",
            children: [
              Object(r.jsxs)(gt.a, {
                alignItems: "center",
                p: 4,
                children: [
                  Object(r.jsx)(Mt.a, {}),
                  Object(r.jsx)(L.a, {
                    pl: 2,
                    children: Object(r.jsx)(I, {
                      headingType: C.table,
                      children: "My Tasks",
                    }),
                  }),
                ],
              }),
              s.slice(0, d).map(function (e) {
                return Object(r.jsxs)(r.Fragment, {
                  children: [
                    Object(r.jsxs)(
                      Bt,
                      {
                        p: 3,
                        bg: "achromatic.100",
                        w: "100%",
                        children: [
                          Object(r.jsx)(gt.a, {
                            ml: 9,
                            children: e.task.title,
                          }),
                          Object(r.jsx)(gt.a, {
                            ml: 5,
                            children: Object(r.jsx)(zt, {
                              children: e.task.board
                                ? e.task.board.title
                                : "todo",
                            }),
                          }),
                          Object(r.jsx)(gt.a, {
                            w: "100%",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            color: "achromatic.600",
                            mr: 3,
                            children: Object(r.jsx)(vt.b, {
                              className: "_icon",
                              opacity: "0",
                            }),
                          }),
                        ],
                      },
                      e.id
                    ),
                    Object(r.jsx)(ft.a, { orientation: "horizontal" }),
                  ],
                });
              }),
              Object(r.jsx)(gt.a, {
                width: "100%",
                justifyContent: "center",
                children: Object(r.jsx)("button", {
                  type: "button",
                  onClick: function () {
                    return d >= s.length ? b(3) : j(3);
                  },
                  children: Object(r.jsxs)(gt.a, {
                    alignItems: "center",
                    color: "achromatic.600",
                    p: 2,
                    children: [
                      d >= s.length
                        ? Object(r.jsx)(vt.c, {})
                        : Object(r.jsx)(vt.a, {}),
                      Object(r.jsx)(xt, {
                        pl: 1,
                        color: "achromatic.600",
                        fontSize: "sm",
                        children: d >= s.length ? "No More" : "See More",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        };
      function Vt() {
        var e = Object(U.a)([
          "\n  &:hover {\n    background: #e9e9e9;\n    cursor: pointer;\n    transition: ease 0.3s;\n\n    ._icon {\n      opacity: 1;\n      display: block;\n    }\n  }\n",
        ]);
        return (
          (Vt = function () {
            return e;
          }),
          e
        );
      }
      var Gt,
        Yt = Object(At.a)(wt)(Vt()),
        Wt = function () {
          var e,
            t = ot({
              variables: {
                projectId: Object(u.h)().pathname.split("/").pop() || "",
              },
            }),
            n = t.data,
            a = t.loading,
            i = Zt([], 2),
            o = Object(pt.a)(i, 5),
            c = o[0],
            s = o[1],
            l = o[2],
            d = o[3],
            j = o[4];
          if (a) return Object(r.jsx)(Tt, {});
          (null === n ||
          void 0 === n ||
          null === (e = n.project.project) ||
          void 0 === e
            ? void 0
            : e.projectPermissions) &&
            0 === c.length &&
            s(
              n.project.project.projectPermissions.map(function (e) {
                var t = {};
                return (
                  Object.assign(t, { username: e.user.username }),
                  Object.assign(t, { avatar: e.user.avatar }),
                  t
                );
              })
            );
          return Object(r.jsxs)(L.a, {
            bg: "achromatic.200",
            borderRadius: 6,
            p: "0",
            boxShadow: "base",
            children: [
              Object(r.jsxs)(gt.a, {
                alignItems: "center",
                p: 4,
                children: [
                  Object(r.jsx)(x.a, {}),
                  Object(r.jsx)(L.a, {
                    pl: 2,
                    children: Object(r.jsx)(I, {
                      headingType: C.table,
                      children: "Activity Stream",
                    }),
                  }),
                ],
              }),
              c.slice(0, l).map(function (e) {
                return "string" !== typeof e.notification
                  ? Object(r.jsxs)(r.Fragment, {
                      children: [
                        Object(r.jsxs)(Yt, {
                          p: 2,
                          bg: "achromatic.100",
                          w: "100%",
                          children: [
                            Object(r.jsx)(gt.a, {
                              w: "6rem",
                              justifyContent: "center",
                              alignItems: "center",
                              children: Object(r.jsx)(J, {
                                name: "".concat(e.username),
                                src: "".concat(e.avatar),
                              }),
                            }),
                            Object(r.jsxs)(gt.a, {
                              w: "70%",
                              children: [
                                Object(r.jsx)(xt, {
                                  fontWeight: "bold",
                                  pr: 2,
                                  children: "".concat(e.username),
                                }),
                                Object(r.jsx)(xt, {
                                  children: "did something",
                                }),
                              ],
                            }),
                            Object(r.jsx)(gt.a, {
                              w: "25%",
                              alignItems: "center",
                              justifyContent: "flex-end",
                              color: "achromatic.600",
                              pr: 4,
                            }),
                          ],
                        }),
                        Object(r.jsx)(ft.a, { orientation: "horizontal" }),
                      ],
                    })
                  : null;
              }),
              Object(r.jsx)(gt.a, {
                width: "100%",
                justifyContent: "center",
                children: Object(r.jsx)("button", {
                  type: "button",
                  onClick: function () {
                    return l >= c.length ? j(2) : d(2);
                  },
                  children: Object(r.jsxs)(gt.a, {
                    alignItems: "center",
                    color: "achromatic.600",
                    p: 2,
                    children: [
                      l >= c.length
                        ? Object(r.jsx)(vt.c, {})
                        : Object(r.jsx)(vt.a, {}),
                      Object(r.jsx)(xt, {
                        pl: 1,
                        color: "achromatic.600",
                        fontSize: "sm",
                        children: l >= c.length ? "No More" : "See More",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        Jt = n(675),
        Nt = function () {
          return Object(r.jsx)(Jt.a, {
            maxW: "70%",
            children: Object(r.jsxs)(gt.a, {
              justifyContent: "center",
              children: [
                Object(r.jsx)(gt.a, {
                  w: "25rem",
                  children: Object(r.jsxs)("svg", {
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 750 750",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      Object(r.jsx)("rect", {
                        width: "750",
                        height: "750",
                        fill: "white",
                      }),
                      Object(r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d:
                          "M595.996 588.651C523.506 680.994 410.697 555.654 314.401 603.231C218.104 650.808 126.988 551.318 133.311 386.56C139.633 221.801 252.395 140.677 386.211 153.273C490.468 163.085 632.472 258.646 586.755 365.569C564.869 440.416 658.828 508.611 595.996 588.651Z",
                        fill: "#64FCD9",
                      }),
                      Object(r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d:
                          "M495.422 60.5447C499.907 62.6049 499.689 68.9601 498.755 73.8065C491.438 111.775 484.121 139.744 476.805 177.712C477.25 178.513 478.57 178.243 479.859 178.627C481.543 179.129 483.204 180.271 483.09 181.549C482.164 191.957 478.415 202.408 474.933 214.954C483.834 215.167 497.003 215.481 514.439 215.898C515.686 215.927 516.706 216.879 516.837 218.103L516.849 218.264C517.235 227.516 515.946 236.837 513.056 245.635C517.416 243.996 522.331 247.574 523.866 251.972C525.402 256.369 524.511 261.199 523.606 265.768C514.978 309.318 506.35 352.868 497.722 396.418C503.379 396.548 506.569 402.806 508.511 408.12C529.65 465.968 550.194 524.033 570.139 582.303C568.213 587.276 560.852 587.939 556.504 584.851C552.156 581.763 550.112 576.435 548.298 571.419C542.405 555.121 536.512 538.824 530.619 522.526C510.65 527.76 490.68 532.994 470.71 538.228C464.271 563.549 458.838 589.126 454.429 614.878C457.697 616.74 460.395 619.586 462.081 622.948C462.442 618.887 465.936 615.328 469.989 614.892C472.136 619.04 472.006 624.281 469.657 628.318C476.314 631.508 482.972 634.699 489.629 637.889C482.735 637.552 475.924 635.622 469.877 632.294C473.723 638.056 481.276 639.653 487.723 642.191C494.169 644.729 500.918 650.584 499.191 657.293C497.295 664.658 487.413 665.893 479.859 665.017C463.508 663.119 447.476 658.511 432.613 651.437C428.973 649.704 424.771 646.4 426.086 642.589C431.462 627.003 430.221 609.252 422.729 594.566C415.573 611.041 412.703 629.356 414.476 647.23C418.019 645.595 421.562 643.959 425.105 642.323C422.318 651.742 433.205 662.026 442.45 658.707C438.899 661.096 434.513 662.214 430.252 661.816C437.035 665.676 443.817 669.535 450.6 673.395C454.734 675.747 459.368 678.86 459.669 683.608C460.1 690.428 451.659 693.938 444.867 694.692C421.744 697.261 397.791 691.608 378.257 678.971C387.389 634.089 390.074 587.901 386.203 542.264C375.472 550.317 361.926 554.539 348.52 554.009C351.847 588.454 355.175 622.9 358.503 657.345C359.176 664.311 359.719 671.865 355.979 677.78C352.239 683.694 342.367 685.944 338.431 680.158C336.937 677.962 336.638 675.194 336.383 672.55C332.098 628.165 327.813 583.779 323.529 539.394C309.075 539.484 294.621 539.575 280.168 539.665C278.673 584.607 277.178 629.548 275.683 674.49C275.313 685.615 271.16 700.469 260.047 699.818C249.231 699.183 246.521 684.591 246.969 673.766C248.854 628.213 250.739 582.66 252.624 537.108C247.119 534.191 240.84 532.751 234.615 532.979C226.673 569.001 218.731 605.024 210.789 641.046C210.165 643.876 209.408 646.929 207.155 648.753C203.022 652.097 196.326 648.867 194.265 643.966C192.204 639.066 193.332 633.477 194.489 628.288C201.551 596.64 208.613 564.991 215.674 533.343C216.303 530.524 216.544 526.816 213.962 525.521C205.272 521.164 204.858 507.941 210.701 500.171C216.545 492.402 226.237 488.757 235.395 485.494C186.48 370.955 218.043 342.664 221.691 353.668L221.734 353.813C221.912 350.954 237.106 320.496 226.664 325.138C204.574 334.958 211.02 290.801 211.083 290.429C213.605 275.5 230.67 242.259 235.726 237.42C232.196 240.772 226.173 241.845 222.454 238.705C218.735 235.564 219.774 228.13 224.544 227.159C226.556 226.749 228.549 225.922 230.1 224.709C234.639 221.159 236.971 214.684 237.389 208.688C237.95 200.644 235.905 192.581 236.518 184.54C238.093 163.858 258.91 147.472 279.631 148.404C300.352 149.336 318.738 165.516 324.883 185.326C331.756 182.607 339.621 179.904 346.278 183.117C352.934 186.33 354.107 198.438 346.882 199.998C337.796 201.96 329.331 206.386 324.142 215.952C322.447 219.077 326.837 222.829 321.256 228.787C318.449 231.784 317.762 238.109 315.045 241.673C309.381 249.102 300.921 253.315 288.297 251.972C286.076 257.194 285.42 258.728 286.35 259.132C300.247 265.169 307.599 281.137 313.341 295.546L322.294 318.011C335.254 312.287 350.151 311.062 363.872 314.591C368.69 315.83 373.716 317.644 378.5 316.281C383.284 314.919 386.798 308.455 383.36 304.861L353.535 298.45C364.378 299.033 375.221 299.617 386.063 300.201C389.244 280.931 394.822 252.707 402.799 215.527L442.788 215.299C443.87 212.509 445.215 208.388 446.823 202.935C448.315 197.875 448.658 192.037 449.681 186.861C450.704 181.686 455.226 176.324 460.346 177.597C467.976 139.35 475.605 111.102 483.234 72.8552C484.544 66.2909 489.34 57.7506 495.422 60.5447ZM434.761 396.863C428.681 418.511 426.428 430.504 428.005 432.841C430.369 436.347 450.37 438.765 456.769 448.195C463.169 457.625 456.033 459.524 454.721 468.695C453.408 477.867 456.608 471.997 456.086 487.561C455.741 497.832 454.547 519.896 452.503 553.753L452.441 554.782L482.451 409.078C474.842 407.994 468.04 406.683 462.044 405.148C456.049 403.612 446.954 400.85 434.761 396.863ZM493.795 415.124L481.648 473.886L519.113 487.044L493.795 415.124ZM372.94 389.305L366.979 423.041L387.234 430.373L372.94 389.305ZM395.245 383.661L410.136 430.373L418.45 391.762L395.245 383.661ZM368.248 368.779C357.138 376.621 349.368 381.953 344.937 384.775C340.861 387.37 338.812 389.239 335.239 390.669C325.839 394.429 319.376 393.737 315.849 388.593C315.829 396.499 315.541 402.409 314.986 406.324C314.43 410.239 313.367 413.874 311.795 417.23C320.643 422.901 328.927 426.266 336.648 427.325C344.368 428.384 350.765 427.71 355.838 425.304L368.248 368.779Z",
                        fill: "white",
                      }),
                      Object(r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d:
                          "M240.802 205.428C244.406 204.479 270.446 198.835 283.512 193.755C292.223 190.369 303.726 184.252 318.02 175.407C319.056 179.759 320.13 182.881 321.243 184.771C322.356 186.662 324.601 187.735 327.977 187.991C323.094 192.406 319.29 195.451 316.564 197.126C303.34 205.253 289.372 209.887 276.454 212.699C264.118 215.384 254.838 219.04 247.852 218.838C245.261 218.763 242.991 219.433 240.802 215.604C238.613 211.775 237.197 206.376 240.802 205.428Z",
                        fill: "#FFB61D",
                      }),
                      Object(r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d:
                          "M495.423 60.5447C499.908 62.6049 499.689 68.9601 498.755 73.8065C491.438 111.775 484.122 139.744 476.805 177.712C477.251 178.513 478.571 178.243 479.859 178.627C481.543 179.129 483.204 180.271 483.09 181.549C482.164 191.957 478.415 202.408 474.933 214.954C483.835 215.167 497.004 215.481 514.44 215.898C515.686 215.927 516.706 216.879 516.837 218.103L516.849 218.264C517.235 227.516 515.946 236.837 513.057 245.635C517.416 243.996 522.331 247.574 523.866 251.972C525.402 256.369 524.512 261.199 523.607 265.768C514.979 309.318 506.351 352.868 497.723 396.418C503.379 396.548 506.569 402.806 508.511 408.12C529.65 465.968 550.195 524.033 570.14 582.303C568.213 587.276 560.853 587.939 556.504 584.851C552.156 581.763 550.112 576.435 548.298 571.419C542.405 555.121 536.513 538.824 530.62 522.526C510.65 527.76 490.68 532.994 470.71 538.228C464.271 563.549 458.838 589.126 454.429 614.878C457.697 616.74 460.395 619.586 462.081 622.948C462.442 618.887 465.936 615.328 469.989 614.892C472.136 619.04 472.006 624.281 469.657 628.318C476.315 631.508 482.972 634.699 489.629 637.889C482.735 637.552 475.924 635.622 469.877 632.294C473.723 638.056 481.277 639.653 487.723 642.191C494.169 644.729 500.918 650.584 499.191 657.293C497.295 664.658 487.413 665.893 479.859 665.017C463.509 663.119 447.476 658.511 432.613 651.437C428.973 649.704 424.771 646.4 426.086 642.589C431.462 627.003 430.221 609.252 422.73 594.566C415.573 611.041 412.703 629.356 414.476 647.23C418.019 645.595 421.562 643.959 425.105 642.323C422.318 651.742 433.205 662.026 442.45 658.707C438.9 661.096 434.513 662.214 430.252 661.816C437.035 665.676 443.817 669.535 450.6 673.395C454.734 675.747 459.369 678.86 459.669 683.608C460.1 690.428 451.659 693.938 444.867 694.692C421.744 697.261 397.791 691.608 378.257 678.971C387.389 634.089 390.074 587.901 386.203 542.264C375.472 550.317 361.926 554.539 348.52 554.009C351.848 588.454 355.176 622.9 358.503 657.345C359.176 664.311 359.719 671.865 355.979 677.78C352.239 683.694 342.367 685.944 338.431 680.158C336.937 677.962 336.639 675.194 336.383 672.55C332.099 628.165 327.814 583.779 323.529 539.394C309.075 539.484 294.621 539.575 280.168 539.665C278.673 584.607 277.178 629.548 275.683 674.49C275.313 685.615 271.16 700.469 260.048 699.818C249.231 699.183 246.521 684.591 246.969 673.766C248.854 628.213 250.739 582.66 252.624 537.108C247.119 534.191 240.841 532.751 234.615 532.979C226.673 569.001 218.731 605.024 210.789 641.046C210.165 643.876 209.408 646.929 207.155 648.753C203.023 652.097 196.326 648.867 194.265 643.966C192.204 639.066 193.332 633.477 194.49 628.288C201.551 596.64 208.613 564.991 215.674 533.343C216.303 530.524 216.544 526.816 213.963 525.521C205.272 521.164 204.858 507.941 210.702 500.171C216.545 492.402 226.238 488.757 235.396 485.494C213.051 447.32 204.285 401.378 211.004 357.658C211.839 376.378 212.674 395.098 213.51 413.817C247.791 418.614 283.443 413.144 314.709 398.29C315.862 374.459 279.055 362.683 279.065 338.825C289.725 356.414 302.802 372.536 317.813 386.595C320.076 388.715 322.617 390.895 325.705 391.17C328.424 391.413 331.02 390.123 333.425 388.832C356.275 376.572 377.323 360.96 395.686 342.652C391.917 334.541 386.088 327.398 378.899 322.077C369.028 330.618 359.158 339.159 349.287 347.7C347.155 349.545 344.794 351.485 341.978 351.614C338.526 351.772 335.6 349.164 333.4 346.5C316.358 325.865 315.848 291.023 291.446 280.034C287.521 290.753 283.318 301.899 274.938 309.651C266.559 317.404 252.661 320.48 243.734 313.365C242.786 321.221 239.382 328.764 234.119 334.673C237.845 317.256 244.187 300.401 252.867 284.848C234.121 306.828 226.398 337.769 232.618 365.98C222.83 353.174 223.111 333.655 233.264 321.136C223.423 328.532 218.689 342.101 221.794 354.014C217.623 352.402 214.07 349.244 211.98 345.291C212.287 348.851 212.595 352.41 212.902 355.97C209.111 353.3 205.32 350.631 201.529 347.961C203.932 351.291 206.335 354.621 208.738 357.951C197.317 357.82 187.085 347.255 187.236 335.855L187.242 335.532L186.567 346.919L185.89 358.304L185.915 357.307C186.142 345.728 184.375 334.112 180.713 323.125C175.812 308.425 181.809 291.168 193.845 281.675L194.074 281.497L193.541 281.775C190.844 283.164 188.099 284.46 185.312 285.66L235.727 237.42C232.196 240.772 226.174 241.845 222.454 238.705C218.735 235.564 219.774 228.13 224.544 227.159C226.557 226.749 228.55 225.922 230.1 224.709C234.64 221.159 236.972 214.684 237.39 208.688C237.951 200.644 235.905 192.581 236.518 184.54C238.094 163.858 258.911 147.472 279.632 148.404C300.353 149.336 318.738 165.516 324.883 185.326C331.756 182.607 339.621 179.904 346.278 183.117C352.935 186.33 354.108 198.438 346.883 199.998C337.949 201.927 331.146 208.329 324.842 215.593C324.836 217.268 325.083 218.584 325.582 219.542C327.118 222.489 325.642 224.401 323.594 226.206L323.146 226.591C322.154 227.439 321.602 227.975 321.257 228.787L321.179 228.979C321.107 229.17 320.173 232.191 319.699 233.499C318.766 236.073 317.649 238.441 316.206 240.684C310.903 248.925 303.454 253.725 289.746 253.002C288.788 252.951 287.659 254.996 286.361 259.137C300.252 265.177 307.601 281.141 313.342 295.546L322.294 318.011C335.254 312.287 350.151 311.062 363.873 314.591C368.69 315.83 373.717 317.644 378.5 316.281C383.284 314.919 386.798 308.455 383.36 304.861C373.419 302.724 363.477 300.587 353.536 298.45C364.378 299.033 375.221 299.617 386.064 300.201C389.244 280.931 394.822 252.707 402.799 215.527L442.788 215.299C443.871 212.509 445.215 208.388 446.823 202.935C448.315 197.875 448.659 192.037 449.682 186.861C450.705 181.686 455.227 176.324 460.346 177.597C467.976 139.35 475.605 111.102 483.234 72.8552C484.544 66.2909 489.34 57.7506 495.423 60.5447ZM268.345 538.069C267.612 538.116 266.791 538.205 266.326 538.774C265.96 539.222 265.921 539.844 265.899 540.422L260.009 692.091C259.978 692.893 259.952 693.728 260.28 694.46C261.124 696.35 263.83 696.559 265.717 695.71C271.086 693.293 272.064 686.224 272.288 680.341C274.036 634.51 275.784 588.68 277.531 542.849C277.681 538.935 272.255 537.821 268.345 538.069ZM255.143 539.496C253.346 585.236 251.549 630.977 249.753 676.717C249.471 683.874 250.297 692.834 256.973 695.429C258.962 644.611 260.952 593.792 262.941 542.974C263.026 540.809 262.993 538.344 261.392 536.883C259.303 534.978 255.254 536.671 255.143 539.496ZM410.115 648.535C407.878 649.656 406.243 651.667 404.327 653.277C402.185 655.077 399.516 656.428 396.719 656.363C393.922 656.297 391.064 654.529 390.346 651.825C389.844 649.934 387.022 649.614 385.504 650.848C383.986 652.082 383.48 654.15 383.125 656.074C381.729 663.642 381.26 671.381 381.733 679.063L398.043 685.54C409.469 690.078 421.509 694.702 433.706 693.157C416.397 689.951 399.447 684.819 383.266 677.888C387.285 676.435 391.662 678.265 395.607 679.909C407.478 684.857 419.95 688.363 432.661 690.326C435.093 690.701 438.327 690.556 439.067 688.209C440.757 682.847 444.887 678.307 450.065 676.119C446.464 671.868 439.621 670.831 434.922 673.823C433.982 673.196 434.328 671.6 435.275 670.984C436.221 670.368 437.441 670.438 438.567 670.53C437.405 668.163 434.35 667.246 431.759 667.734C429.167 668.222 426.931 669.794 424.785 671.326C424.423 668.457 427.017 665.585 429.907 665.652C430.36 664.022 427.932 663.087 426.317 663.594C424.703 664.1 423.101 665.244 421.48 664.759C422.075 662.059 424.941 660.071 427.678 660.46C426.791 657.342 421.804 657.83 419.836 660.405C417.867 662.98 417.643 666.462 416.305 669.415C414.968 672.368 411.275 674.909 408.621 673.049C412.683 670.828 415.639 666.685 416.417 662.121C413.126 662.864 409.095 663.271 406.93 660.683C405.458 658.924 405.535 656.066 407.1 654.389C408.664 652.711 411.51 652.435 413.367 653.781C415.394 655.249 418.142 651.837 416.842 649.698C415.542 647.56 412.353 647.413 410.115 648.535ZM449.675 678.952C446.953 680.166 445.161 682.771 443.512 685.254L440.947 689.115C440.591 689.651 441.122 690.323 441.609 690.743C444.558 689.089 448.174 689.357 451.455 688.54C454.736 687.722 458.132 684.744 457.15 681.508C456.285 678.657 452.396 677.739 449.675 678.952ZM327.164 539.484C330.959 584.722 335.036 629.936 339.396 675.123C339.586 677.084 340.054 679.43 341.9 680.122C337.749 633.917 333.599 587.713 329.448 541.508C329.329 540.186 327.965 538.425 327.164 539.484ZM343.999 538.43C340.949 538.749 337.899 539.068 334.849 539.388C334.115 539.464 333.289 539.593 332.867 540.198C332.523 540.69 332.561 541.344 332.614 541.942C336.534 586.654 340.455 631.366 344.375 676.079C344.725 680.069 351.046 680.734 353.688 677.723C356.329 674.712 356.227 670.25 355.923 666.256C355.523 660.992 355.029 655.736 354.535 650.479L343.999 538.43ZM448.734 652.984C457.412 659.073 467.715 662.823 478.278 663.738C478.839 663.042 477.635 662.296 476.748 662.18C472.188 661.586 467.742 660.231 463.539 658.363C458.711 656.217 454.005 653.342 448.734 652.984ZM492.806 649.94C489.596 652.216 487.075 655.452 485.654 659.122C485.515 659.483 485.384 659.874 485.478 660.25C485.716 661.2 487.033 661.257 488 661.101C489.298 660.892 490.596 660.682 491.894 660.473C493.503 660.214 495.288 659.849 496.222 658.514C496.929 657.503 496.961 656.171 496.822 654.945C496.652 653.457 496.269 651.994 495.686 650.614C495.482 650.132 495.215 649.621 494.733 649.419C494.091 649.149 493.374 649.537 492.806 649.94ZM453.753 618.645C451.962 618.96 450.837 620.779 450.341 622.529C449.845 624.28 449.726 626.168 448.836 627.756C447.701 629.783 445.301 631.025 442.99 630.782C440.679 630.538 438.591 628.824 437.902 626.604C437.332 624.767 434.623 624.46 433.073 625.6C431.524 626.74 430.865 628.702 430.293 630.539C429.086 634.417 427.891 638.688 429.467 642.432C430.985 646.038 434.761 648.215 438.549 649.196C442.337 650.178 446.305 650.221 450.143 650.981C460.512 653.032 469.705 660.237 480.275 660.289C481.388 660.294 482.757 660.032 483.09 658.97C484.593 654.181 487.844 649.961 492.09 647.284C488.602 645.173 484.996 643.018 480.965 642.4C476.934 641.782 472.326 643.078 470.206 646.562C469.715 644.303 469.225 642.044 468.734 639.785C467.166 640.789 465.233 641.211 463.389 640.952C464.395 639.951 465.463 638.824 465.577 637.409C465.691 635.994 464.207 634.463 462.942 635.107C461.032 636.08 459.032 637.076 456.889 637.084C454.746 637.092 452.433 635.774 452.068 633.662C451.7 631.539 453.455 629.514 455.491 628.811C457.528 628.109 459.757 628.397 461.891 628.693C461.046 626.915 460.201 625.138 459.356 623.36C458.225 620.982 456.347 618.188 453.753 618.645ZM409.884 656.228C408.563 656.986 409.216 659.251 410.628 659.824C412.04 660.396 413.633 659.858 415.059 659.322C415.862 659.019 416.747 658.642 417.084 657.852C415.395 656.714 413.386 656.056 411.352 655.976C410.849 655.956 410.32 655.977 409.884 656.228ZM420.421 652.538C419.373 653.416 419.377 655.263 420.43 656.135C420.846 655.821 421.133 655.341 421.211 654.826L421.067 654.664C421.942 654.089 421.443 652.312 420.421 652.538ZM432.81 513.438C428.748 516.874 424.626 520.377 421.732 524.841C419.768 527.87 418.258 531.449 415.162 533.307C409.623 536.631 400.664 533.471 397.25 538.954C396.319 540.45 395.535 542.691 393.784 542.498C391.156 542.208 390.134 545.799 390.1 548.442C389.687 580.18 389.275 611.918 388.862 643.656C388.81 647.683 391.495 651.675 395.334 652.893C395.964 653.092 396.617 653.222 397.276 653.273C401.823 653.628 405.952 650.177 407.959 646.081C409.965 641.986 410.341 637.318 410.921 632.794C413.513 612.569 420.763 593.289 426.482 573.717C432.201 554.145 436.436 533.504 432.81 513.438ZM430.188 647.407C429.535 648.015 430.271 649.075 431.017 649.565C433.103 650.934 435.608 651.656 438.103 651.606C435.551 650.052 432.906 648.649 430.188 647.407ZM423.215 645.705C422.236 646.593 421.547 647.797 421.279 649.093C421.161 649.66 421.149 650.322 421.551 650.739C422.186 651.398 423.41 650.893 423.766 650.049C424.121 649.205 423.89 648.241 423.655 647.356C423.508 646.805 423.362 646.255 423.215 645.705ZM224.432 529.806C216.329 567.131 208.227 604.456 200.124 641.781C199.787 643.334 199.512 645.151 200.561 646.345C201.795 647.748 204.235 647.331 205.538 645.991C206.841 644.652 207.304 642.729 207.715 640.906L232.258 532.039C229.888 530.662 227.171 529.887 224.432 529.806ZM219.272 530.356C212.219 561.681 205.166 593.005 198.113 624.33C196.777 630.26 195.442 636.456 196.926 642.351C205.34 604.469 213.755 566.587 222.169 528.704C221.818 527.188 219.614 528.838 219.272 530.356ZM471.057 638.801C470.796 639.852 471.352 641.048 472.324 641.527C473.019 640.821 473.955 640.359 474.938 640.237L475.094 639.96C474.416 638.529 472.391 637.948 471.057 638.801ZM467.624 633.79C466.768 634.602 467.507 636.358 468.687 636.313L468.907 636.57L469.484 635.644L467.624 633.79ZM454.641 633.309C457.753 634 461.077 633.702 464.017 632.469C464.474 632.278 464.808 631.823 464.855 631.331C461.435 630.062 457.339 630.856 454.641 633.309ZM468.831 619.533C465.78 621.052 464.068 624.849 464.948 628.141C465.017 628.398 465.108 628.665 465.31 628.838C466.075 629.494 467.002 628.222 467.21 627.236C467.75 624.668 468.29 622.1 468.831 619.533ZM453.122 473.886C453.656 483.757 443.403 490.412 438.867 499.195C434.418 507.808 435.711 518.091 436.044 527.779C436.692 546.573 433.233 565.497 425.98 582.847C423.815 588.027 425.427 593.928 427.057 599.301C428.975 605.623 430.893 611.945 432.811 618.266C433.335 619.995 434.187 622.023 435.973 622.294C437.868 622.582 439.016 624.455 440.195 625.966C441.375 627.477 443.443 628.865 445.078 627.863C445.648 627.514 446.031 626.932 446.375 626.358C453.866 613.869 451.421 598.144 450.392 583.617C448.061 550.724 454.306 517.838 454.711 484.864C454.755 481.289 454.704 477.588 453.312 474.311L453.122 473.886ZM513.455 251.231C496.799 356.881 477.238 462.073 454.801 566.647C452.376 577.953 452.091 589.713 453.965 601.122C472.198 512.249 489.994 423.286 507.353 334.238C512.252 309.105 517.118 283.956 520.885 258.628C521.293 255.885 521.612 252.813 519.955 250.589C518.298 248.365 513.887 248.492 513.455 251.231ZM495.906 416.199L554.246 579.94C555.013 582.095 556.148 584.577 558.399 584.981C538.568 529.213 518.736 473.445 498.904 417.676C498.41 416.288 496.395 414.809 495.906 416.199ZM496.726 403.625C499.13 402.359 502.442 403.26 503.873 405.569C505.304 407.878 504.638 411.245 502.436 412.835C501.067 413.824 501.488 415.931 502.052 417.522C521.704 472.908 541.356 528.294 561.008 583.681C562.536 585.051 565.188 583.712 565.833 581.764C566.477 579.816 565.786 577.704 565.1 575.77L504.691 405.542C503.88 403.258 502.824 400.712 500.556 399.856C498.289 398.999 495.213 401.731 496.726 403.625ZM435.871 397.963C433.291 407.869 431.052 417.862 429.159 427.921C428.664 430.552 428.853 434.226 431.484 434.717C439.265 436.168 447.409 437.782 453.528 442.803C459.647 447.823 462.789 457.422 458.16 463.843C456.398 466.287 453.538 469.11 455.052 471.714C458.268 477.244 457.871 484.074 457.379 490.452C455.807 510.798 454.235 531.144 452.663 551.49C461.995 504.286 471.327 457.083 480.658 409.88C465.168 409.032 450.376 403.466 435.871 397.963ZM434.008 488.254C434.989 490.718 435.97 493.183 436.951 495.648C435.282 495.031 433.614 494.415 431.946 493.798C432.459 496.136 433.464 498.364 434.878 500.295C432.978 500.338 431.077 499.488 429.842 498.044C428.731 501.34 429.092 505.102 430.809 508.126C429.565 507.012 428.214 505.846 426.559 505.627C424.903 505.408 422.961 506.645 423.122 508.307C425.429 509.204 426.53 512.33 425.295 514.475C424.414 513.027 423.421 511.483 421.837 510.88C420.253 510.276 418.012 511.273 418.088 512.967C418.139 514.093 419.116 514.917 419.733 515.861C420.349 516.805 420.37 518.439 419.274 518.704C417.665 517.323 416.055 515.942 414.445 514.56C414.812 517.379 415.18 520.197 415.547 523.015C413.999 519.995 410.525 516.486 407.898 518.634C409.672 520.793 410.623 523.613 410.518 526.405C408.666 526.447 407.783 524.238 406.908 522.606C406.033 520.974 403.385 519.73 402.617 521.415C403.784 523.899 404.649 526.524 405.189 529.214C401.9 530.773 400.419 521.751 397.305 523.634C395.821 524.532 396.581 526.776 397.313 528.348C398.046 529.919 397.998 532.525 396.266 532.589L392.944 525.87C392.107 526.333 391.27 526.796 390.433 527.259C391.94 529.408 392.277 532.327 391.299 534.763C389.694 534.584 389.406 532.439 389.069 530.858C388.731 529.278 386.554 527.709 385.79 529.133C385.559 529.564 385.628 530.088 385.704 530.571C386.102 533.099 386.499 535.628 386.897 538.156C384.856 538.254 384.239 535.505 383.766 533.518C383.292 531.53 380.467 529.598 379.604 531.45C380.89 533.594 380.998 536.398 379.88 538.635C379.034 536.13 377.341 533.921 375.142 532.453C376.038 535.531 376.216 538.816 375.659 541.974C373.379 539.709 372.222 536.363 372.618 533.173C369.976 533.098 369.527 536.944 370.127 539.517C370.726 542.09 370.65 545.861 368.024 546.157C367.895 543.472 367.766 540.788 367.636 538.103C367.587 537.078 367.499 535.958 366.792 535.214C366.085 534.471 364.539 534.542 364.289 535.537C365.126 538.44 364.805 541.66 363.413 544.342C362.092 544.456 361.328 542.785 361.46 541.466C361.592 540.146 362.197 538.837 361.911 537.542C361.626 536.247 359.687 535.338 359.01 536.479C358.772 536.88 358.796 537.378 358.828 537.843L359.406 546.453C356.696 544.76 355.365 541.141 356.331 538.096C356.822 536.547 353.814 536.195 353.149 537.678C352.484 539.16 353.283 540.838 353.701 542.409C354.119 543.979 353.757 546.168 352.155 546.439C350.22 543.308 349.726 539.325 350.838 535.816C349.45 535.879 348.098 536.536 347.191 537.589C347.444 540.694 347.697 543.799 347.95 546.905C348.05 548.128 348.19 549.449 349.02 550.354C352.264 553.896 358.812 546.193 362.387 549.4C365.067 551.805 369.425 550.446 372.212 548.166C374.999 545.885 377.226 542.772 380.555 541.4C385.875 539.206 393.596 541.469 396.486 536.493C399.826 530.742 409.573 534.599 414.796 530.483C417.213 528.579 418.105 525.372 419.786 522.794C422.422 518.751 426.966 516.322 429.9 512.49C434.538 506.43 434.751 497.432 440.523 492.441C438.351 491.045 436.18 489.649 434.008 488.254ZM210.49 507.782C207.406 510.34 207.775 515.479 210.239 518.638C212.704 521.797 216.609 523.424 220.383 524.771C252.884 536.375 288.177 536.809 322.685 536.421C330.477 536.334 338.358 536.2 345.899 534.235C355.289 531.789 364.828 525.048 365.566 515.374C363.018 521.357 357.14 525.406 350.923 527.317C344.707 529.227 338.096 529.296 331.593 529.349L313.198 529.498C282.228 529.75 250.415 529.858 221.472 518.834C216.286 516.859 210.408 513.33 210.49 507.782ZM529.292 520.395C511.047 523.925 492.981 528.374 475.184 533.722C473.507 534.226 471.825 534.741 470.253 535.51C471.065 536.041 472.136 535.807 473.073 535.555C491.813 530.501 510.552 525.448 529.292 520.395ZM296.863 423.324C290.021 426.438 282.461 427.534 275.019 428.595C267.315 429.694 259.611 430.793 251.906 431.893C246.81 432.62 241.694 433.348 236.546 433.376C229.952 433.412 223.353 432.286 217.144 430.065C218.889 440.579 220.819 451.156 224.843 461.025C228.867 470.893 235.173 480.113 244.11 485.919C250.075 489.794 256.975 492.011 263.933 493.489C283.085 497.556 302.917 496.291 322.455 495.006C329.721 494.528 336.987 494.051 344.254 493.573C348.98 493.262 353.723 492.949 358.363 491.999C363.204 491.007 367.878 489.331 372.467 487.497C391.277 479.976 408.862 469.744 426.369 459.551C426.949 460.089 427.576 460.733 427.547 461.524C427.517 462.315 426.322 462.908 425.924 462.223C404.472 476.733 380.995 488.243 356.386 496.314C363.631 499.546 368.54 507.411 368.261 515.339C367.983 523.267 362.533 530.769 355.08 533.484C371.823 532.148 387.969 526.323 402.799 518.438C411.005 514.074 419.032 508.926 424.79 501.631C428.849 496.49 431.632 490.465 434.015 484.364C438.976 471.666 442.37 458.357 444.096 444.833C444.281 443.377 444.405 441.751 443.508 440.589C442.782 439.648 441.565 439.258 440.421 438.934C423.505 434.132 405.707 432.457 388.193 434.018C380.19 434.731 372.064 436.106 364.194 434.491C357.021 433.019 350.38 429.11 343.07 428.692C337.364 428.366 331.361 430.168 326.072 428.003C320.798 425.844 317.323 420.098 311.74 418.957C306.577 417.902 301.659 421.14 296.863 423.324ZM518.793 492.595L480.931 499.358C479.816 499.557 478.62 499.798 477.84 500.62C477.138 501.361 476.92 502.423 476.731 503.425C474.916 513.042 473.101 522.66 471.286 532.277C490.122 527.449 508.958 522.622 527.794 517.794C528.119 517.711 528.461 517.618 528.693 517.376C529.154 516.898 528.967 516.118 528.751 515.49C526.481 508.887 524.21 502.285 521.94 495.682C521.417 494.162 520.376 492.313 518.793 492.595ZM219.269 496.154C216.062 498.583 212.609 501.591 212.455 505.611C212.245 511.1 218.113 514.627 223.265 516.532C248.515 525.866 276.06 526.333 302.981 526.343C313.566 526.347 324.151 526.297 334.735 526.193C342.899 526.113 351.734 525.772 358.102 520.663C361.014 518.327 363.243 514.934 363.481 511.208C363.862 505.249 359.025 499.948 353.438 497.841C347.851 495.734 341.672 496.114 335.721 496.604C320.305 497.876 304.887 499.697 289.423 499.355C273.958 499.014 258.273 496.406 244.533 489.3C236.334 485.059 226.627 490.579 219.269 496.154ZM370.153 520.781C371.044 521.394 371.176 522.85 370.409 523.613L370.252 523.96C369.061 523.41 368.998 521.404 370.153 520.781ZM386.299 521.717C387.014 522.455 386.104 523.949 385.12 523.652C384.136 523.355 384.203 521.608 385.207 521.387L385.23 521.313C385.583 521.012 386.233 521.257 386.299 521.717ZM378.599 522.525C378.367 522.969 377.891 523.274 377.391 523.298C376.904 522.919 376.402 522.164 376.891 521.787L376.822 521.734C377.341 520.983 378.809 521.636 378.599 522.525ZM385.68 515.01C386.09 515.324 386.372 515.8 386.45 516.31C386.01 516.926 385.373 517.398 384.655 517.638L384.653 517.614C384.24 517.309 383.957 516.834 383.886 516.327C384.32 515.709 384.961 515.239 385.68 515.01ZM398.223 515.388L398.409 515.249C399.018 515.823 399.141 516.843 398.688 517.546C397.752 517.552 396.667 517.099 396.5 516.178C396.333 515.258 397.879 514.517 398.223 515.388ZM377.882 515.11C378.498 515.408 378.844 516.173 378.661 516.832C378.232 517.199 377.542 517.214 377.097 516.867L377.097 516.881C376.343 516.368 376.995 514.896 377.882 515.11ZM391.937 515.524C392.501 516.39 390.847 517.467 390.283 516.601C389.719 515.735 391.372 514.658 391.937 515.524ZM404.976 508.674L404.854 508.804C405.511 509.489 404.814 510.871 403.873 510.751C403.19 510.553 402.813 509.662 403.146 509.034C403.48 508.405 404.429 508.219 404.976 508.674ZM392.505 508.997L392.743 509.063C392.677 509.932 391.691 510.6 390.859 510.339C390.473 509.617 390.394 508.602 391.024 508.079C391.653 507.555 392.899 508.279 392.505 508.997ZM378.521 508.59L380.301 509.44C379.913 510.006 379.267 510.517 378.601 510.356C377.935 510.194 377.746 509.02 378.417 508.884L378.521 508.59ZM412.468 508.526C412.261 509.274 411.762 509.937 411.1 510.342C410.689 510.036 410.408 509.561 410.337 509.054L410.388 509.076C410.729 508.331 411.803 508.047 412.468 508.526ZM399.173 507.765C399.642 508.158 400.065 508.721 399.972 509.326C399.88 509.931 398.99 510.33 398.629 509.836L398.657 509.832C398.245 509.522 397.961 509.047 397.883 508.538C398.191 508.127 398.665 507.843 399.173 507.765ZM384.734 507.029L386.433 507.847C386.177 508.638 385.398 509.374 384.596 509.155C383.794 508.937 383.813 507.416 384.642 507.472L384.734 507.029ZM413.292 501.902C413.499 503.14 411.134 503.537 410.927 502.299C410.719 501.06 413.084 500.664 413.292 501.902ZM370.102 501.1C370.55 501.318 370.853 501.803 370.853 502.301C370.634 502.874 369.866 503.156 369.327 502.862L369.315 502.876C368.563 502.359 369.214 500.89 370.102 501.1ZM419.928 499.976C420.334 500.298 420.616 500.772 420.706 501.282L419.572 502.707L419.38 502.716C418.171 502.296 418.66 500.152 419.928 499.976ZM391.352 500.005C391.876 500.353 392.443 500.763 392.571 501.379C392.699 501.994 392.017 502.725 391.486 502.39L391.403 502.687C390.291 502.524 390.514 500.755 391.352 500.005ZM385.967 501.331L385.922 501.279C386.035 501.715 385.963 502.195 385.728 502.579C385.02 502.828 384.133 502.125 384.32 501.398C384.507 500.672 385.788 500.602 385.967 501.331ZM406.794 499.925C407.686 500.385 407.757 501.869 406.913 502.411C406.069 502.954 404.748 502.273 404.7 501.271C404.652 500.269 405.902 499.465 406.794 499.925ZM398.896 501.784L398.838 501.763C398.671 502.346 397.888 502.65 397.371 502.331C397.241 501.641 397.472 500.779 398.143 500.569C398.813 500.359 399.507 501.437 398.896 501.784ZM379.691 500.747C379.337 501.342 378.582 501.668 377.907 501.518L377.912 501.525L377.791 501.438C377.438 501.152 377.21 500.714 377.186 500.26C377.629 499.146 379.698 499.549 379.691 500.747ZM481.664 480.279C480.321 485.328 479.236 490.445 478.415 495.604C478.357 495.971 478.307 496.376 478.506 496.69C478.833 497.205 479.586 497.16 480.187 497.053C490.623 495.197 501.06 493.34 511.497 491.484C511.614 490.768 510.781 490.305 510.096 490.069C500.619 486.805 491.141 483.542 481.664 480.279ZM379.459 494.285L379.429 494.337C380.091 494.445 380.008 495.587 379.377 495.814C378.745 496.04 378.055 495.598 377.667 495.052C378.032 494.464 378.782 494.143 379.459 494.285ZM371.893 494.535C371.48 495.153 370.847 495.619 370.136 495.83C369.651 495.439 369.146 494.692 369.621 494.29L369.584 494.259C370.15 493.516 371.518 493.679 371.893 494.535ZM392.606 495.031C392.374 495.474 391.897 495.779 391.397 495.804C390.911 495.425 390.408 494.67 390.897 494.293L390.828 494.24C391.348 493.489 392.816 494.142 392.606 495.031ZM385.738 493.394C386.54 493.613 386.522 495.134 385.693 495.078L385.6 495.52L383.901 494.702C384.157 493.912 384.937 493.176 385.738 493.394ZM406.068 494.364C406.005 495.189 404.89 495.707 404.213 495.232C403.535 494.757 403.632 493.546 404.371 493.174L404.363 493.259C405.088 492.86 406.13 493.539 406.068 494.364ZM399.974 494.562C399.435 494.999 398.815 495.45 398.123 495.394C397.431 495.339 396.835 494.451 397.296 493.932L397.37 494.018C398.189 493.463 399.445 493.726 399.974 494.562ZM426.91 494.546C426.602 494.95 426.132 495.227 425.629 495.299L425.661 495.18C425.071 495.246 424.903 494.217 425.426 493.936C425.949 493.656 426.622 494.027 426.91 494.546ZM412.436 493.972L412.69 493.919C413.014 495.098 410.743 495.693 410.449 494.506C410.777 493.796 411.796 493.522 412.436 493.972ZM419.716 492.913C420.579 493.77 418.941 495.419 418.078 494.561C417.214 493.704 418.852 492.055 419.716 492.913ZM295.258 493.297C295.662 494.355 293.642 495.127 293.238 494.069C292.834 493.012 294.853 492.24 295.258 493.297ZM443.993 461.435C442.8 462.147 443.911 463.946 445.026 464.776C446.585 465.938 448.144 467.1 449.704 468.261C450.678 468.987 449.442 470.666 448.241 470.487C447.039 470.309 446.23 469.217 445.403 468.326C444.577 467.435 443.295 466.631 442.214 467.187C440.731 468.451 442.173 470.913 443.876 471.861C445.579 472.809 447.78 473.528 448.293 475.409C446.907 476.535 444.79 475.893 443.363 474.819C442.281 474.004 440.417 473.135 439.918 474.394C439.615 475.16 440.315 475.941 440.999 476.399C443.347 477.969 446.768 479.248 446.711 482.072C443.82 481.359 441.1 479.965 438.833 478.035C437.798 478.967 438.394 480.754 439.432 481.682C440.47 482.61 441.854 483.141 442.729 484.224C443.604 485.307 443.531 487.346 442.181 487.688C440.784 485.435 438.416 483.808 435.813 483.312C436.745 486.203 438.592 488.791 441.023 490.613C441.24 490.776 441.484 490.94 441.755 490.933C442.078 490.925 442.34 490.682 442.563 490.449C448.429 484.346 450.531 475.651 452.403 467.395C452.681 466.168 451.373 465.221 450.254 464.647L443.993 461.435ZM481.649 477.818C493.335 481.933 505.046 485.978 516.78 489.954C517.936 490.345 519.791 490.251 519.711 489.033C508.309 484.772 496.741 480.958 485.041 477.602C483.899 477.274 482.514 477.003 481.649 477.818ZM386.373 488.225C386.161 489.189 384.902 489.748 384.045 489.258L384.225 489.074C383.96 487.991 385.827 487.253 386.373 488.225ZM413.168 487.024C413.91 487.58 413.747 488.943 412.895 489.308C412.043 489.673 410.944 488.85 411.054 487.929C411.164 487.009 412.426 486.469 413.168 487.024ZM330.329 488.139C330.267 488.964 329.152 489.482 328.475 489.007C327.797 488.532 327.894 487.32 328.633 486.948L328.625 487.034C329.35 486.635 330.392 487.314 330.329 488.139ZM289.44 488.327C288.844 488.942 287.912 489.385 287.136 489.023C286.36 488.66 286.317 487.232 287.162 487.091L287.134 487.06C288.134 486.813 289.54 487.302 289.44 488.327ZM392.6 488.181C392.546 488.919 391.558 489.396 390.947 488.978C390.407 488.568 390.533 487.57 391.159 487.309L391.08 487.153C391.745 486.828 392.654 487.443 392.6 488.181ZM349.972 486.96C350.654 488.205 348.654 489.756 347.618 488.785C347.06 487.72 348.721 486.756 349.883 487.065L349.972 486.96ZM261.344 488.304C261.167 488.881 260.38 489.167 259.874 488.839L259.908 488.849C259.74 488.012 261.326 487.45 261.344 488.304ZM426.855 487.829C426.312 488.609 425.118 488.837 424.325 488.314L423.923 488.304C424.024 486.947 426.331 486.573 426.855 487.829ZM267.423 486.924C268.115 486.979 268.711 487.867 268.249 488.386L268.176 488.3C267.357 488.855 266.1 488.593 265.571 487.756C266.111 487.319 266.731 486.868 267.423 486.924ZM364.115 487.806C363.569 488.6 362.361 488.84 361.552 488.315L361.519 488.304C361.545 487.079 363.637 486.677 364.115 487.806ZM342.867 487.785C342.502 488.373 341.752 488.694 341.075 488.552L341.105 488.499C340.442 488.392 340.525 487.25 341.157 487.023C341.788 486.797 342.478 487.238 342.867 487.785ZM399.83 487.812C399.501 488.522 398.482 488.796 397.842 488.346L397.589 488.399C397.264 487.22 399.535 486.625 399.83 487.812ZM302.378 487.761C301.799 488.868 299.853 488.758 299.402 487.593L299.547 487.512C300.29 486.712 301.786 486.843 302.378 487.761ZM307.909 486.98C308.219 487.505 307.938 488.282 307.363 488.487C306.806 488.074 307.192 486.985 307.885 487.015L307.909 486.98ZM274.966 487.228L275.22 487.176C275.544 488.355 273.273 488.949 272.978 487.762C273.307 487.052 274.326 486.778 274.966 487.228ZM253.873 486.927L253.903 487.017C254.245 487.37 254.166 488.042 253.737 488.281C253.308 488.519 252.674 488.196 252.643 487.706C253.053 487.446 253.463 487.186 253.873 486.927ZM356.9 486.006C357.807 486.144 358.07 487.784 357.157 487.877L357.084 488.265L354.794 487.485C355.215 486.67 355.993 485.868 356.9 486.006ZM337.439 487.825L337.195 487.92L335.372 488.088C335.105 487.729 335.03 487.234 335.178 486.812C335.9 485.978 337.581 486.731 337.439 487.825ZM316.035 487.85L315.93 487.889L314.622 488.087C314.361 487.717 314.28 487.225 314.41 486.791C315.004 486.033 316.488 487.001 316.035 487.85ZM418.984 486.284L420.764 487.134C420.376 487.699 419.73 488.21 419.064 488.049C418.398 487.888 418.208 486.714 418.88 486.578L418.984 486.284ZM322.4 485.975C322.901 486.608 322.604 487.696 321.85 487.986L321.88 488.043L321.749 487.935C321.409 487.628 321.177 487.203 321.107 486.75C321.417 486.339 321.891 486.054 322.4 485.975ZM296.098 487.175L296.137 487.252L296.085 487.355C295.592 488.188 294.096 488.175 293.666 487.281C294.084 486.372 295.594 486.341 296.098 487.175ZM404.977 485.765L406.757 486.615C406.37 487.18 405.724 487.692 405.058 487.53C404.392 487.369 404.202 486.195 404.874 486.059L404.977 485.765ZM281.896 487.327L281.674 487.25C281.092 487.775 280.01 487.511 279.735 486.778C279.999 485.621 282.217 486.185 281.896 487.327ZM493.729 417.412L483.341 470.367C483.124 471.471 482.923 472.681 483.463 473.667C484.056 474.75 485.344 475.212 486.521 475.585L518.047 485.583C509.941 462.859 501.835 440.136 493.729 417.412ZM308.81 482.24L308.919 482.332C308.601 482.807 307.941 483.018 307.406 482.818C306.73 482.104 306.958 480.671 307.909 480.425C308.861 480.179 309.668 481.76 308.81 482.24ZM281.908 482.776L281.825 482.716C280.955 483.416 279.677 481.676 280.586 481.029C281.496 480.381 282.758 482.052 281.908 482.776ZM350.575 481.537C350.261 482.046 349.908 482.589 349.349 482.799C348.789 483.009 348.001 482.654 348.029 482.057L348.045 482.091C348.029 480.885 350.086 480.435 350.575 481.537ZM362.413 480.565L364.703 481.346C364.281 482.161 363.503 482.962 362.596 482.824C361.689 482.686 361.426 481.047 362.339 480.953L362.413 480.565ZM321.877 480.863C322.647 481.117 322.667 482.412 321.962 482.746L321.883 482.776L321.798 482.744C321.093 482.412 321.109 481.12 321.877 480.863ZM406.44 480.799C406.69 481.169 406.778 481.643 406.678 482.078L406.861 482.139C406.486 483.177 404.524 482.664 404.706 481.575C405.017 480.966 405.778 480.626 406.44 480.799ZM253.684 481.099L253.639 481.047C253.752 481.483 253.681 481.964 253.445 482.348C252.738 482.597 251.851 481.893 252.038 481.167C252.225 480.44 253.505 480.371 253.684 481.099ZM377.379 480.314C378.095 480.678 378.382 481.692 377.963 482.377L377.897 482.313C377.466 482.441 376.98 482.361 376.612 482.103C376.455 481.423 376.76 480.637 377.379 480.314ZM303.45 480.015L303.191 480.113C303.782 480.895 303.068 482.226 302.088 482.203C301.107 482.18 300.442 480.884 300.962 480.053C301.481 479.221 302.886 479.213 303.45 480.015ZM316.871 480.455C317.224 481.082 316.859 481.991 316.172 482.201C315.392 481.931 314.876 481.052 315.019 480.24L315.015 480.146C315.552 479.667 316.519 479.828 316.871 480.455ZM294.64 482.102C293.556 482.636 292.536 480.566 293.62 480.032C294.704 479.498 295.724 481.568 294.64 482.102ZM418.719 479.855C419.544 479.918 420.063 481.033 419.587 481.71C419.112 482.388 417.901 482.291 417.529 481.552L417.615 481.56C417.215 480.835 417.894 479.793 418.719 479.855ZM427.208 479.258C427.846 479.737 428.033 480.721 427.616 481.401C427.198 482.081 426.235 482.359 425.519 482.006L425.518 481.86C425.106 480.734 426.012 479.339 427.208 479.258ZM336.136 480.529C336.681 481.62 334.596 482.66 334.051 481.568C333.507 480.477 335.592 479.437 336.136 480.529ZM287.605 479.806C288.338 480.11 288.645 481.144 288.196 481.798C287.542 482.016 286.699 481.742 286.469 481.092C286.24 480.442 286.957 479.624 287.586 479.905L287.605 479.806ZM330.318 481.012C330.12 481.696 329.229 482.073 328.601 481.739C327.972 481.406 327.786 480.456 328.241 479.91L328.371 480.031C329.056 479.375 330.438 480.071 330.318 481.012ZM412.635 481.739L412.551 481.678C411.681 482.378 410.403 480.639 411.313 479.991C412.222 479.343 413.485 481.015 412.635 481.739ZM260.862 480.754L260.566 480.776C260.63 481.461 259.786 482.043 259.168 481.741C258.628 481.318 258.695 480.344 259.288 479.999C259.88 479.654 260.76 480.076 260.862 480.754ZM268.2 479.475L268.188 479.488C268.19 480.182 268.192 480.876 268.195 481.57C267.419 482.154 266.09 481.488 266.092 480.518C266.095 479.547 267.427 478.888 268.2 479.475ZM356.745 480.558C356.984 481.758 354.691 482.214 354.452 481.013C354.214 479.813 356.506 479.357 356.745 480.558ZM342.208 479.54L343.988 480.39C343.6 480.955 342.954 481.467 342.288 481.305C341.622 481.144 341.433 479.97 342.104 479.834L342.208 479.54ZM370.818 480.506C370.586 480.949 370.109 481.254 369.61 481.279C369.123 480.9 368.621 480.145 369.109 479.768L369.041 479.715C369.56 478.964 371.028 479.617 370.818 480.506ZM245.601 479.312C246.049 479.53 246.352 480.016 246.352 480.513C246.132 481.086 245.365 481.369 244.826 481.075L244.814 481.088C244.061 480.571 244.712 479.102 245.601 479.312ZM275.97 479.991C275.358 480.908 273.877 481.067 273.084 480.301L273.041 480.278C273.074 479.008 275.144 479.026 275.97 479.991ZM274.154 474.04L274.122 474.12C275.244 474.546 274.835 476.633 273.635 476.605C273.218 476.312 272.931 475.841 272.86 475.336L274.154 474.04ZM385.444 474.268L385.457 474.254C386.209 474.772 385.558 476.241 384.67 476.031C384.222 475.813 383.918 475.327 383.919 474.83C384.138 474.257 384.906 473.974 385.444 474.268ZM260.655 474.088C261.228 474.308 261.51 475.076 261.216 475.614L261.23 475.627C260.712 476.379 259.244 475.728 259.454 474.839C259.671 474.392 260.157 474.088 260.655 474.088ZM413.181 473.488C413.421 473.882 413.513 474.363 413.437 474.818C412.832 475.077 412.228 475.337 411.624 475.596L411.506 475.757L410.302 474.847C411.035 474.042 412.094 473.542 413.181 473.488ZM245.592 473.616C246.497 473.842 246.548 475.413 245.658 475.696L245.652 475.62C244.723 475.833 244.793 474.136 245.592 473.616ZM239.922 473.04C240.473 473.841 240.207 475.082 239.376 475.587L239.389 475.648C238.607 475.623 237.953 474.796 238.11 474.028C238.267 473.261 239.192 472.756 239.922 473.04ZM294.876 473.546C295.461 474.21 295.042 475.453 294.175 475.627C293.307 475.802 292.44 474.819 292.723 473.98C293.005 473.141 294.29 472.882 294.876 473.546ZM330.409 474.809C330.055 475.404 329.301 475.73 328.625 475.581L328.632 475.589C328.209 475.312 327.931 474.827 327.904 474.322C328.347 473.208 330.417 473.611 330.409 474.809ZM370.065 473.51C370.701 473.837 371.058 474.628 370.882 475.322C370.461 475.896 369.344 475.527 369.347 474.815L369.186 474.711L370.065 473.51ZM288.179 473.483C288.868 473.924 288.788 475.147 288.047 475.495C287.306 475.843 286.314 475.125 286.414 474.312C286.732 473.702 287.499 473.367 288.162 473.549L288.179 473.483ZM321.866 473.036C322.972 473.504 322.573 475.557 321.372 475.576C320.881 475.197 320.373 474.435 320.867 474.059L320.841 474.041C321.182 473.706 321.524 473.371 321.866 473.036ZM364.354 473.062C365.109 473.774 364.733 475.351 363.7 475.449C362.667 475.548 362.19 473.695 363.192 473.427L363.115 473.262C363.462 472.999 363.942 472.922 364.354 473.062ZM419.195 473.279C419.914 473.666 419.949 474.879 419.248 475.296C418.547 475.713 417.49 475.086 417.532 474.271L417.45 474.329C417.452 473.513 418.477 472.892 419.195 473.279ZM349.889 473.048C350.312 473.317 350.601 473.79 350.647 474.29C350.307 474.838 349.755 475.249 349.133 475.418L349.109 475.344C348.209 474.729 348.8 472.988 349.889 473.048ZM341.821 473.046C342.611 473.079 343.119 474.136 342.691 474.801C342.264 475.465 341.153 475.483 340.662 474.864L340.954 474.715C340.45 474.106 341.031 473.014 341.821 473.046ZM426.116 475.038C425.228 475.762 423.846 474.066 424.733 473.342C425.621 472.618 427.004 474.314 426.116 475.038ZM301.615 475.038C300.727 475.762 299.344 474.066 300.232 473.342C301.12 472.618 302.503 474.314 301.615 475.038ZM336.649 474.815C335.92 475.125 335.1 475.221 334.319 475.086C333.817 474.449 334.117 473.359 334.874 473.069L334.861 473.05C335.828 472.676 336.932 473.817 336.649 474.815ZM393.749 473.25L393.711 473.287C394.33 473.464 394.285 474.462 393.76 474.835C393.234 475.207 392.526 475.138 391.888 475.054C391.137 474.047 392.766 472.467 393.749 473.25ZM282.702 473.772C282.26 474.387 281.622 474.858 280.905 475.1L280.902 475.067C280.254 475.275 279.789 474.449 279.615 473.791C280.279 472.77 282.026 472.759 282.702 473.772ZM256.113 473.794C255.74 474.736 254.573 475.277 253.613 474.953L253.389 474.969C253.053 474.251 253.418 473.291 254.145 472.978C254.873 472.664 255.821 473.058 256.113 473.794ZM269.597 473.889C269.804 475.128 267.439 475.524 267.232 474.286C267.024 473.048 269.389 472.651 269.597 473.889ZM380.626 473.761C380.304 474.872 378.732 475.377 377.824 474.66L377.691 474.597C377.546 473.163 379.995 472.466 380.626 473.761ZM307.626 472.703C308.391 472.747 308.974 473.67 308.652 474.365C308.33 475.061 307.201 475.188 306.76 474.56C306.319 473.933 306.873 472.889 307.639 472.935L307.626 472.703ZM432.858 473.051C433.349 473.5 433.29 474.405 432.744 474.786C432.199 475.166 431.329 474.909 431.078 474.294L431.04 474.303C431.055 473.443 432.05 472.759 432.858 473.051ZM315.58 472.59C316.121 473 315.994 473.997 315.368 474.259L315.447 474.415C314.782 474.74 313.873 474.125 313.927 473.387C313.981 472.649 314.97 472.172 315.58 472.59ZM357.863 473.239C357.403 474.232 355.733 474.29 355.206 473.33L355.395 473.296C355.803 472.348 357.411 472.31 357.863 473.239ZM281.407 466.807C282.002 467.161 282.328 467.915 282.178 468.591L282.184 468.585L282.098 468.707C281.813 469.06 281.374 469.288 280.92 469.312C279.806 468.869 280.209 466.8 281.407 466.807ZM406.227 466.946L406.311 466.931C406.862 467.732 406.339 469.024 405.386 469.216C404.782 469.002 404.432 468.253 404.654 467.653C404.877 467.053 405.631 466.714 406.227 466.946ZM309.443 466.865C310.371 467.226 309.894 469.102 309.006 468.652L308.823 469.066C308.248 468.787 307.674 468.508 307.1 468.23C307.532 467.333 308.515 466.505 309.443 466.865ZM329.847 467.542C329.437 468.369 328.517 468.915 327.594 468.88C327.144 468.347 327.265 467.434 327.838 467.037C328.463 466.543 329.53 466.811 329.847 467.542ZM245.884 467.903C245.702 468.435 245.136 468.747 244.583 468.846C244.173 468.537 243.89 468.064 243.813 467.556C244.12 467.143 244.596 466.86 245.105 466.788L245.088 466.739C245.645 466.665 246.066 467.371 245.884 467.903ZM370.375 467.032C370.55 467.711 370.208 468.489 369.589 468.82L369.601 468.795C368.887 469.023 368.163 468.102 368.466 467.417C368.769 466.732 369.789 466.564 370.375 467.032ZM288.051 466.557C288.795 466.981 288.822 468.236 288.1 468.697L288.035 468.682C287.296 469.115 286.196 468.473 286.202 467.617C286.208 466.76 287.306 466.133 288.051 466.557ZM260.129 466.295C260.703 466.52 260.988 467.285 260.702 467.831L260.666 467.815C260.325 468.149 259.984 468.483 259.643 468.816C258.536 468.361 258.931 466.306 260.129 466.295ZM362.854 466.288L362.84 466.265C363.407 467.041 363.179 468.275 362.373 468.798C361.29 468.376 361.629 466.418 362.737 466.295L362.854 466.288ZM434.762 468.06L434.638 468.034C434.042 469.247 431.831 468.927 431.602 467.595C432.264 466.384 434.476 466.709 434.762 468.06ZM350.068 467.073C350.445 467.646 350.095 468.546 349.43 468.714C348.765 468.882 348.029 468.256 348.089 467.573L348.158 467.602C348.386 466.849 349.485 466.545 350.068 467.073ZM238.325 466.32C239.003 467.062 238.583 468.476 237.61 468.728L237.587 468.599C236.681 468.009 237.245 466.267 238.325 466.32ZM275.198 466.785L275.426 466.783C275.374 467.745 274.559 468.61 273.601 468.718C272.871 468.393 272.618 467.317 273.127 466.7C273.636 466.084 274.741 466.129 275.198 466.785ZM321.877 466.793L321.871 466.786L321.992 466.874C322.346 467.159 322.574 467.598 322.598 468.052C322.155 469.166 320.085 468.763 320.093 467.565C320.447 466.97 321.201 466.644 321.877 466.793ZM398.707 466.129C399.594 466.23 400.094 467.451 399.571 468.175C399.047 468.899 397.791 468.854 397.278 468.123L397.551 467.934C397.063 467.186 397.819 466.028 398.707 466.129ZM343.112 467.595C343.265 468.743 341.074 469.036 340.921 467.888C340.767 466.741 342.959 466.448 343.112 467.595ZM384.359 466.303C385.149 466.335 385.657 467.392 385.229 468.057C384.801 468.721 383.691 468.74 383.2 468.12L383.492 467.972C382.988 467.362 383.569 466.27 384.359 466.303ZM294.383 466.261C294.794 466.571 295.078 467.046 295.157 467.555C294.849 467.967 294.375 468.25 293.866 468.328C293.455 468.019 293.172 467.545 293.095 467.037C293.402 466.624 293.878 466.341 294.388 466.269L294.383 466.261ZM378.484 466.651L378.453 466.75C378.858 467.408 378.198 468.409 377.434 468.296C376.668 467.704 377.625 466.206 378.484 466.651ZM231.892 466.496L231.882 466.51C232.345 466.861 232.551 467.517 232.37 468.069C231.649 468.685 230.309 467.994 230.391 467.05C230.586 466.471 231.368 466.182 231.892 466.496ZM267.409 465.773L267.368 465.831C268.494 466.218 268.105 468.314 266.915 468.271C265.797 467.832 266.209 465.753 267.409 465.773ZM253.689 466.477C254.447 466.982 253.794 468.459 252.91 468.237C252.286 467.676 252.843 466.408 253.678 466.488L253.689 466.477ZM336.618 467.009C336.275 467.779 335.417 468.287 334.577 468.217L334.599 468.077C333.872 467.578 333.946 466.288 334.726 465.875C335.506 465.463 336.614 466.127 336.618 467.009ZM356.862 467.555L356.804 467.514C356.417 468.64 354.321 468.251 354.364 467.061C354.803 465.943 356.882 466.354 356.862 467.555ZM392.22 466.016C392.938 466.403 392.974 467.616 392.273 468.033C391.572 468.451 390.514 467.823 390.557 467.008L390.475 467.066C390.477 466.25 391.502 465.63 392.22 466.016ZM315.654 465.74L315.647 465.76C316.239 466.141 316.566 466.894 316.441 467.587C315.772 468.046 314.72 467.762 314.373 467.029C314.8 466.599 315.227 466.17 315.654 465.74ZM427.605 466.965C427.166 467.881 425.553 467.848 425.219 466.889L424.751 467.171C424.409 466.214 425.119 465.004 426.131 464.923C427.143 464.843 428.044 466.049 427.605 466.965ZM302.023 464.921L302.138 464.931C303.056 465.065 303.563 466.342 302.988 467.07C302.413 467.798 301.054 467.599 300.711 466.737C300.397 465.947 301.086 464.976 301.91 464.922L302.023 464.921ZM446.899 446.459C446.554 447.051 446.209 447.642 445.864 448.233L454.062 452.399C454.79 452.768 455.648 453.444 455.355 454.206C455.024 455.069 453.745 454.817 452.916 454.409C450.737 453.337 448.559 452.265 446.381 451.193C445.919 451.619 445.594 452.191 445.464 452.806C448.69 454.363 451.727 456.309 454.49 458.588C453.808 459.751 452.053 459.68 450.868 459.036C449.684 458.393 448.718 457.347 447.441 456.915C446.165 456.483 444.36 457.113 444.337 458.46C447.755 460.016 450.927 462.11 453.702 464.64C455.686 462.816 457.454 460.622 458.139 458.017C458.823 455.411 458.214 452.341 456.126 450.639C453.478 448.483 449.236 448.949 446.899 446.459ZM328.407 460.276C329.28 460.382 329.909 461.443 329.533 462.239C329.157 463.034 327.867 463.186 327.357 462.469C326.846 461.753 327.487 460.548 328.364 460.617L328.407 460.276ZM342.865 460.801C343.15 461.644 342.426 462.66 341.537 462.667C341.443 462.227 341.35 461.788 341.257 461.348L341.325 461.352C341.106 460.661 342.286 460.365 342.865 460.801ZM384.886 460.264L384.89 460.293C385.958 460.039 386.109 461.991 385.18 462.576C384.339 462.187 384.169 460.852 384.886 460.264ZM398.945 460.261L398.96 460.287C398.993 461.215 398.441 462.139 397.608 462.55C396.932 462.242 396.636 461.306 397.01 460.665C397.385 460.024 398.346 459.824 398.945 460.261ZM274.258 459.991C274.619 460.96 274.063 462.171 273.093 462.529C272.476 462.242 272.167 461.43 272.436 460.806C272.706 460.181 273.508 459.848 274.14 460.099L274.258 459.991ZM260.641 462.506C259.931 462.177 259.657 461.158 260.107 460.518L260.054 460.265C261.233 459.94 261.828 462.211 260.641 462.506ZM245.929 461.311L245.895 461.316C245.96 461.818 245.6 462.339 245.108 462.457C244.508 462.429 244.114 461.617 244.464 461.128C244.814 460.639 245.71 460.751 245.929 461.311ZM302.413 462.342C301.329 462.876 300.309 460.806 301.393 460.272C302.476 459.738 303.497 461.808 302.413 462.342ZM369.604 460.644C370.308 460.849 370.479 461.975 369.868 462.381L369.859 462.312C369.039 462.745 368.731 460.957 369.604 460.644ZM232.13 459.504C232.539 459.824 232.823 460.3 232.911 460.812C232.479 461.244 232.047 461.676 231.616 462.109L231.62 462.098C230.972 462.306 230.507 461.479 230.333 460.82C230.768 460.202 231.409 459.732 232.13 459.504ZM356.909 459.638L357.073 459.662C357.632 460.648 356.734 462.092 355.603 462.026C355.166 461.808 354.876 461.325 354.888 460.837C355.212 460.063 356.074 459.551 356.909 459.638ZM315.702 460.115C315.96 460.952 315.224 461.932 314.349 461.918L314.244 461.934C313.496 461.111 314.736 459.564 315.702 460.115ZM413.88 460.317L412.661 461.59L412.58 461.425C411.605 462.062 410.367 460.366 411.139 459.494C411.911 458.622 413.565 459.195 413.88 460.317ZM404.866 461.54C403.834 461.81 403.343 459.811 404.388 459.595L404.379 459.523C405.426 459.315 405.898 461.271 404.866 461.54ZM289.332 460.299C288.946 461.241 287.782 461.783 286.813 461.471L286.911 461.275C286.057 460.909 286.253 459.437 287.122 459.109C287.992 458.782 289.002 459.43 289.332 460.299ZM238.854 459.059C239.972 459.498 239.561 461.577 238.36 461.557L238.401 461.499C237.275 461.112 237.665 459.016 238.854 459.059ZM281.072 460.791C280.855 461.238 280.369 461.542 279.871 461.542C279.298 461.322 279.016 460.554 279.31 460.016L279.296 460.003C279.813 459.251 281.282 459.902 281.072 460.791ZM322.914 459.985C323.282 460.494 322.998 461.332 322.396 461.513C321.833 461.213 321.414 460.655 321.286 460.03L321.301 459.998C321.66 459.483 322.545 459.475 322.914 459.985ZM335.995 460.326C336.234 461.527 333.941 461.983 333.702 460.782C333.463 459.581 335.756 459.126 335.995 460.326ZM309.538 460.326C309.777 461.527 307.484 461.983 307.245 460.782C307.007 459.581 309.3 459.126 309.538 460.326ZM363.348 459.117C364.032 459.315 364.409 460.206 364.075 460.834C363.742 461.463 362.792 461.649 362.246 461.194L362.367 461.064C361.711 460.379 362.407 458.997 363.348 459.117ZM434.695 460.301C434.389 460.71 433.915 460.989 433.409 461.061L433.459 461.107C432.927 461.853 431.465 461.196 431.67 460.304C432.3 459.273 434.064 459.271 434.695 460.301ZM439.097 460.164C439.84 460.187 439.447 461.728 438.879 461.248L438.861 461.348C438.351 461.123 438.54 460.177 439.097 460.164ZM295.48 458.422C295.981 459.51 295.064 460.969 293.866 460.99L293.874 461.065C293.455 460.78 293.175 460.3 293.133 459.795C293.585 458.956 294.526 458.404 295.48 458.422ZM379.204 460.122C379.022 460.654 378.456 460.966 377.903 461.065C377.493 460.756 377.21 460.282 377.133 459.775C377.44 459.362 377.916 459.079 378.425 459.007L378.408 458.958C378.965 458.884 379.386 459.59 379.204 460.122ZM419.914 458.447C420.364 458.98 420.245 459.891 419.675 460.291L419.646 460.263C419.217 460.525 418.787 460.787 418.358 461.049C417.947 460.767 417.674 460.293 417.637 459.796C418.064 458.97 418.985 458.425 419.914 458.447ZM393.002 460.57L392.95 460.542C392.623 461.218 391.391 461.04 391.268 460.299C391.441 459.418 393.107 459.679 393.002 460.57ZM254.407 459.045C254.897 459.494 254.838 460.399 254.293 460.779C253.747 461.159 252.877 460.903 252.626 460.287L252.588 460.296C252.604 459.437 253.599 458.752 254.407 459.045ZM268.52 459.492C269.084 460.358 267.429 461.435 266.865 460.569C266.301 459.703 267.956 458.626 268.52 459.492ZM350.523 459.705C350.32 461.14 347.754 461.218 347.465 459.798L347.595 459.808C348.167 458.785 349.882 458.725 350.523 459.705ZM406.207 454.038C407.07 454.895 405.432 456.544 404.569 455.687C403.706 454.829 405.344 453.18 406.207 454.038ZM420.154 455.097C419.8 455.692 419.045 456.018 418.37 455.868L418.377 455.877C417.954 455.599 417.675 455.114 417.649 454.609C418.091 453.495 420.161 453.898 420.154 455.097ZM282.165 455.097C281.811 455.692 281.057 456.018 280.381 455.868L280.388 455.877C279.965 455.599 279.686 455.114 279.66 454.609C280.103 453.495 282.172 453.898 282.165 455.097ZM433.698 453.507L433.816 453.482C434.19 454.467 433.447 455.704 432.403 455.837C431.713 455.545 431.391 454.607 431.755 453.952C432.119 453.297 433.085 453.076 433.698 453.507ZM254.199 454.037L254.212 454.023C254.964 454.54 254.313 456.009 253.425 455.799C252.977 455.582 252.673 455.096 252.674 454.598C252.893 454.025 253.661 453.743 254.199 454.037ZM308.359 453.345C309.303 453.758 309.345 455.354 308.424 455.815C307.884 455.5 307.32 455.082 307.206 454.467C307.091 453.852 307.774 453.143 308.308 453.468L308.359 453.345ZM295.649 455.105L295.591 455.064C295.204 456.19 293.108 455.801 293.151 454.611C293.59 453.493 295.669 453.904 295.649 455.105ZM378.968 454.311C379.532 455.177 377.878 456.254 377.314 455.388C376.75 454.522 378.404 453.445 378.968 454.311ZM349.417 455.476C348.353 455.896 347.551 453.864 348.615 453.444C349.679 453.024 350.481 455.056 349.417 455.476ZM289.861 453.531C289.678 454.378 289.022 455.107 288.199 455.379C287.477 454.989 287.175 453.976 287.567 453.254L287.633 453.296C288.143 452.534 289.522 452.679 289.861 453.531ZM370.642 452.8C371.058 453.093 371.346 453.564 371.417 454.069L370.123 455.365L370.155 455.285C369.033 454.859 369.442 452.772 370.642 452.8ZM329.673 452.76C330.348 453.312 330.653 454.277 330.417 455.116C329.767 455.627 328.648 455.287 328.393 454.5C328.138 453.714 328.844 452.782 329.67 452.814L329.673 452.76ZM413.289 452.601L414.417 453.472C414.212 454.327 413.554 455.06 412.726 455.356C411.586 454.923 411.95 452.814 413.17 452.789L413.289 452.601ZM385.145 452.831C386.259 453.273 385.856 455.343 384.657 455.335C384.062 454.982 383.736 454.227 383.886 453.551L383.877 453.558C384.155 453.136 384.64 452.857 385.145 452.831ZM260.665 452.804L260.625 452.862C261.75 453.249 261.361 455.345 260.171 455.302C259.053 454.863 259.465 452.784 260.665 452.804ZM268.051 453.668C268.555 454.375 267.704 455.528 266.88 455.255C266.057 454.981 266.065 453.548 266.891 453.283L266.928 453.345C267.296 453.097 267.871 453.263 268.051 453.668ZM400.502 452.999L400.516 453.025C400.549 453.953 399.997 454.876 399.164 455.287C398.489 454.979 398.192 454.044 398.567 453.403C398.941 452.762 399.902 452.561 400.502 452.999ZM275.805 453.241C276.519 453.979 275.609 455.473 274.625 455.176C273.641 454.88 273.708 453.132 274.712 452.911L274.735 452.837C275.088 452.536 275.738 452.782 275.805 453.241ZM392.619 453.57C393.154 454.532 391.567 455.72 390.795 454.935L390.815 454.884C390.352 453.936 391.86 452.838 392.619 453.57ZM357.728 454.093C357.554 454.965 356.306 455.388 355.638 454.801C354.969 454.214 355.227 452.923 356.069 452.637C356.912 452.352 357.902 453.221 357.728 454.093ZM246.135 452.816C246.566 453.064 246.849 453.55 246.851 454.047C246.602 454.744 245.782 455.181 245.064 454.998L245.101 454.849C244.498 454.104 245.178 452.768 246.135 452.816ZM343.946 453.023L343.926 453.031C344.279 453.383 344.631 453.736 344.984 454.089C344.248 454.829 343.09 455.116 342.094 454.806C341.341 453.807 342.975 452.233 343.946 453.023ZM322.129 454.589C321.763 455.024 320.976 454.982 320.658 454.511C320.34 454.04 320.595 453.295 321.135 453.117L321.11 453.063C321.79 452.746 322.216 453.844 322.129 454.589ZM427.153 452.79C428.125 453.146 427.668 455.06 426.686 454.729L426.663 454.822C426.225 454.94 425.738 454.864 425.358 454.618C425.165 453.6 426.18 452.434 427.153 452.79ZM303.395 454.065L303.454 454.056C302.922 454.866 301.704 455.122 300.891 454.595C300.657 453.857 301.123 452.951 301.879 452.778C302.634 452.605 303.477 453.295 303.395 454.065ZM440.402 453.554C439.974 453.985 439.546 454.416 439.117 454.846C438.705 454.553 438.425 454.07 438.381 453.562C438.708 452.768 440.069 452.763 440.402 453.554ZM362.86 452.777C363.272 453.086 363.555 453.56 363.633 454.068C363.324 454.479 362.85 454.763 362.342 454.84C361.929 454.533 361.646 454.056 361.574 453.547L361.566 453.552C361.876 453.14 362.351 452.856 362.86 452.777ZM315.829 454.047C315.611 454.495 315.125 454.798 314.628 454.798C314.055 454.578 313.772 453.811 314.067 453.272L314.053 453.26C314.57 452.507 316.039 453.158 315.829 454.047ZM335.989 451.638C336.757 452.591 336.428 454.213 335.349 454.792C334.737 454.38 334.276 453.749 334.07 453.04C334.52 452.429 335.159 451.958 335.876 451.71L335.989 451.638ZM233.253 453.189L233.385 453.252C233.532 454.686 231.082 455.384 230.45 454.088C230.772 452.977 232.344 452.472 233.253 453.189ZM238.904 453.273C239.468 454.139 237.814 455.216 237.25 454.35C236.686 453.484 238.34 452.407 238.904 453.273ZM426.662 448.712L426.645 448.609C425.574 448.866 425.19 446.763 426.278 446.591C427.367 446.42 427.734 448.458 426.662 448.712ZM386.067 448.425L385.962 448.463C385.526 448.53 385.09 448.596 384.654 448.662C384.393 448.292 384.312 447.8 384.442 447.366C385.036 446.608 386.521 447.575 386.067 448.425ZM362.35 445.976C363.132 446.001 363.786 446.828 363.629 447.595C363.472 448.363 362.547 448.867 361.817 448.584C361.266 447.783 361.532 446.542 362.363 446.037L362.35 445.976ZM238.778 448.002L238.888 448.094C238.569 448.569 237.909 448.781 237.374 448.58C236.699 447.866 236.926 446.433 237.877 446.187C238.829 445.941 239.636 447.522 238.778 448.002ZM260.245 446.859C260.835 447.14 261.424 447.422 262.014 447.704C261.683 448.365 260.884 448.756 260.158 448.612C259.788 448.181 259.77 447.487 260.116 447.036L260.245 446.859ZM302.659 448.538L302.575 448.478C301.705 449.178 300.427 447.439 301.337 446.791C302.246 446.143 303.509 447.814 302.659 448.538ZM254.198 446.155L254.182 446.287L254.18 448.359C253.46 448.978 252.116 448.298 252.188 447.352C252.497 446.572 253.365 446.055 254.198 446.155ZM378.421 446.008L378.423 446.027C378.713 446.765 378.804 447.58 378.684 448.363C377.94 448.965 376.606 448.29 376.65 447.334C377.066 446.708 377.703 446.231 378.421 446.008ZM246.39 446.798C246.57 447.466 246.239 448.236 245.63 448.565C245.057 448.351 244.775 447.58 245.075 447.047L245.174 447.087C245.287 446.581 246.062 446.397 246.39 446.798ZM370.897 446.81C370.919 447.369 370.908 448.009 370.487 448.377C370.066 448.746 369.178 448.367 369.389 447.848L369.31 447.849C369.363 447.064 370.308 446.288 370.897 446.81ZM225.5 447.357C225.739 448.558 223.446 449.014 223.207 447.813C222.968 446.612 225.261 446.157 225.5 447.357ZM330.291 447.289C330.14 448.383 328.418 448.795 327.787 447.889L327.832 447.858C327.769 446.667 329.824 446.191 330.291 447.289ZM391.39 446.049C391.978 446.414 392.299 447.164 392.157 447.841L392.104 447.811C391.997 448.474 390.855 448.391 390.628 447.759C390.402 447.128 390.843 446.438 391.39 446.049ZM295.573 447.157C295.51 447.982 294.395 448.501 293.718 448.026C293.041 447.55 293.137 446.339 293.876 445.967L293.869 446.053C294.593 445.653 295.635 446.332 295.573 447.157ZM398.655 446.03L399.963 447.336C399.441 447.793 398.819 448.247 398.127 448.19C397.435 448.133 396.84 447.253 397.29 446.724L397.36 446.808C397.672 446.397 398.146 446.112 398.655 446.03ZM432.893 445.982C433.754 446.02 434.431 447.003 434.16 447.821C433.197 448.421 431.81 448.21 431.068 447.351C431.516 446.731 432.159 446.254 432.883 446.004L432.893 445.982ZM350.035 447.543L349.935 447.651C349.091 448.241 347.914 448.315 347.003 447.834C347.155 446.424 349.618 446.188 350.035 447.543ZM322.407 446.598C322.678 446.959 322.774 447.445 322.66 447.881C322.099 448.144 321.451 448.217 320.845 448.086L320.86 448.026C320.281 447.976 320.239 447.027 320.717 446.697C321.196 446.366 321.839 446.476 322.407 446.598ZM314.61 446.076C315.325 446.44 315.612 447.455 315.194 448.14L315.128 448.076C314.697 448.203 314.21 448.123 313.843 447.865C313.686 447.185 313.991 446.399 314.61 446.076ZM309.624 446.839L309.783 446.816C309.582 447.938 308.024 448.537 307.123 447.838C306.905 447.175 307.255 446.366 307.901 446.099C308.547 445.833 309.386 446.183 309.624 446.839ZM439.667 446.054C439.934 446.605 440.009 447.246 439.878 447.844C439.511 448.097 439.036 448.186 438.602 448.084L438.586 448.104C437.996 447.335 438.699 446.002 439.667 446.054ZM335.582 447.226C335.474 447.766 334.889 448.103 334.338 448.108C333.885 447.585 334.01 446.671 334.587 446.289L334.595 446.337C335.088 446.092 335.691 446.687 335.582 447.226ZM273.659 445.947C274.387 446.186 275.028 446.683 275.439 447.329C274.772 448.357 273.005 448.353 272.342 447.321L273.635 446.027L273.659 445.947ZM341.592 446.034C342.005 446.341 342.288 446.817 342.359 447.327L342.367 447.322C342.057 447.734 341.583 448.018 341.073 448.096C340.662 447.788 340.378 447.314 340.301 446.805C340.609 446.394 341.083 446.111 341.592 446.034ZM404.866 448.053C403.834 448.322 403.343 446.323 404.388 446.107L404.379 446.035C405.426 445.828 405.898 447.783 404.866 448.053ZM268.103 447.303C267.886 447.751 267.4 448.054 266.902 448.054C266.329 447.835 266.047 447.067 266.341 446.528L266.327 446.516C266.845 445.764 268.313 446.415 268.103 447.303ZM419.945 446.55C420.48 447.633 418.411 448.653 417.877 447.57C417.342 446.487 419.411 445.466 419.945 446.55ZM280.923 446.53C281.487 447.396 279.833 448.473 279.269 447.607C278.705 446.741 280.359 445.663 280.923 446.53ZM289.294 446.812C289.023 447.629 287.895 447.888 287.127 447.501C286.611 446.91 286.923 445.823 287.674 445.595L287.794 445.684C288.403 445.077 289.565 445.995 289.294 446.812ZM413.159 445.582L413.18 445.512C413.591 445.827 413.876 446.303 413.96 446.814C413.418 447.495 412.45 447.802 411.614 447.559C410.94 446.652 412.117 445.146 413.159 445.582ZM356.633 445.525L356.627 445.516C357.049 445.793 357.328 446.278 357.354 446.783C356.912 447.897 354.842 447.494 354.85 446.296C355.203 445.701 355.958 445.375 356.633 445.525ZM232.132 445.525L232.125 445.516C232.548 445.793 232.827 446.278 232.853 446.783C232.41 447.897 230.341 447.494 230.348 446.296C230.702 445.701 231.457 445.375 232.132 445.525ZM447.408 441.944C446.463 442.014 446.857 443.526 447.577 444.142C449.355 445.665 451.572 446.669 453.889 447.001C452.17 444.834 449.928 443.085 447.408 441.944ZM322.383 439.838C323.491 440.294 323.095 442.349 321.897 442.36C321.324 442.135 321.039 441.37 321.325 440.824L321.36 440.84C321.701 440.506 322.042 440.172 322.383 439.838ZM238.992 440.165L240.213 441.063C239.685 441.773 238.693 442.1 237.847 441.843C237.587 441.483 237.491 441.009 237.59 440.576C237.963 440.328 238.438 440.24 238.875 440.339L238.992 440.165ZM362.964 440.111L364.742 440.979C364.269 441.75 363.23 442.118 362.377 441.817C361.801 441.419 362.167 440.306 362.867 440.327L362.964 440.111ZM349.661 440.595L349.516 441.896L349.364 441.845C348.946 441.996 348.45 441.905 348.114 441.616C347.635 440.826 349.059 439.895 349.661 440.595ZM224.878 440.329C225.124 440.703 225.211 441.178 225.114 441.615L225.138 441.624C224.494 442.111 223.424 441.83 223.103 441.089C223.461 440.504 224.207 440.185 224.878 440.329ZM426.667 439.759C426.906 440.157 426.999 440.64 426.924 441.098L425.118 441.857C424.422 441.594 424.246 440.503 424.825 440.035L424.839 439.929L426.667 439.759ZM407.151 441.075C406.713 442.193 404.633 441.782 404.653 440.581L404.711 440.622C405.098 439.496 407.195 439.886 407.151 441.075ZM282.68 441.099L282.622 441.058C282.235 442.184 280.139 441.794 280.182 440.604C280.621 439.487 282.7 439.898 282.68 441.099ZM302.428 440.095C302.635 441.274 300.913 442.22 300.03 441.411L299.893 441.384C299.745 440.161 301.527 439.255 302.428 440.095ZM294.207 439.8C294.873 439.961 295.063 441.135 294.391 441.271L294.287 441.565L292.508 440.715C292.895 440.15 293.541 439.638 294.207 439.8ZM377.877 439.837C378.443 440.254 378.089 441.354 377.386 441.362L377.189 441.515L376.554 440.627C376.864 440.2 377.354 439.908 377.877 439.837ZM336.555 440.413C336.492 441.239 335.377 441.757 334.7 441.282C334.022 440.807 334.119 439.595 334.858 439.223L334.85 439.309C335.575 438.909 336.617 439.588 336.555 440.413ZM253.6 440.097C253.907 440.519 253.682 441.212 253.187 441.374C252.692 441.537 252.1 441.11 252.098 440.589L252.197 440.619C252.304 440.028 253.133 439.72 253.6 440.097ZM419.514 440.83L419.417 440.835C418.898 441.596 417.52 441.449 417.172 440.596C417.514 439.566 419.383 439.752 419.514 440.83ZM260.86 440.074L260.926 440.061L259.638 441.317C258.96 441.14 258.684 440.14 259.176 439.64C259.667 439.14 260.671 439.399 260.86 440.074ZM316.381 440.568C315.992 441.409 314.656 441.579 314.069 440.862L314.097 440.858C313.843 439.789 315.796 439.638 316.381 440.568ZM384.924 439.51L385.125 439.455C385.332 440.198 384.845 441.062 384.102 441.27C383.685 441.025 383.409 440.557 383.398 440.074C383.619 439.501 384.384 439.219 384.924 439.51ZM268.644 439.094L268.765 438.945C269.387 439.336 269.116 440.399 268.466 440.741C267.815 441.082 267.026 440.932 266.309 440.774C265.66 439.547 267.687 438.089 268.644 439.094ZM434.218 440.506C433.191 441.313 431.435 440.821 430.976 439.598L431.133 439.616C432.099 438.801 433.835 439.302 434.218 440.506ZM392.157 438.73C393.112 438.87 393.349 440.552 392.408 440.769L392.428 440.827C391.818 440.945 391.174 440.882 390.598 440.647C390.406 439.702 391.202 438.59 392.157 438.73ZM370.097 440.76L370.105 440.832C369.059 441.04 368.586 439.084 369.618 438.815C370.65 438.545 371.141 440.544 370.097 440.76ZM310.188 440.319L309.935 440.304C309.204 441.295 307.303 440.812 307.134 439.591C307.755 438.271 310.229 438.86 310.188 440.319ZM232.343 440.049C231.954 440.89 230.618 441.06 230.031 440.343L230.059 440.339C229.805 439.271 231.758 439.12 232.343 440.049ZM246.067 438.871C246.608 439.281 246.481 440.278 245.855 440.54L245.934 440.696C245.269 441.021 244.36 440.406 244.414 439.668C244.468 438.93 245.456 438.453 246.067 438.871ZM356.792 439.969L356.832 440.044L356.779 440.148C356.286 440.981 354.79 440.968 354.36 440.074C354.778 439.166 356.288 439.134 356.792 439.969ZM343.867 440.05C343.449 440.958 341.939 440.989 341.435 440.155L341.395 440.078L341.448 439.975C341.941 439.143 343.437 439.155 343.867 440.05ZM400.469 439.587C399.879 440.057 399.173 440.557 398.438 440.386C397.703 440.215 397.437 438.932 398.175 438.777L398.14 438.791C399.019 438.681 400.138 438.765 400.469 439.587ZM330.322 439.762L330.222 439.87C329.378 440.46 328.201 440.533 327.29 440.053C327.443 438.643 329.905 438.407 330.322 439.762ZM276 439.513C275.485 440.224 274.488 440.544 273.655 440.265L273.652 440.315C272.923 440.111 273.233 438.849 273.973 438.687C274.712 438.525 275.419 439.028 276 439.513ZM287.739 438.558L289.519 439.408C289.131 439.974 288.485 440.485 287.819 440.324C287.153 440.162 286.964 438.989 287.635 438.852L287.739 438.558ZM413.474 438.984L413.727 438.931C414.052 440.11 411.781 440.705 411.486 439.518C411.814 438.808 412.834 438.534 413.474 438.984ZM314.619 431.505C315.12 432.139 314.823 433.226 314.069 433.517L314.1 433.575C313.688 433.265 313.404 432.79 313.325 432.281C313.636 431.869 314.11 431.585 314.619 431.505ZM303.395 432.248C303.079 432.788 302.661 433.352 302.046 433.466C301.431 433.581 300.722 432.898 301.048 432.364L300.925 432.312C301.338 431.369 302.933 431.327 303.395 432.248ZM330.289 432.313C330.527 433.514 328.234 433.97 327.996 432.769C327.757 431.569 330.05 431.113 330.289 432.313ZM342.634 431.51C342.97 432.15 342.476 433.056 341.757 433.12C341.037 433.184 340.391 432.379 340.609 431.69L340.8 431.73C341.371 431.477 342.019 431.399 342.634 431.51ZM295.174 431.726C295.401 432.249 295.074 432.935 294.525 433.088C293.977 433.242 293.341 432.826 293.263 432.262L293.146 432.31C293.469 431.575 294.51 431.276 295.174 431.726ZM280.819 431.124C281.518 431.282 281.951 432.154 281.653 432.806C280.845 433.356 279.6 433.091 279.087 432.259L279.342 432.283C279.354 431.567 280.12 430.965 280.819 431.124ZM323.082 432.25C322.856 433.156 321.285 433.206 321.001 432.317L321.077 432.31C320.864 431.381 322.561 431.452 323.082 432.25ZM335.474 431.342L336.648 432.208C336.204 433.394 333.995 432.957 334.035 431.691C334.474 431.605 334.913 431.519 335.352 431.433L335.474 431.342ZM430.694 397.142C430.054 397.651 429.853 398.521 429.692 399.323C427.52 410.146 425.444 420.988 423.367 431.83C423.211 432.645 424.444 433.123 425.133 432.66C425.821 432.197 426.035 431.298 426.195 430.484C428.349 419.537 430.503 408.59 432.656 397.644C432.538 396.834 431.334 396.632 430.694 397.142ZM371.475 377.937C371.08 378.281 370.959 378.836 370.86 379.35C367.676 395.865 364.493 412.381 361.31 428.896C361.162 429.665 361.047 430.561 361.574 431.141C361.934 431.537 362.498 431.663 363.025 431.76C370.714 433.184 378.704 432.963 386.303 431.116C380.311 429.158 374.32 427.2 368.328 425.242C367.171 424.864 365.872 424.355 365.449 423.213C365.202 422.544 365.322 421.803 365.445 421.1C367.91 407.034 370.518 392.993 373.267 378.98C376.054 379.852 377.328 382.991 378.245 385.763C383.139 400.558 388.033 415.353 392.927 430.148C393.124 430.742 393.882 430.893 394.507 430.934C397.996 431.165 401.508 431.063 404.978 430.63C400.043 415.896 395.038 401.185 389.962 386.499C389.607 385.472 389.232 384.411 388.486 383.62C387.642 382.726 386.433 382.292 385.272 381.887L373.849 377.908C373.064 377.634 372.102 377.39 371.475 377.937ZM308.369 431.07C308.88 431.183 309.065 431.967 308.66 432.297L308.667 432.38C308.23 432.449 307.794 432.518 307.357 432.588C306.922 431.944 307.608 430.916 308.369 431.07ZM267.396 431.461C267.836 431.782 267.446 432.645 266.915 432.528L266.864 432.469C266.094 432.66 264.876 432.445 265.07 431.676L267.396 431.461ZM274.708 431.479L274.836 431.555C274.408 432.736 272.437 432.863 271.861 431.745C272.471 430.843 273.942 430.705 274.708 431.479ZM288.35 431.26C288.604 432.275 286.666 432.759 286.413 431.745C286.159 430.73 288.096 430.246 288.35 431.26ZM420.504 393.691C420.016 393.937 419.857 394.544 419.75 395.08C417.421 406.693 415.093 418.307 412.764 429.92C412.666 430.409 412.607 431.009 412.999 431.315C413.232 431.497 413.551 431.507 413.846 431.509C415.653 431.522 417.459 431.535 419.266 431.547C419.659 431.55 420.078 431.546 420.409 431.333C420.87 431.038 421.015 430.443 421.122 429.906C423.305 418.967 425.489 408.028 427.672 397.089C427.78 396.545 427.788 395.81 427.264 395.628C425.479 395.007 423.691 394.391 421.901 393.781C421.447 393.626 420.933 393.474 420.504 393.691ZM392.623 383.656C391.851 383.785 391.894 384.908 392.144 385.649C397.109 400.384 402.074 415.12 407.039 429.855C407.308 430.654 407.826 431.621 408.663 431.52C408.791 430.406 408.428 429.3 408.07 428.238C403.626 415.059 399.183 401.881 394.74 388.702C394.156 386.97 393.565 385.223 392.623 383.656ZM374.108 383.661C373.906 385.355 374.456 387.038 374.999 388.655C379.745 402.797 384.491 416.939 389.238 431.082C390.451 430.108 390.069 428.204 389.574 426.729C385.011 413.135 380.448 399.542 375.886 385.948C375.564 384.989 375.094 383.888 374.108 383.661ZM313.755 401.402C301.052 409.862 285.566 414.065 270.329 413.189C266.101 412.945 262.084 414.816 258.095 416.237C244.047 421.241 228.14 420.812 214.382 415.059C214.614 419.434 215.792 423.756 217.811 427.645L219.502 418.532L222.891 429.134C222.574 425.9 223.712 422.55 225.933 420.178C225.667 422.315 225.406 424.524 226.021 426.588C226.636 428.652 228.371 430.543 230.522 430.632C230.697 428.618 229.3 426.8 229.039 424.795C228.779 422.79 231.147 420.383 232.539 421.849C232.399 424.484 232.26 427.12 232.12 429.755C232.987 430.818 234.898 430.719 235.651 429.573C234.215 427.222 234.385 423.996 236.058 421.808C237.651 423.842 238.432 426.495 238.194 429.068C238.029 430.841 241.259 430.488 241.806 428.793C242.353 427.099 241.579 425.222 241.972 423.486C242.364 421.749 245.343 420.792 245.658 422.544C244.745 425.269 244.761 428.297 245.703 431.012C247.586 428.088 248.576 424.598 248.508 421.121C249.91 420.724 250.771 422.702 250.604 424.149C250.436 425.595 250.002 427.33 251.086 428.301C252.873 429.901 255.286 427.014 255.626 424.64C255.966 422.266 256.711 419.037 259.107 419.146C258.345 422.191 258.373 425.43 259.188 428.462C261.532 425.031 263.116 421.084 263.794 416.984L265.779 426.836C266.115 423.878 266.451 420.92 266.787 417.962C266.843 417.47 266.912 416.947 267.232 416.57C268.148 415.494 270.018 416.735 270.18 418.138C270.342 419.541 269.617 420.89 269.483 422.296C269.349 423.702 270.349 425.466 271.723 425.137L274.886 415.36C275.229 418.144 275.571 420.929 275.913 423.713C275.952 424.027 275.995 424.354 276.168 424.618C277.136 426.095 278.988 423.609 278.792 421.854C278.597 420.099 279.472 417.36 280.997 418.25L282.332 425.812C282.76 422.839 283.188 419.867 283.616 416.895C285.308 418.576 286.136 421.085 285.777 423.443C287.153 424.662 288.875 422.102 288.507 420.3C288.14 418.498 287.245 416.294 288.627 415.08C290.286 415.081 290.536 417.427 290.542 419.086C290.548 420.745 292.197 422.906 293.37 421.732C293.815 421.286 293.822 420.579 293.801 419.949C293.727 417.8 293.653 415.651 293.579 413.502C294.958 415.776 296.337 418.05 297.716 420.324C299.24 417.524 299.776 414.199 299.209 411.062C300.905 412.958 302.2 415.211 302.984 417.632C303.067 414.886 303.15 412.14 303.233 409.394C304.79 411.628 306.347 413.862 307.904 416.096C308.987 413.335 309.138 410.219 308.329 407.366C310.33 408.834 311.745 411.077 312.206 413.515C313.475 409.622 314.004 405.489 313.755 401.402ZM364.664 371.509C356.231 377.935 347.509 383.982 338.532 389.623C335.055 391.808 331.421 393.978 327.362 394.603C323.304 395.228 318.682 393.952 316.47 390.492C318.052 399.183 316.781 408.369 312.899 416.304C323.694 425.225 338.397 429.233 352.226 427.026C354.468 426.669 355.338 423.96 355.749 421.727L363.434 379.984C364.036 376.711 365.01 372.945 368.057 371.608C364.492 391.196 360.927 410.784 357.362 430.373C361.565 411.553 365.768 392.733 369.971 373.913C402.869 384.508 435.768 395.102 468.666 405.696C470.835 406.395 474.434 405.833 473.777 403.651C440.537 392.873 407.283 382.137 374.016 371.442C370.923 370.447 367.248 369.539 364.664 371.509ZM396.042 385.953C400.47 399.166 404.898 412.379 409.325 425.592C409.678 426.645 410.049 427.73 410.794 428.554C412.767 416.797 414.99 405.082 417.461 393.419C417.645 392.55 416.603 391.973 415.756 391.704C409.593 389.75 403.43 387.796 397.267 385.843C396.85 385.71 396.314 385.611 396.042 385.953ZM373.512 391.371C372.815 392.38 372.591 393.632 372.386 394.841C370.934 403.358 369.483 411.875 368.032 420.392C367.947 420.893 367.865 421.425 368.055 421.896C368.354 422.633 369.196 422.962 369.951 423.212C374.803 424.82 379.655 426.429 384.507 428.037C384.833 428.145 385.224 428.244 385.495 428.032C385.836 427.766 385.729 427.233 385.59 426.823L373.512 391.371ZM309.389 424.285C310.058 424.871 309.8 426.163 308.958 426.449C308.115 426.734 307.125 425.865 307.299 424.993C307.473 424.121 308.721 423.698 309.389 424.285ZM303.424 424.508C303.065 425.093 302.317 425.41 301.647 425.261L301.633 425.255C301.166 425.37 300.652 425.281 300.25 425.017C300.526 423.657 302.738 423.303 303.424 424.508ZM315.089 424.203L315.122 424.281C315.701 424.154 316.631 424.463 316.324 424.97C315.96 425.69 314.605 424.848 315.089 424.203ZM242.575 413.285C243.1 413.304 243.458 414.142 242.976 414.352L243.043 414.395C242.653 415.052 241.442 414.848 241.289 414.099C241.631 413.7 242.049 413.266 242.575 413.285ZM236.802 411.784L238.109 413.096C237.462 413.722 236.64 414.166 235.761 414.362L235.77 414.381C235.357 414.077 235.074 413.602 235.004 413.095C235.435 412.474 236.079 412.004 236.802 411.784ZM229.799 413.067C229.429 413.661 228.675 413.989 227.988 413.855L228.016 413.998C227.273 414.012 227.178 412.727 227.845 412.399C228.513 412.072 229.325 412.494 229.799 413.067ZM251.03 413.375L250.818 413.351C250.47 413.816 249.813 414.022 249.263 413.838C248.977 413.515 248.901 413.02 249.078 412.627C249.628 411.853 251.138 412.432 251.03 413.375ZM222.262 411.875C222.733 412.353 222.593 413.274 222.001 413.59L222.057 413.885C221.458 413.934 220.889 413.354 220.95 412.756C221.011 412.158 221.686 411.705 222.262 411.875ZM496.169 405.595C495.074 407.77 494.629 410.268 494.908 412.688C497.456 412.714 499.99 411.53 501.604 409.558C501.878 409.223 502.137 408.839 502.15 408.406C502.167 407.87 501.805 407.399 501.412 407.034C500.031 405.753 498.011 405.199 496.169 405.595ZM499.979 408.912C499.318 409.92 498.063 410.504 496.866 410.361L497.076 409.931C496.768 409.162 497.214 408.179 497.995 407.905C498.777 407.631 499.739 408.119 499.979 408.912ZM263.323 406.481L263.361 406.585L263.56 407.893C263.19 408.155 262.698 408.235 262.264 408.105C261.505 407.512 262.474 406.026 263.323 406.481ZM222.581 406.267C223.358 407.178 221.62 408.662 220.842 407.751C220.065 406.841 221.804 405.357 222.581 406.267ZM229.724 406.382L229.925 406.383C229.646 407.386 228.402 407.992 227.44 407.593C227.005 406.991 227.23 406.024 227.887 405.676C228.543 405.328 229.469 405.684 229.724 406.382ZM235.247 405.046L235.296 405.157C235.845 404.829 236.535 405.555 236.426 406.185C236.317 406.816 235.76 407.257 235.234 407.622L233.95 406.343L235.247 405.046ZM276.229 405.046L277.518 406.337C277.1 406.95 276.458 407.407 275.742 407.602C274.621 407.155 275.017 405.075 276.223 405.07L276.229 405.046ZM269.238 405.265C270.003 405.309 270.587 406.231 270.264 406.927C269.942 407.623 268.813 407.749 268.372 407.122C267.931 406.495 268.485 405.451 269.251 405.497L269.238 405.265ZM256.76 406.351L256.249 406.865L255.74 407.376L255.664 407.394C255.006 407.492 254.492 406.475 254.959 405.954C255.448 405.41 256.472 405.678 256.76 406.351ZM242.594 405.498L242.483 405.654C243.059 405.679 243.125 406.627 242.654 406.959C242.182 407.291 241.542 407.182 240.979 407.06C240.545 406.642 240.545 405.86 240.977 405.442C241.41 405.023 242.191 405.051 242.594 405.498ZM284.19 406.386C283.65 407.166 282.458 407.394 281.668 406.868L281.822 406.749C281.334 406.218 281.863 405.243 282.582 405.177C283.301 405.111 283.946 405.707 284.19 406.386ZM513.44 218.175C512.735 218.751 512.517 219.719 512.342 220.613C500.173 282.625 488.005 344.637 475.837 406.648C478.016 407.349 480.435 406.029 481.731 404.143C483.028 402.256 483.459 399.926 483.859 397.672C494.455 338.01 505.051 278.347 515.647 218.685C515.482 217.79 514.145 217.598 513.44 218.175ZM250.501 405.832L250.752 406.021C250.079 406.637 249.062 406.849 248.199 406.553C247.701 405.9 248.052 404.795 248.836 404.55C249.619 404.304 250.538 405.012 250.501 405.832ZM291.345 405.023C291.909 405.889 290.255 406.966 289.691 406.1C289.127 405.234 290.781 404.157 291.345 405.023ZM254.932 398.878C255.878 399.291 255.907 400.906 254.972 401.355C254.063 400.938 254.032 399.427 254.867 398.924L254.941 398.884L254.932 398.878ZM283.324 398.93C284.149 398.992 284.668 400.107 284.192 400.785C283.717 401.462 282.506 401.366 282.134 400.626L282.22 400.634C281.82 399.91 282.499 398.867 283.324 398.93ZM243.795 400.654C242.985 401.185 241.765 400.933 241.232 400.124C241.596 399.534 242.347 399.21 243.026 399.352L243.022 399.342C243.594 399.088 243.888 400.036 243.795 400.654ZM296.731 398.831C297.499 398.987 298.003 399.913 297.719 400.643C296.918 401.193 295.678 400.927 295.173 400.097L295.111 400.11C295.137 399.327 295.964 398.674 296.731 398.831ZM222.084 399.082C221.88 399.818 221.382 400.468 220.725 400.858C219.919 400.559 219.932 399.162 220.743 398.877L220.733 398.845C221.188 398.721 221.697 398.81 222.084 399.082ZM304.513 399.59L304.545 399.601C304.519 400.826 302.427 401.228 301.949 400.099C302.496 399.305 303.704 399.065 304.513 399.59ZM249.879 398.138L251.053 399.014C250.624 399.859 249.692 400.424 248.745 400.412C248.119 399.674 248.797 398.308 249.763 398.361L249.879 398.138ZM269.47 397.819C270.578 398.274 270.182 400.33 268.984 400.341C268.411 400.115 268.126 399.351 268.412 398.804L268.447 398.821C268.788 398.487 269.129 398.153 269.47 397.819ZM263.023 399.035L263.044 399.078C263.013 399.599 262.689 400.092 262.224 400.327C261.755 400.105 261.433 399.605 261.423 399.087C261.87 398.73 262.554 398.708 263.023 399.035ZM228.5 398.306L228.497 398.31C229.144 398.126 229.644 398.908 229.751 399.572C229.115 400.777 226.911 400.44 226.664 399.1C227.054 398.512 227.805 398.187 228.5 398.306ZM291.489 398.237C292.224 398.408 292.49 399.691 291.752 399.846L291.787 399.832C290.908 399.942 289.789 399.858 289.459 399.036C290.048 398.566 290.755 398.066 291.489 398.237ZM277.495 398.569L276.235 399.844C275.673 399.589 275.4 398.839 275.667 398.283L275.683 398.28C276.111 397.644 277.286 397.832 277.495 398.569ZM236.281 397.788L236.278 397.791C236.925 397.608 237.425 398.389 237.532 399.053C236.896 400.258 234.692 399.921 234.446 398.581C234.835 397.993 235.586 397.668 236.281 397.788ZM407.395 218.826C406.6 218.828 405.735 218.853 405.122 219.359C404.512 219.863 404.321 220.703 404.168 221.48C399.093 247.145 394.018 272.811 388.943 298.477C388.737 299.518 388.553 300.681 389.13 301.57C389.707 302.46 391.379 302.548 391.645 301.521C389.919 299.648 393.294 296.695 395.591 297.797C397.888 298.899 398.654 301.733 399.167 304.229C401.436 301.703 404.012 299.011 407.384 298.612C410.757 298.213 414.521 301.738 412.968 304.758C418.075 305.015 423.182 305.272 428.289 305.529C429.848 305.608 431.481 305.673 432.893 305.007C434.306 304.342 435.386 302.691 434.864 301.219C425.437 298.222 419.144 287.827 420.4 278.015C421.656 268.204 430.001 259.872 439.743 258.153C449.484 256.435 459.927 261.155 465.495 269.331C467.34 272.039 468.705 275.139 468.988 278.403C469.627 285.769 464.789 292.453 459.572 297.692C467.371 298.243 473.341 306.578 472.256 314.32C471.171 322.063 464.035 328.213 456.276 329.17C451.276 329.787 448.862 335.587 448.025 340.555C447.188 345.523 446.521 351.274 442.312 354.042C440.611 354.407 439.017 352.748 438.778 351.024C438.54 349.301 439.25 347.604 439.945 346.009C442.088 341.088 444.232 336.166 446.375 331.245C443.587 329.597 440.798 327.948 438.009 326.299C436.84 331.288 435.671 336.276 434.502 341.265C433.985 343.474 433.242 345.972 431.184 346.927C428.574 348.136 425.425 345.861 424.626 343.098C423.826 340.336 424.66 337.394 425.49 334.64L432.031 312.948C426.08 310.322 419.516 309.102 413.019 309.414C416.934 311.853 415.789 317.932 413.257 321.787C410.725 325.642 407.126 329.449 407.518 334.044C407.768 336.974 409.666 339.581 409.856 342.516C410.047 345.45 406.684 348.76 404.465 346.829C402.331 344.972 398.999 345.15 396.484 346.446C393.969 347.742 392.061 349.938 390.138 352.013C384.744 357.831 378.738 363.082 372.251 367.65C404.979 378.227 437.707 388.805 470.435 399.383C471.189 399.627 472.007 399.871 472.759 399.618C473.996 399.2 474.429 397.703 474.681 396.422C486.343 337.251 498.005 278.08 509.666 218.909C475.576 218.79 441.485 218.762 407.395 218.826ZM222.947 392.688C222.885 393.513 221.77 394.031 221.092 393.556C220.415 393.081 220.511 391.87 221.251 391.498L221.243 391.583C221.967 391.184 223.01 391.863 222.947 392.688ZM277.968 392.376L278.169 392.376C277.89 393.38 276.646 393.986 275.684 393.587C275.249 392.984 275.474 392.018 276.131 391.67C276.787 391.322 277.713 391.678 277.968 392.376ZM305.563 392.883C304.967 393.424 304.154 393.87 303.383 393.638C302.612 393.406 302.246 392.184 302.947 391.787L302.98 391.851C303.85 391.125 305.433 391.757 305.563 392.883ZM271.071 391.042L271.007 391.075C271.734 391.945 271.102 393.528 269.976 393.658C269.435 393.063 268.989 392.249 269.221 391.478C269.453 390.707 270.675 390.341 271.071 391.042ZM216.215 389.964C216.916 391.142 216.575 392.826 215.471 393.64L214.673 392.389L214.821 392.303C214.474 391.288 215.145 389.899 216.215 389.964ZM262.195 392.042L262.233 392.111C262.555 391.883 263.005 392.321 262.942 392.711C262.879 393.101 262.534 393.372 262.214 393.604C261.859 393.169 261.85 392.486 262.195 392.042ZM236.483 393.159L236.314 393.121C235.861 393.898 234.364 393.271 234.6 392.403C235.122 391.616 236.65 392.23 236.483 393.159ZM229.529 390.498L229.528 390.539C229.971 390.783 230.246 391.302 230.201 391.806C230.121 392.593 229.318 393.229 228.534 393.128C227.813 392.252 228.408 390.678 229.529 390.498ZM249.387 391.203C250.035 391.57 250.243 392.537 249.804 393.139L249.77 393.074C248.768 393.248 247.308 392.834 247.511 391.838C247.803 391.152 248.739 390.835 249.387 391.203ZM257.79 391.798C257.852 392.649 256.808 393.358 256.04 392.986C255.273 392.615 255.181 391.355 255.887 390.877C256.592 390.398 257.729 390.948 257.79 391.798ZM291.907 391.83C291.534 392.773 290.367 393.314 289.407 392.99L289.183 393.005C288.847 392.288 289.212 391.328 289.94 391.014C290.667 390.701 291.615 391.094 291.907 391.83ZM244.075 391.34C244.229 392.265 243.157 393.148 242.279 392.819C241.401 392.49 241.173 391.12 241.897 390.524C242.621 389.928 243.921 390.416 244.075 391.34ZM284.008 390.536L284.001 390.528C284.423 390.805 284.702 391.29 284.728 391.795C284.286 392.909 282.216 392.506 282.224 391.308C282.578 390.713 283.332 390.387 284.008 390.536ZM297.896 390.536C298.483 390.835 298.618 391.754 298.142 392.209L298.024 392.08C297.6 392.886 296.056 392.166 296.4 391.324C296.487 390.67 297.308 390.238 297.896 390.536ZM312.789 390.742C313.013 391.74 311.233 392.26 310.82 391.385L310.792 391.316L310.845 391.212C311.212 390.567 312.168 390.32 312.789 390.742ZM243.245 384.749C243.98 384.92 244.246 386.204 243.508 386.359L243.543 386.344C242.664 386.454 241.545 386.37 241.215 385.548C241.804 385.078 242.51 384.578 243.245 384.749ZM326.544 384.833L326.648 384.799L326.854 386.116C326.074 386.739 324.687 386.053 324.708 385.055C325.275 384.786 325.929 384.707 326.544 384.833ZM284.201 385.625L284.398 385.603C284.308 386.37 282.897 386.348 282.83 385.579C283 384.977 284.071 385.013 284.201 385.625ZM305.852 385.099C305.678 385.971 304.431 386.394 303.762 385.807C303.094 385.22 303.351 383.928 304.194 383.643C305.036 383.357 306.026 384.226 305.852 385.099ZM249.91 384.272C250.225 384.885 249.878 385.74 249.224 385.959C248.571 386.178 247.778 385.706 247.66 385.027L247.415 385.04C248.041 384.381 249.021 384.079 249.91 384.272ZM222.504 385.086C222.211 385.498 221.739 385.778 221.237 385.839L221.133 386.011C220.738 385.721 220.342 385.431 219.946 385.142C220.357 384.145 222.05 384.108 222.504 385.086ZM298.18 385.123C297.689 385.794 296.737 386.085 295.955 385.804C295.575 385.393 295.559 384.697 295.919 384.269L295.838 384.134C296.684 383.629 297.951 384.164 298.18 385.123ZM332.786 384.799C332.969 385.188 332.678 385.755 332.249 385.723L332.273 385.85C331.595 386.121 331.341 384.929 331.691 384.288C332.118 384.24 332.602 384.41 332.786 384.799ZM320.208 384.611C320.559 384.986 320.296 385.8 319.793 385.696L319.812 385.887C319.034 385.834 318.255 384.915 318.758 384.318C319.266 384.238 319.857 384.236 320.208 384.611ZM290.971 384.231C291.67 384.393 291.945 385.565 291.332 385.81L291.236 385.838L291.268 385.825C290.39 385.935 289.27 385.851 288.94 385.03C289.53 384.559 290.236 384.06 290.971 384.231ZM277.132 385.017L276.945 385.042C276.637 385.772 275.605 386.077 274.949 385.63C274.744 384.526 276.732 383.967 277.132 385.017ZM263.475 384.556C263.078 385.176 262.44 385.638 261.726 385.822C261.019 385.581 260.832 384.474 261.42 384.014L261.436 384.029C262.081 383.546 263.145 383.821 263.475 384.556ZM235.873 384.137C236.269 384.426 236.664 384.716 237.06 385.006C236.649 386.002 234.957 386.039 234.502 385.062C234.795 384.65 235.267 384.369 235.769 384.309L235.873 384.137ZM270.18 383.519C270.538 384.344 270.253 385.538 269.377 385.741C268.501 385.943 267.874 384.351 268.747 384.134L268.796 384.076C268.911 383.499 269.696 383.182 270.18 383.519ZM214.774 383.982L214.745 384.035C215.421 384.362 215.243 385.594 214.503 385.717C213.622 385.544 213.883 383.878 214.774 383.982ZM256.455 384.813L256.508 384.812C256.129 385.398 255.212 385.538 254.676 385.091C254.693 384.535 255.022 383.942 255.565 383.824C256.109 383.706 256.718 384.323 256.455 384.813ZM229.513 383.79C230.047 384.874 227.978 385.894 227.444 384.811C226.91 383.728 228.979 382.707 229.513 383.79ZM296.464 377.507L298.31 377.665C298.49 378.45 298.016 379.332 297.262 379.615C296.507 379.898 295.57 379.545 295.19 378.835C295.613 378.407 296.037 377.98 296.46 377.552L296.464 377.507ZM284.057 377.49C284.715 378.625 283.124 380.194 281.998 379.521C281.475 379.092 281.606 378.115 282.223 377.839L282.185 377.676L284.057 377.49ZM223.598 378.829C223.209 379.417 222.457 379.742 221.762 379.622L221.765 379.617C221.12 379.805 220.621 379.02 220.511 378.358C221.147 377.152 223.351 377.488 223.598 378.829ZM325.497 379.577C324.465 379.846 323.974 377.848 325.018 377.631L325.01 377.56C326.056 377.352 326.529 379.308 325.497 379.577ZM320.432 379.098L320.335 379.103C319.816 379.864 318.437 379.717 318.09 378.864C318.432 377.834 320.3 378.02 320.432 379.098ZM263.717 378.258L263.537 378.319C263.585 378.82 263.24 379.332 262.756 379.474C262.121 379.396 261.759 378.515 262.155 378.013C262.552 377.511 263.493 377.658 263.717 378.258ZM332.278 377.095C332.693 377.347 332.962 377.823 332.965 378.309C332.715 379.005 331.896 379.442 331.178 379.26L331.063 379.124C330.995 378.286 331.506 377.431 332.278 377.095ZM276.227 377.565L276.197 377.618C276.859 377.725 276.776 378.867 276.145 379.094C275.513 379.32 274.823 378.879 274.435 378.332C274.8 377.744 275.549 377.423 276.227 377.565ZM346.232 377.596C346.914 377.742 346.912 379.03 346.215 378.993L346.255 379.085C345.813 379.197 345.327 379.123 344.938 378.886C344.943 378.188 345.55 377.451 346.232 377.596ZM236.32 378.047L236.448 378.123C236.02 379.305 234.049 379.431 233.474 378.314C234.083 377.411 235.554 377.273 236.32 378.047ZM241.988 377.038C242.402 377.348 242.688 377.825 242.766 378.336C242.39 378.581 241.914 378.668 241.475 378.572L241.273 378.743L240.638 377.855C240.967 377.429 241.458 377.132 241.988 377.038ZM291.421 376.339C292.04 376.93 291.919 378.101 291.193 378.553C290.466 379.005 289.362 378.595 289.107 377.779C289.467 376.955 290.383 376.411 291.279 376.488L291.421 376.339ZM250.264 377.812L250.563 377.825C250.007 378.498 249.043 378.802 248.201 378.572C247.693 378 247.957 376.945 248.675 376.68C249.393 376.415 250.279 377.046 250.264 377.812ZM228.601 376.826L230.381 377.677C229.993 378.242 229.347 378.753 228.681 378.592C228.015 378.431 227.825 377.257 228.497 377.121L228.601 376.826ZM214.998 376.058L214.983 376.051C215.934 376.466 215.963 378.081 215.028 378.53C214.119 378.112 214.088 376.602 214.922 376.099L214.998 376.058ZM270.04 377.004C270.349 377.53 270.068 378.306 269.493 378.512C268.941 378.096 269.323 377.014 270.014 377.039L270.04 377.004ZM255.893 376.63C256.543 376.656 256.981 377.523 256.617 378.062C256.254 378.601 255.286 378.519 255.018 377.926L255.044 377.702C255.327 377.345 255.61 376.988 255.893 376.63ZM340.253 377.305C339.977 377.72 339.503 377.997 339.005 378.034C338.51 377.861 338.341 377.118 338.712 376.748L338.711 376.724C339.261 376.437 340.03 376.727 340.253 377.305ZM215.562 370.176C215.837 370.63 216.112 371.084 216.387 371.537L216.195 371.648C216.694 372.513 216.041 373.793 215.048 373.897C213.759 373.028 214.086 370.663 215.562 370.176ZM339.501 370.808C340.419 371.419 340.578 372.9 339.812 373.693L339.789 373.737C338.519 373.703 338.537 371.633 339.501 370.808ZM284.771 372.113L283.491 373.402L283.489 373.374C283.065 373.512 282.574 373.427 282.221 373.155C281.985 372.493 282.347 371.676 282.997 371.41C283.648 371.144 284.48 371.473 284.771 372.113ZM242.661 371.015C243.471 371.46 243.277 372.869 242.428 373.236C242.016 373.652 241.131 373.208 241.274 372.64L241.412 372.477C240.76 371.821 241.85 370.569 242.661 371.015ZM297.697 372.652L297.755 372.621C297.444 373.033 296.97 373.317 296.46 373.396C296.049 373.086 295.765 372.612 295.685 372.102C296.319 371.601 297.406 371.898 297.697 372.652ZM255.477 370.83C256.064 371.195 256.385 371.944 256.244 372.622L256.191 372.592C256.083 373.254 254.941 373.171 254.715 372.54C254.488 371.908 254.93 371.218 255.477 370.83ZM312.706 372.078C312.497 372.692 311.75 373.062 311.135 372.856C310.52 372.651 310.146 371.906 310.349 371.29L310.471 371.34C311.033 370.417 312.803 371.001 312.706 372.078ZM237.079 369.974L237.229 369.943C237.783 371.083 236.999 372.648 235.754 372.886C234.475 372.047 235.607 369.561 237.079 369.974ZM228.481 370.349C229.595 370.791 229.192 372.861 227.993 372.853C227.398 372.499 227.072 371.745 227.222 371.069L227.214 371.074L227.303 370.954C227.588 370.601 228.026 370.372 228.481 370.349ZM319.021 370.557C319.759 371.217 319.232 372.702 318.243 372.748L316.95 371.586L316.931 371.577C316.866 370.588 318.282 369.897 319.021 370.557ZM269.318 370.398C270.143 370.461 270.661 371.576 270.186 372.253C269.711 372.93 268.499 372.834 268.127 372.095L268.213 372.103C267.813 371.378 268.493 370.336 269.318 370.398ZM353.774 371.071C354.318 372.163 352.233 373.203 351.689 372.111C351.145 371.019 353.23 369.98 353.774 371.071ZM290.525 370.518C291.388 371.376 289.75 373.025 288.887 372.167C288.023 371.309 289.661 369.66 290.525 370.518ZM222.479 372.072C222.065 372.51 221.28 372.515 220.86 372.083C220.439 371.65 220.467 370.866 220.917 370.464L220.945 370.466C221.826 370.102 222.883 371.209 222.479 372.072ZM346.885 371.119L347.007 371.07C347.158 371.482 347.07 371.973 346.784 372.306C345.988 372.678 344.865 371.925 345.063 371.069C345.261 370.214 346.84 370.242 346.885 371.119ZM326.785 371.048C326.847 371.898 325.802 372.607 325.035 372.236C324.267 371.864 324.176 370.605 324.881 370.126C325.586 369.648 326.723 370.198 326.785 371.048ZM250.659 370.316C251.275 370.521 251.649 371.266 251.446 371.882L251.324 371.832C250.762 372.755 248.992 372.171 249.089 371.095C249.298 370.48 250.044 370.11 250.659 370.316ZM262.735 370.37L262.711 370.362C263.526 370.605 263.55 372.016 262.743 372.286C261.973 372.031 261.953 370.737 262.658 370.402L262.735 370.37ZM277.941 370.974L277.98 371.051L277.928 371.154C277.436 371.986 275.939 371.974 275.51 371.079C275.927 370.171 277.438 370.14 277.941 370.974ZM332.201 369.798C332.792 370.006 333.099 370.783 332.811 371.339L332.796 371.325C332.127 371.591 331.845 370.423 332.201 369.798ZM332.27 364.619C332.681 364.913 332.959 365.384 333.02 365.885L333.075 365.877C333.046 366.397 332.722 366.892 332.255 367.126C331.3 366.687 331.31 365.046 332.27 364.619ZM320.607 365.907C320.011 366.449 319.198 366.894 318.427 366.662C317.656 366.43 317.29 365.208 317.991 364.812L318.024 364.876C318.894 364.15 320.477 364.782 320.607 365.907ZM222.968 364.823L222.222 366.277L220.383 365.569L220.429 365.37C220.419 364.161 222.481 363.717 222.968 364.823ZM347.015 364.358L347.153 364.239C347.493 364.829 347.29 365.669 346.718 366.04C346.013 366.488 344.931 365.75 345.072 364.925C345.213 364.101 346.443 363.748 347.015 364.358ZM305.535 365.889C305.157 366.131 304.683 366.217 304.245 366.123L304.243 366.093C303.243 366.393 302.758 364.504 303.722 364.105C304.687 363.707 305.763 364.871 305.535 365.889ZM276.857 364.82L277.007 364.842L275.721 366.132C274.967 365.698 274.623 364.542 275.236 363.925C275.849 363.307 277.203 364.022 276.857 364.82ZM352.49 363.643C353.379 363.598 354.094 364.705 353.689 365.497C353.283 366.289 351.967 366.355 351.484 365.608C351.001 364.86 351.602 363.688 352.49 363.643ZM360.086 363.818C360.829 364.366 360.543 365.671 359.739 366.126L358.711 365.102L358.744 365.091C358.094 364.434 359.342 363.27 360.086 363.818ZM284.008 363.548C284.419 363.86 284.703 364.333 284.786 364.842C284.358 365.265 283.931 365.687 283.503 366.11C282.396 365.636 282.802 363.581 284.006 363.564L284.008 363.548ZM340.263 363.807C340.477 364.526 340.31 365.346 339.833 365.925L339.827 366.024C338.987 366.277 338.034 365.414 338.203 364.553C338.372 363.693 339.581 363.254 340.263 363.807ZM263.026 364.282C263.785 364.788 263.132 366.264 262.248 366.043C261.623 365.481 262.18 364.214 263.016 364.294L263.026 364.282ZM228.501 364.08L228.494 364.071C228.917 364.349 229.195 364.834 229.222 365.339C228.779 366.452 226.709 366.05 226.717 364.851C227.071 364.256 227.825 363.93 228.501 364.08ZM269.466 363.652C270.227 363.857 270.586 364.925 270.104 365.549C269.623 366.173 268.498 366.094 268.108 365.41L268.113 365.344C268.313 364.63 268.813 364.004 269.466 363.652ZM327.848 363.802C328.417 364.544 327.886 365.824 326.959 365.945C326.032 366.067 325.19 364.968 325.548 364.104C325.906 363.24 327.279 363.06 327.848 363.802ZM215.537 362.532C216.552 363.204 216.549 364.951 215.53 365.619L215.736 365.762C215.067 366.279 214.059 365.404 214.133 364.563C214.208 363.721 214.896 363.083 215.537 362.532ZM256.366 365.48C255.537 366.241 254.085 364.658 254.914 363.897C255.743 363.137 257.195 364.72 256.366 365.48ZM242.757 364.328C242.328 364.759 241.9 365.19 241.472 365.621C241.06 365.327 240.779 364.844 240.736 364.336C241.062 363.543 242.424 363.537 242.757 364.328ZM313.694 363.365L314.73 364.22C314.558 365.654 311.997 365.773 311.692 364.362C312.106 363.774 312.861 363.445 313.574 363.541L313.694 363.365ZM366.485 363.589C366.982 363.755 367.151 364.504 366.774 364.868L366.717 364.832C366.525 365.638 364.972 365.13 365.293 364.366C365.489 363.903 365.982 363.582 366.485 363.589ZM250.544 364.284C249.882 365.496 247.67 365.171 247.384 363.82L247.508 363.846C248.104 362.633 250.315 362.952 250.544 364.284ZM215.527 356.816C216.548 357.485 216.552 359.238 215.533 359.912L215.374 360.109C214.438 359.269 214.517 357.565 215.527 356.816ZM339.492 359.792C338.782 359.464 338.508 358.444 338.958 357.805L338.905 357.551C340.084 357.226 340.678 359.498 339.492 359.792ZM368.037 357.336C368.779 357.891 368.616 359.254 367.764 359.619C366.911 359.984 365.812 359.161 365.923 358.241C366.033 357.32 367.295 356.78 368.037 357.336ZM262.419 359.49C261.361 359.894 260.589 357.875 261.646 357.47C262.704 357.066 263.476 359.086 262.419 359.49ZM255.744 357.572L255.767 359.166C255.321 359.544 254.56 359.45 254.218 358.976C253.877 358.503 254.029 357.751 254.528 357.447L254.448 357.347C254.883 357.215 255.379 357.3 255.744 357.572ZM244.307 358.874L244.053 358.859C243.322 359.851 241.421 359.367 241.252 358.147C241.874 356.827 244.347 357.415 244.307 358.874ZM346.273 356.79C346.948 357.342 347.253 358.308 347.017 359.147C346.367 359.657 345.249 359.317 344.994 358.531C344.738 357.745 345.444 356.812 346.27 356.844L346.273 356.79ZM302.756 357.102L305.046 357.882C304.624 358.697 303.846 359.499 302.939 359.361C302.032 359.222 301.769 357.583 302.682 357.489L302.756 357.102ZM221.768 356.799C222.449 357.341 222.756 358.31 222.512 359.146C221.606 359.82 220.1 358.643 220.536 357.6L220.465 357.58C220.781 357.169 221.256 356.884 221.768 356.799ZM283.768 357.548L283.781 357.535C284.533 358.052 283.882 359.521 282.994 359.311C282.546 359.093 282.242 358.607 282.243 358.11C282.462 357.537 283.23 357.254 283.768 357.548ZM332.256 359.317C331.486 359.062 331.466 357.768 332.171 357.433L332.249 357.402L332.224 357.393C333.04 357.636 333.063 359.047 332.256 359.317ZM277.457 358.066C277.141 358.606 276.724 359.17 276.109 359.284C275.494 359.399 274.784 358.716 275.11 358.182L274.987 358.13C275.4 357.187 276.995 357.145 277.457 358.066ZM318.997 356.578C319.875 356.907 320.103 358.277 319.379 358.873C318.655 359.469 317.355 358.982 317.201 358.057C317.047 357.132 318.119 356.25 318.997 356.578ZM325.522 356.276C326.207 356.836 326.511 357.82 326.261 358.668L325.007 358.958L325.001 358.868C324.445 358.058 324.696 356.808 325.522 356.276ZM313.06 357.329L313.247 357.285C313.427 358.494 311.658 359.423 310.765 358.588C310.384 357.377 312.383 356.256 313.06 357.329ZM353.28 358.643C352.414 359.207 351.337 357.553 352.203 356.989C353.069 356.425 354.146 358.079 353.28 358.643ZM269.508 355.796C270.296 356.353 270.533 357.556 270.016 358.37L269.981 358.327C269.699 359.133 268.289 358.69 268.194 357.842C268.098 356.993 268.798 356.271 269.508 355.796ZM296.977 356.817L296.97 356.809C297.392 357.086 297.671 357.571 297.697 358.076C297.255 359.19 295.185 358.787 295.193 357.588C295.547 356.994 296.301 356.668 296.977 356.817ZM374.758 356.302C375.731 356.658 375.273 358.571 374.292 358.241L374.269 358.333C373.831 358.452 373.344 358.376 372.964 358.129C372.771 357.111 373.786 355.946 374.758 356.302ZM250.921 357.169C251.129 358.408 248.764 358.804 248.557 357.566C248.349 356.328 250.714 355.931 250.921 357.169ZM236.549 355.799C237.456 355.937 237.719 357.576 236.806 357.67L236.733 358.058L234.442 357.277C234.864 356.462 235.642 355.661 236.549 355.799ZM362.107 357.089C361.512 357.63 360.698 358.076 359.927 357.844C359.156 357.611 358.791 356.389 359.491 355.993L359.524 356.057C360.394 355.331 361.977 355.963 362.107 357.089ZM262.758 351.111C262.987 351.695 263.213 352.368 262.925 352.925C262.637 353.482 261.586 353.515 261.518 352.891L261.504 352.889C261.124 352.121 261.903 351.168 262.758 351.111ZM276.742 351.102C277.361 351.832 276.666 353.182 275.712 353.103L275.569 353.183C275.516 352.574 275.463 351.964 275.41 351.354C275.805 351.115 276.287 351.023 276.742 351.102ZM236.262 350.636C237.376 351.079 236.973 353.148 235.775 353.141C235.18 352.787 234.854 352.033 235.003 351.357L234.996 351.362L235.084 351.241C235.369 350.888 235.808 350.66 236.262 350.636ZM360.758 350.672C361.372 350.88 361.743 351.627 361.537 352.242C361.332 352.857 360.587 353.231 359.971 353.028L360.021 352.907C359.098 352.344 359.682 350.574 360.758 350.672ZM304.873 351.852C304.677 352.803 303.399 353.331 302.59 352.796L302.591 352.701C302.357 352.101 302.697 351.342 303.301 351.118C303.904 350.894 304.658 351.246 304.873 351.852ZM320.287 351.913C320.44 353.06 318.249 353.353 318.095 352.206C317.942 351.058 320.133 350.766 320.287 351.913ZM374.208 350.132C375.048 350.604 375.065 352.03 374.237 352.521C373.409 353.013 372.165 352.315 372.154 351.352C372.142 350.389 373.368 349.661 374.208 350.132ZM331.531 350.497L331.723 350.598C332.32 350.966 332.649 351.723 332.511 352.411C332.025 352.791 331.263 352.761 330.809 352.342L331.531 350.497ZM249.859 350.905C250.177 351.702 249.39 352.7 248.54 352.577C247.691 352.454 247.22 351.273 247.751 350.599C248.283 349.925 249.541 350.108 249.859 350.905ZM290.69 350.145C291.528 350.861 290.757 352.547 289.668 352.382L289.738 352.138C289.102 351.443 289.75 350.087 290.69 350.145ZM270.154 351.188C270.091 352.013 268.977 352.531 268.299 352.056C267.622 351.581 267.718 350.369 268.457 349.997L268.45 350.083C269.174 349.683 270.216 350.362 270.154 351.188ZM256.516 350.064C256.929 350.371 257.212 350.848 257.284 351.357L257.292 351.352C256.982 351.764 256.507 352.048 255.998 352.126C255.586 351.818 255.302 351.344 255.225 350.836C255.534 350.425 256.008 350.141 256.516 350.064ZM244.336 350.859C243.688 351.474 242.869 351.907 241.996 352.096C241.428 351.861 241.152 351.1 241.437 350.557L241.448 350.548C242.226 349.75 243.746 349.914 244.336 350.859ZM368.88 350.872L367.317 351.941L367.238 351.837C366.555 352.586 365.43 350.957 366.199 350.296C366.968 349.636 368.199 350.121 368.88 350.872ZM298.113 349.935L297.991 350.065C298.647 350.75 297.951 352.132 297.01 352.012C296.326 351.814 295.949 350.923 296.283 350.295C296.617 349.666 297.566 349.48 298.113 349.935ZM326.728 349.758C327.543 350.069 327.419 351.625 326.548 351.571L326.462 351.826C325.896 351.552 325.33 351.279 324.764 351.005C325.005 350.167 325.912 349.446 326.728 349.758ZM354.126 349.023C354.615 350.29 353.303 351.846 351.971 351.578L351.84 351.646C351.399 350.32 352.752 348.768 354.126 349.023ZM381.003 349.541C381.546 349.895 381.956 350.448 382.138 351.07L382.081 351.117C381.32 351.915 379.815 351.77 379.22 350.842C379.646 350.225 380.285 349.759 381.003 349.541ZM313.841 350.386C313.242 350.791 312.642 351.195 312.043 351.6C311.473 351.356 311.19 350.599 311.461 350.041L311.485 350.029C312.09 349.287 313.484 349.499 313.841 350.386ZM323.653 319.565C323.919 321.11 324.625 322.577 325.669 323.748C326.565 322.574 327.597 321.401 328.994 320.921C330.39 320.441 332.222 320.935 332.747 322.315C333.671 324.746 330.338 326.41 328.743 328.464C326.386 331.499 328.05 336.044 330.634 338.889C333.218 341.733 336.661 343.873 338.509 347.243C339.33 348.741 341.373 349.194 343.014 348.72C344.655 348.247 345.987 347.073 347.259 345.934L376.322 319.887C359.35 314.413 340.691 314.299 323.653 319.565ZM191.949 337.849C190.943 340.954 191.41 344.502 193.186 347.241C193.539 347.784 193.997 348.334 194.634 348.453C194.942 348.51 195.269 348.455 195.542 348.301C193.97 344.961 192.762 341.449 191.949 337.849ZM367.12 343.663L368.248 344.533C368.043 345.388 367.385 346.121 366.557 346.417C365.416 345.985 365.781 343.875 367 343.851L367.12 343.663ZM313.28 344.643C314.004 345.531 312.308 346.914 311.584 346.026C310.86 345.138 312.556 343.756 313.28 344.643ZM243.654 344.544C243.588 345.33 243.105 346.172 242.325 346.283C241.544 346.393 240.814 345.294 241.403 344.771L241.281 344.663C241.626 343.717 243.217 343.637 243.654 344.544ZM326.033 343.839C326.281 344.213 326.369 344.689 326.271 345.126L326.38 345.144C326.29 345.752 325.529 346.152 324.977 345.881C324.692 345.337 324.611 344.689 324.751 344.091C325.123 343.842 325.595 343.749 326.033 343.839ZM387.769 343.349C388.46 343.853 388.769 344.825 388.495 345.636C388.081 346.015 387.383 346.03 386.952 345.669L386.973 345.657C386.077 345.03 386.677 343.291 387.769 343.349ZM250.516 344.055C249.979 344.977 249.053 345.664 248.015 345.909L247.97 345.658C247.2 345.202 247.35 343.885 248.128 343.444C248.906 343.004 249.958 343.356 250.516 344.055ZM263.24 343.369C264.352 343.829 263.944 345.894 262.741 345.897C262.482 345.295 262.222 344.694 261.963 344.092L261.968 344.101C262.249 343.679 262.734 343.4 263.24 343.369ZM277.523 344.616L277.57 344.609C277.535 345.131 277.211 345.625 276.746 345.865C276.136 345.542 275.805 344.767 275.994 344.102C276.418 343.533 277.529 343.906 277.523 344.616ZM305.223 343.383C306.08 344.243 305.144 346.029 303.949 345.814L303.973 345.674C302.962 344.924 304.046 342.937 305.223 343.383ZM362.107 344.638C361.512 345.18 360.698 345.625 359.927 345.393C359.156 345.161 358.791 343.939 359.491 343.543L359.524 343.607C360.394 342.881 361.977 343.513 362.107 344.638ZM237.462 344.918L237.367 344.921C236.797 345.406 235.973 345.573 235.259 345.349C234.712 344.672 235.149 343.473 236.003 343.307C236.857 343.14 237.713 344.085 237.462 344.918ZM255.217 343.634L255.216 343.581C255.803 343.96 255.943 344.877 255.495 345.413C254.939 345.397 254.346 345.067 254.229 344.524C254.111 343.98 254.727 343.371 255.217 343.634ZM292.074 344.591C291.685 345.179 290.933 345.504 290.238 345.385L290.24 345.379C289.595 345.567 289.097 344.783 288.987 344.12C289.623 342.914 291.827 343.251 292.074 344.591ZM319.791 343.375C320.567 343.738 320.609 345.166 319.764 345.307L319.793 345.338C318.793 345.585 317.386 345.096 317.486 344.071C318.083 343.456 319.014 343.012 319.791 343.375ZM375.019 344.066C374.55 344.76 373.849 345.448 373.015 345.369C372.181 345.29 371.704 343.93 372.482 343.619L372.463 343.589C373.252 343.031 374.484 343.261 375.019 344.066ZM297.261 345.202C296.395 345.766 295.318 344.112 296.184 343.548C297.05 342.984 298.127 344.637 297.261 345.202ZM380.808 343.525C380.788 344.068 380.451 344.587 379.963 344.825L380.053 344.88C379.666 345.556 378.476 344.726 378.78 344.01C379.085 343.293 380.109 343.182 380.808 343.525ZM222.779 344.821C222.261 345.151 221.934 344.183 222.07 343.584L221.965 343.503C222.656 343.065 223.48 344.4 222.779 344.821ZM269.731 342.46L269.799 342.49C270.278 343.068 270.445 343.89 270.231 344.609C269.502 345.212 268.175 344.529 268.242 343.586C268.553 343.026 269.108 342.607 269.731 342.46ZM404.532 341.517C403.318 341.783 402.177 342.536 400.941 342.404C400.984 343.461 402.323 344.222 403.253 343.717L403.356 343.765C404.741 344.442 407.032 344.689 407.241 343.162C407.41 341.931 405.746 341.251 404.532 341.517ZM350.247 333.022C351.115 333.244 351.973 333.754 352.319 334.582C352.743 335.597 352.291 336.757 351.735 337.706C350.817 339.277 349.601 340.672 348.17 341.797C346.687 342.962 344.525 343.819 342.987 342.729C341.294 341.529 341.628 338.878 342.647 337.071C344.164 334.382 347.255 332.256 350.247 333.022ZM405.444 337.567C402.591 337.891 399.826 338.961 397.497 340.642C400.023 341.179 402.771 340.56 404.822 338.992C405.274 338.646 405.731 338.058 405.444 337.567ZM196.719 332.055L195.524 335.248L195.696 335.321C195.116 336.973 195.438 338.913 196.522 340.289C197.871 337.78 197.947 334.626 196.719 332.055ZM320.331 337.604L320.43 337.591L320.608 338.901C319.863 339.206 319.034 339.3 318.239 339.172C317.81 338.626 317.928 337.734 318.483 337.318C319.039 336.901 319.928 337.039 320.331 337.604ZM380.761 338.214C380.579 338.746 380.013 339.058 379.459 339.157C379.049 338.848 378.767 338.375 378.69 337.867C378.996 337.454 379.472 337.171 379.982 337.1L379.964 337.05C380.522 336.976 380.942 337.682 380.761 338.214ZM256.001 337.093C256.249 337.468 256.337 337.945 256.239 338.384L256.254 338.383C255.944 338.795 255.47 339.079 254.961 339.157C254.548 338.855 254.266 338.38 254.199 337.873C254.57 337.284 255.318 336.961 256.001 337.093ZM305.913 337.88C305.541 338.822 304.373 339.364 303.413 339.039L303.189 339.055C302.854 338.337 303.219 337.377 303.946 337.064C304.673 336.75 305.622 337.144 305.913 337.88ZM236.561 337.326L236.551 337.34C237.014 337.691 237.22 338.347 237.038 338.899C236.318 339.515 234.977 338.824 235.06 337.88C235.255 337.301 236.036 337.012 236.561 337.326ZM263.286 337.581L263.309 337.581C263.596 338.13 263.306 338.899 262.728 339.122C262.313 338.846 262.036 338.372 261.999 337.874C262.172 337.379 262.915 337.21 263.286 337.581ZM387.251 337.235C387.832 337.374 388.12 338.184 387.757 338.659L387.872 338.775C387.452 339.108 386.732 338.918 386.531 338.42C386.331 337.923 386.717 337.286 387.251 337.235ZM242.593 336.614C243.406 336.733 244.024 337.61 243.863 338.416C243.284 338.681 242.619 338.752 241.997 338.616L241.875 338.829L240.858 337.974C240.936 337.156 241.78 336.494 242.593 336.614ZM368.838 337.888C368.166 338.39 367.39 338.92 366.563 338.78C365.736 338.641 365.199 337.389 365.914 336.952L365.98 337.091C366.762 336.105 368.68 336.64 368.838 337.888ZM298.049 337.212C298.585 338.294 296.519 339.318 295.983 338.237C295.446 337.155 297.512 336.13 298.049 337.212ZM312.026 336.521C312.891 336.572 313.564 337.556 313.299 338.381C312.495 338.794 311.491 338.792 310.688 338.375C310.875 337.632 311.37 336.971 312.031 336.584L312.026 336.521ZM284.181 338.061L284.036 338.142C283.292 338.943 281.796 338.811 281.204 337.893C281.784 336.786 283.729 336.896 284.181 338.061ZM248.735 336.576C249.146 336.885 249.429 337.359 249.506 337.867C249.199 338.28 248.723 338.563 248.213 338.635L248.216 338.641L248.086 338.533C247.746 338.227 247.514 337.801 247.444 337.349C247.752 336.937 248.226 336.653 248.735 336.576ZM268.964 336.573C269.375 336.883 269.66 337.357 269.738 337.867C269.428 338.278 268.954 338.562 268.445 338.642C267.944 338.008 268.241 336.921 268.995 336.63L268.964 336.573ZM374.382 337.378C374.62 338.579 372.327 339.035 372.089 337.834C371.85 336.633 374.143 336.178 374.382 337.378ZM275.699 336.618C276.271 336.838 276.554 337.606 276.26 338.144L276.274 338.157C275.756 338.909 274.288 338.258 274.497 337.369C274.715 336.922 275.201 336.618 275.699 336.618ZM291.294 336.574C291.828 337.657 289.759 338.677 289.225 337.594C288.691 336.511 290.76 335.49 291.294 336.574ZM404.323 331.979C401.667 333.965 399.012 335.951 396.356 337.937C399.264 337.951 402.162 336.791 404.256 334.772C405.105 333.954 405.497 332.088 404.323 331.979ZM338.492 329.7C340.902 330.015 342.02 333.294 340.859 335.43C340.013 336.985 338.191 338.018 336.444 337.73C334.698 337.443 333.251 335.709 333.477 333.953C333.582 333.14 334 332.397 334.504 331.749C335.464 330.514 336.94 329.498 338.492 329.7ZM403.368 327.297C400.448 329.955 397.571 332.661 394.738 335.413C398.168 334.832 400.844 332.22 403.282 329.738C403.605 329.409 403.942 329.055 404.043 328.605C404.16 328.082 403.873 327.478 403.368 327.297ZM399.771 321.148C399.502 321.189 399.29 321.392 399.098 321.585L391.14 329.568C391.315 330.353 392.515 329.996 393.127 329.474C395.733 327.254 398.34 325.033 400.946 322.813C401.092 325.797 398.277 327.989 395.719 329.534C394.391 330.336 392.867 331.962 393.863 333.152C395.301 331.956 396.739 330.76 398.177 329.564C399.458 328.499 400.784 327.375 401.446 325.846C402.108 324.316 401.872 322.258 400.472 321.354C400.263 321.219 400.017 321.111 399.771 321.148ZM283.702 331.141C284.073 331.707 283.476 332.597 282.811 332.469C282.146 332.34 281.923 331.292 282.479 330.904L282.464 330.899C282.877 330.736 283.38 330.834 283.702 331.141ZM380.986 330.38C381.679 330.655 382.113 331.464 381.958 332.194L381.789 332.148C380.991 332.704 379.753 332.466 379.218 331.653C379.628 331.034 380.269 330.572 380.986 330.38ZM297.511 330.779C298.203 330.834 298.798 331.722 298.337 332.241L298.263 332.155C297.444 332.71 296.188 332.447 295.659 331.611C296.199 331.174 296.819 330.723 297.511 330.779ZM192.49 306.825C189.666 307.978 188.673 311.584 189.092 314.605C189.512 317.625 190.937 320.427 191.45 323.434C191.884 325.98 191.65 328.587 191.727 331.169C191.744 331.739 192.062 332.522 192.602 332.339C195.662 325.462 189.191 317.157 192.005 310.176C192.445 309.086 193.097 307.831 192.49 306.825ZM256.623 330.705C257.019 330.995 257.415 331.284 257.81 331.574C257.399 332.571 255.707 332.608 255.252 331.63C255.545 331.218 256.017 330.937 256.519 330.877L256.623 330.705ZM250.419 331.103C250.097 332.214 248.525 332.719 247.616 332.002L247.484 331.939C247.337 330.505 249.787 329.807 250.419 331.103ZM374.72 330.934L374.577 331.115C374.242 332.362 372.306 332.754 371.512 331.736C371.864 330.444 373.801 329.96 374.72 330.934ZM362.302 323.632C363.132 325.336 361.962 327.332 360.644 328.695C358.064 331.362 353.627 333.211 350.772 330.84C351.14 327.431 353.31 324.269 356.359 322.699C358.35 321.674 361.321 321.619 362.302 323.632ZM311.453 330.259L311.514 330.363C311.992 330.265 312.505 330.345 312.93 330.584C313.02 331.907 310.622 332.303 310.282 331.021C310.672 330.767 311.062 330.513 311.453 330.259ZM270.749 331.123L270.691 331.082C270.304 332.208 268.208 331.818 268.251 330.628C268.69 329.511 270.769 329.922 270.749 331.123ZM320.056 330.6C319.753 331.017 319.275 331.302 318.764 331.371L318.666 331.592L316.9 330.736C317.505 329.625 319.358 329.546 320.056 330.6ZM244.348 330.645C243.596 331.356 242.457 331.631 241.463 331.341C240.792 330.439 241.971 328.943 243.005 329.384L243.034 329.307C243.709 329.142 244.159 329.976 244.348 330.645ZM290.991 330.603C290.626 331.19 289.877 331.511 289.199 331.37L289.229 331.317C288.567 331.209 288.65 330.067 289.281 329.841C289.913 329.614 290.603 330.056 290.991 330.603ZM277.985 330.592C277.567 331.501 276.057 331.532 275.553 330.697L275.513 330.621L275.567 330.518C276.059 329.685 277.555 329.698 277.985 330.592ZM263.468 330.094C263.116 330.682 262.369 331.002 261.701 330.852C261.363 330.482 261.519 329.792 261.982 329.603L261.935 329.522C262.478 329.228 263.251 329.516 263.468 330.094ZM304.35 329.149L305.561 330.037C304.925 331.101 303.121 331.134 302.447 330.093C302.809 329.501 303.561 329.177 304.24 329.321L304.35 329.149ZM397.235 319.022C394.695 321.236 392.155 323.449 389.616 325.663C388.887 326.298 388.117 327.397 388.777 328.103C392.628 325.958 395.914 322.809 398.22 319.052C398.256 318.628 397.556 318.742 397.235 319.022ZM451.541 301.349C449.665 302.334 447.381 301.76 445.279 302.032C443.178 302.303 440.922 304.479 442.057 306.268C443.077 306.786 444.212 305.94 445.244 305.446C447.816 304.215 451.015 305.277 453.085 307.238C455.154 309.2 456.344 311.889 457.483 314.504C456.711 315.998 454.494 314.791 452.816 314.687C450.607 314.549 448.685 316.747 446.5 316.397C445.375 316.217 444.481 315.396 443.497 314.822C442.513 314.248 441.135 313.964 440.324 314.763C439.927 315.154 439.764 315.717 439.616 316.254C438.794 319.233 438.111 322.832 440.236 325.076C441.052 325.938 442.17 326.442 443.274 326.88C444.539 327.38 445.913 327.829 447.237 327.52C448.562 327.212 449.728 325.853 449.339 324.55C448.175 325.168 446.689 325.132 445.556 324.457C446.266 323.736 446.976 323.015 447.685 322.294C446.573 321.377 445.79 320.069 445.508 318.655C447.607 318.452 449.781 319.437 451.013 321.148C451.065 319.601 451.986 318.112 453.347 317.375C453.336 319.372 453.326 321.37 453.315 323.368C454.15 321.962 454.984 320.557 455.819 319.151C457.872 318.882 460.023 319.474 461.65 320.754C458.704 321.603 455.919 323.004 453.481 324.862C452.5 325.61 451.522 327.046 452.385 327.928C458.244 326.289 464.624 324.278 467.898 319.15C470.839 314.542 470.264 307.983 466.565 303.958C462.867 299.933 456.38 298.806 451.541 301.349ZM408.799 301.153L401.68 304.929C400.61 305.497 399.488 306.078 398.277 306.099C397.066 306.119 395.749 305.384 395.538 304.191C395.429 303.573 395.624 302.928 395.495 302.314C395.365 301.699 394.62 301.137 394.134 301.536C394.503 303.328 393.488 305.07 392.86 306.788C392.232 308.506 392.186 310.837 393.778 311.739C399.894 315.207 404.575 321.125 406.543 327.875C409.637 323.358 412.85 318.487 412.927 313.013C412.349 312.217 411.089 312.804 410.383 313.489C409.678 314.174 408.647 314.973 407.839 314.411C406.814 313.698 407.809 312.11 408.849 311.418C409.889 310.725 411.154 309.513 410.445 308.484C409.842 307.607 408.422 308.018 407.666 308.768C406.911 309.518 406.337 310.551 405.326 310.883C404.314 311.215 402.975 309.949 403.734 309.203C405.495 307.471 407.255 305.738 409.016 304.006C409.513 303.517 410.041 302.966 410.097 302.271C410.153 301.576 409.415 300.826 408.799 301.153ZM184.041 316.878C183.207 316.82 183.098 318.082 183.375 318.871C184.34 321.614 185.985 324.115 188.121 326.087C189.127 325.698 188.721 324.19 188.144 323.279C186.788 321.137 185.42 319.004 184.041 316.878ZM393.454 317.588C390.805 319.547 388.155 321.506 385.505 323.466C385.304 324.045 385.491 324.738 385.957 325.138C389.701 323.104 393.144 320.519 396.141 317.492C395.786 316.505 394.298 316.964 393.454 317.588ZM319.501 323.244C319.393 323.783 318.807 324.12 318.257 324.126C317.804 323.602 317.928 322.689 318.505 322.306L318.514 322.354C319.007 322.11 319.609 322.704 319.501 323.244ZM263.286 322.537L263.309 322.537C263.596 323.086 263.306 323.855 262.728 324.079C262.313 323.802 262.036 323.328 261.999 322.83C262.172 322.335 262.915 322.166 263.286 322.537ZM305.435 323.249L305.474 323.325L305.422 323.428C304.93 324.261 303.433 324.249 303.004 323.354C303.421 322.446 304.932 322.414 305.435 323.249ZM248.736 321.533C249.146 321.842 249.429 322.315 249.506 322.823C249.199 323.236 248.723 323.519 248.214 323.591L248.231 323.64C247.674 323.714 247.253 323.008 247.435 322.476C247.617 321.944 248.183 321.632 248.736 321.533ZM275.839 321.298C276.436 321.62 277.032 321.941 277.629 322.262C277.001 322.704 276.373 323.147 275.746 323.589C274.924 323.301 274.908 321.887 275.723 321.58L275.839 321.298ZM298.735 322.849C298.064 323.847 296.338 323.831 295.685 322.821L296.719 321.786L296.703 321.624C297.544 321.561 298.398 322.076 298.735 322.849ZM269.592 321.886C269.988 322.176 270.384 322.466 270.779 322.755C270.368 323.752 268.676 323.789 268.221 322.811C268.514 322.399 268.986 322.119 269.488 322.058L269.592 321.886ZM313.26 322.811C312.843 323.719 311.332 323.75 310.829 322.916L310.788 322.839L310.842 322.737C311.335 321.904 312.831 321.916 313.26 322.811ZM256.383 323.402L256.284 323.371C255.627 323.777 254.625 323.117 254.738 322.352C255.33 321.587 256.829 322.544 256.383 323.402ZM292.021 322.296C291.667 322.89 290.913 323.216 290.237 323.067L290.244 323.075C289.821 322.798 289.543 322.313 289.516 321.808C289.959 320.694 292.029 321.097 292.021 322.296ZM283.081 321.368C283.485 321.664 283.888 321.959 284.292 322.255C283.656 323.32 281.852 323.353 281.178 322.312C281.54 321.72 282.292 321.396 282.971 321.54L283.081 321.368ZM386.745 313.25C384.401 315.366 382.214 317.656 380.208 320.095C381.003 321.3 382.678 321.659 384.082 321.325C385.486 320.99 386.686 320.107 387.843 319.243C389.345 318.123 390.847 317.003 392.348 315.883C392.687 315.63 393.051 315.339 393.128 314.923C393.272 314.157 392.281 313.59 391.53 313.796C390.778 314.001 390.252 314.654 389.732 315.234C387.922 317.253 385.569 318.779 382.987 319.607C384.08 317.324 385.892 315.392 388.101 314.155C387.821 313.666 387.303 313.321 386.745 313.25ZM228.825 304.315C225.862 307.515 223.425 311.201 221.641 315.18C221.033 316.536 220.49 318.037 220.841 319.481C223.503 315.487 226.113 311.459 228.672 307.398C229.285 306.426 229.798 304.93 228.825 304.315ZM312.52 315.402C313.163 315.664 313.523 316.47 313.29 317.123C312.749 317.411 312.104 317.495 311.507 317.355L311.511 317.371C311.092 317.081 310.811 316.6 310.766 316.093C311.056 315.463 311.878 315.14 312.52 315.402ZM283.489 315.312L283.466 315.338C284.074 315.644 284.405 316.412 284.21 317.063C283.741 317.638 282.663 317.478 282.38 316.793C282.098 316.107 282.752 315.234 283.489 315.312ZM292.631 272.008C291.886 274.565 289 276.29 286.394 275.735C287.027 277.093 286.957 278.757 286.212 280.057C284.371 278.937 281.12 279.632 281.268 281.782C281.338 282.794 282.157 283.564 282.709 284.414C283.262 285.265 283.45 286.618 282.569 287.121C281.089 287.965 279.404 285.124 277.893 285.91C276.663 286.551 277.445 288.379 278.069 289.618C278.693 290.857 277.976 293.124 276.784 292.414C275.548 291.679 273.765 292.091 272.978 293.295C272.19 294.499 272.526 296.298 273.696 297.136C270.959 296.146 268.452 300.161 269.913 302.678C268.239 302.407 266.506 302.515 264.878 302.99C266.041 304.146 266.292 306.111 265.457 307.522C264.211 306.79 262.966 306.058 261.721 305.326C260.773 307.349 259.825 309.372 258.877 311.395C258.807 309.918 258.664 308.278 257.571 307.284C256.512 306.32 254.322 306.786 254.25 308.158L254.25 308.294C254.334 310.069 251.121 309.945 250.589 308.249C250.057 306.552 251.207 304.831 252.294 303.424C250.798 303.642 249.302 303.86 247.807 304.078C249.482 302.204 248.993 298.849 246.852 297.532C245.775 299.786 244.676 302.127 244.624 304.625C244.572 307.123 245.868 309.832 248.242 310.611C249.619 311.062 249.929 312.814 250.631 314.082C251.916 316.403 254.946 317.283 257.562 316.843C260.179 316.404 262.484 314.923 264.707 313.476C266.002 312.633 267.436 311.559 267.509 310.016C267.623 307.622 270.638 306.798 272.828 305.826C276.862 304.034 279.344 299.997 281.577 296.19C282.788 294.124 284.017 291.55 282.839 289.465C285.221 288.524 287.137 286.475 287.918 284.036C288.468 282.318 288.623 280.219 290.144 279.25C291.369 278.469 292.965 278.791 294.375 279.14C299.274 280.35 304.787 282.045 306.931 286.612C307.518 287.862 308.923 289.54 309.809 288.48C307.287 282.201 302.913 276.679 297.378 272.786C298.184 273.88 296.519 275.395 295.22 274.996C293.921 274.596 293.207 273.239 292.631 272.008ZM298.204 316.121C297.661 316.901 296.467 317.129 295.674 316.606L295.272 316.596C295.372 315.239 297.68 314.865 298.204 316.121ZM304.948 315.602C304.404 316.382 303.211 316.611 302.418 316.087L302.016 316.077C302.116 314.72 304.424 314.347 304.948 315.602ZM277.941 314.949L277.98 315.025L277.928 315.128C277.436 315.961 275.939 315.949 275.51 315.054C275.927 314.146 277.438 314.114 277.941 314.949ZM291.948 314.949L291.986 315.024L291.935 315.128C291.442 315.961 289.946 315.949 289.516 315.054C289.934 314.146 291.444 314.114 291.948 314.949ZM446.395 308.086C446.206 308.415 446.204 308.815 446.207 309.194C446.217 310.286 446.226 311.378 446.236 312.47C446.244 313.43 447.057 314.79 447.755 314.13C449.233 312.734 451.296 311.978 453.326 312.087C452.526 310.062 450.825 308.412 448.776 307.675C447.95 307.378 446.832 307.325 446.395 308.086ZM188.615 292.583C183.11 296.027 181.185 302.997 179.739 309.328C179.4 310.811 179.396 312.888 180.869 313.268C181.776 306.101 184.671 299.197 189.146 293.526C189.402 293.201 188.98 292.779 188.615 292.583ZM426.862 308.215C426.94 308.878 427.744 309.143 428.401 309.26C432.697 310.029 436.993 310.798 441.289 311.567C442.025 311.699 442.845 311.815 443.467 311.401C444.089 310.988 444.151 309.817 443.43 309.622C438.051 308.164 432.409 307.685 426.862 308.215ZM304.752 309.111C305.022 309.45 305.111 309.925 304.981 310.338C304.229 311.012 302.821 310.604 302.545 309.633L302.639 309.542C303.213 309.061 304.035 308.893 304.752 309.111ZM291.576 308.287C291.602 309.226 291.049 310.158 290.211 310.584C289.802 310.295 289.526 309.826 289.47 309.329L289.425 309.33C289.432 308.342 290.795 307.681 291.576 308.287ZM387.163 306.335C386.468 307.562 386.518 309.058 386.587 310.467C388.031 310.951 389.776 309.797 389.896 308.279L390.087 308.297C390.301 307.265 390.514 306.232 390.728 305.2C389.594 304.361 387.858 305.107 387.163 306.335ZM299.576 308.803C299.525 309.79 298.221 310.454 297.393 309.916C296.564 309.378 296.641 307.918 297.521 307.469C298.401 307.02 299.628 307.817 299.576 308.803ZM312.278 308.285L312.287 308.354C313.107 307.921 313.415 309.709 312.542 310.022C311.838 309.817 311.667 308.691 312.278 308.285ZM284.779 308.81C284.407 309.398 283.657 309.719 282.975 309.584L282.949 309.771C282.091 309.498 282.027 308.075 282.821 307.648C283.615 307.222 284.717 307.911 284.779 308.81ZM209.238 293.805C205.873 297.115 202.865 300.787 200.283 304.737C199.692 305.641 199.242 307.088 200.195 307.596C202.93 304.099 205.665 300.602 208.4 297.105C209.151 296.145 209.926 294.811 209.238 293.805ZM279.664 262.173C272.861 273.703 261.932 282.068 251.773 290.786C249.957 292.344 248.071 295.122 249.767 296.809C250.461 295.805 251.317 294.702 252.534 294.61C253.751 294.518 254.805 296.34 253.76 296.971C252.15 297.941 251.679 300.383 252.812 301.882C253.484 300.969 254.38 300.221 255.398 299.723C256.492 299.951 256.615 301.422 256.726 302.534C256.836 303.646 257.905 305.01 258.792 304.329C258.352 302.524 258.789 300.526 259.941 299.068C260.665 300.287 261.389 301.506 262.112 302.726C263.191 302.737 263.463 301.217 263.256 300.159C263.049 299.101 262.891 297.688 263.874 297.245C264.74 296.854 265.653 297.641 266.278 298.357C266.784 297.129 266.703 295.674 266.063 294.51C267.71 294.793 269.486 293.748 270.038 292.171C270.591 290.593 269.856 288.669 268.392 287.862C269.407 286.451 272.104 287.135 272.324 288.858C274.381 287.533 275.325 284.711 274.478 282.416C274.117 281.438 275.735 281.093 276.759 281.284C277.783 281.474 279.366 280.739 278.72 279.922C277.859 278.834 277.697 277.137 278.599 276.082C279.5 275.027 281.486 275.075 282.118 276.31C283.297 276.741 283.836 274.797 283.401 273.621C282.966 272.444 282.43 270.804 283.529 270.199C285.027 269.372 286.206 272.129 287.911 272.287C288.106 270.242 288.301 268.196 288.496 266.151C289.96 268.441 292.764 269.799 295.468 269.528C293.082 266.612 290.207 264.097 287 262.119C284.671 260.682 281.055 259.817 279.664 262.173ZM284.011 301.902C284.326 302.41 284.408 303.057 284.23 303.628L284.437 303.824C283.857 304.303 282.816 303.946 282.653 303.211C282.49 302.476 283.282 301.712 284.011 301.902ZM232.416 286.38L225.577 301.51C225.28 302.165 225.178 303.222 225.888 303.335C229.805 297.955 232.629 291.782 234.141 285.301C233.524 284.812 232.741 285.662 232.416 286.38ZM291.919 302.053C291.598 303.164 290.025 303.669 289.117 302.952L288.984 302.889C288.838 301.455 291.288 300.757 291.919 302.053ZM304.504 301.033C305.073 301.775 304.542 303.054 303.615 303.176C302.688 303.297 301.846 302.198 302.204 301.335C302.562 300.471 303.935 300.291 304.504 301.033ZM297.768 301.519L297.729 301.562C297.862 301.994 297.778 302.487 297.51 302.851C296.886 302.957 296.234 302.889 295.646 302.656C295.607 301.659 296.96 300.934 297.768 301.519ZM439.845 260.675C431.492 262.227 424.285 269.204 422.943 277.593C421.601 285.982 426.565 295.1 434.515 298.094C434.912 298.243 435.333 298.38 435.752 298.317C436.699 298.174 437.189 297.135 437.517 296.236C437.887 295.223 438.263 294.166 438.151 293.093C438.04 292.02 437.285 290.932 436.213 290.817C435.246 290.712 433.768 291.068 433.685 290.1C434.712 289.42 435.739 288.74 436.766 288.06C435.977 287.018 435.472 285.763 435.319 284.466C435.759 283.114 437.917 284.188 438.303 285.556C438.689 286.923 438.757 288.735 440.098 289.205C441.57 288.073 441.086 285.753 440.294 284.073C439.503 282.394 438.54 280.411 439.461 278.799L441.797 282.123C442.783 280.662 442.583 278.516 441.346 277.262C441.95 276.515 443.004 276.165 443.936 276.4C443.659 274.891 445.453 273.445 446.868 274.035C446.104 275.252 446.085 276.9 446.823 278.134C447.163 276.901 449.183 276.66 449.803 277.778C447.339 278.747 445.603 281.065 444.707 283.557C443.811 286.049 443.64 288.734 443.478 291.377C443.461 291.651 443.473 291.983 443.711 292.121C443.928 292.246 444.201 292.128 444.418 292.001C446.924 290.54 448.703 287.893 449.109 285.021C449.302 283.656 449.859 281.71 451.191 282.061C451.201 283.746 451.211 285.431 451.221 287.116C452.756 285.332 455.068 284.241 457.421 284.189C456.336 286.204 454.437 287.764 452.251 288.438C453.091 289.357 454.502 289.703 455.672 289.278C456.373 289.856 455.805 291.103 454.943 291.39C454.081 291.678 453.151 291.38 452.255 291.228C448.094 290.521 443.651 293.55 442.788 297.681C442.589 298.637 442.898 300.003 443.873 299.966C450.371 299.724 456.936 297.262 461.338 292.476C465.74 287.69 467.632 280.454 465.295 274.386C464.613 272.616 463.606 270.983 462.433 269.493C457.179 262.817 448.197 259.124 439.845 260.675ZM304.237 295.087C304.825 295.465 305.149 296.215 305.022 296.903C304.461 297.172 303.812 297.255 303.202 297.135C302.951 296.763 302.862 296.286 302.963 295.849L302.947 295.852C303.251 295.438 303.728 295.155 304.237 295.087ZM291.261 294.047C292.003 294.603 291.84 295.966 290.988 296.331C290.136 296.696 289.037 295.873 289.147 294.953C289.257 294.032 290.519 293.492 291.261 294.047ZM199.129 290.36C197.821 292.049 196.512 293.737 195.204 295.426C195.317 296.245 196.581 296.059 197.244 295.563C198.801 294.4 200.001 292.764 200.642 290.929C200.777 290.542 200.86 290.043 200.545 289.78C200.105 289.414 199.48 289.907 199.129 290.36ZM298.557 294.036C299.091 295.119 297.022 296.139 296.488 295.056C295.954 293.973 298.023 292.952 298.557 294.036ZM298.775 289.607C298.062 290.641 296.323 290.714 295.526 289.744L295.699 289.64C296.353 288.615 298.1 288.597 298.775 289.607ZM240.698 281.375C237.992 283.316 237.226 286.94 236.665 290.222L237.741 290.4C239.013 287.496 240.005 284.469 240.698 281.375ZM291.791 287.312C292.439 287.608 292.678 288.548 292.251 289.118C291.824 289.688 290.854 289.722 290.388 289.184L290.415 289.08C290.649 288.355 291.145 287.717 291.791 287.312ZM202.593 276.655C199.596 277.814 196.814 279.403 194.288 281.332L194.074 281.497L194.694 281.175C196.995 279.962 199.259 278.681 201.484 277.334L202.593 276.655ZM252.284 268.82C248.793 271.18 246.708 275.07 244.757 278.805C244.413 279.463 244.156 280.448 244.809 280.801C248.048 277.344 250.603 273.249 252.284 268.82ZM258.294 279.538C257.838 279.535 257.511 279.968 257.305 280.374L258.581 280.608L258.552 280.429C258.997 280.333 258.749 279.541 258.294 279.538ZM212.518 271.777C210.576 272.635 209.359 274.89 209.706 276.984C211.254 275.686 212.282 273.783 212.518 271.777ZM257.597 275.242C257.354 275.648 257.616 276.259 258.078 276.362C258.495 276.071 258.779 275.596 258.838 275.091L258.812 275.136C258.502 274.778 257.841 274.835 257.597 275.242ZM231.854 264.959C229.389 267.112 227.635 270.067 226.925 273.262C229.372 271.092 231.121 268.146 231.854 264.959ZM251.214 263.632C249.153 265.673 247.397 268.02 246.021 270.573C245.658 271.247 245.471 272.333 246.202 272.56C248.69 269.521 251.178 266.481 253.666 263.442C253.46 262.452 251.932 262.921 251.214 263.632ZM232.773 257.692C229.006 259.439 225.855 262.481 223.977 266.184C223.315 267.488 222.8 268.913 222.852 270.374C226.159 266.147 229.466 261.919 232.773 257.692ZM466.434 234.239C467.445 234.324 468.332 234.914 469.169 235.486C471.288 236.933 473.408 238.38 475.527 239.826C479.165 242.31 482.844 244.83 485.751 248.14C487.73 250.392 489.387 253.437 488.458 256.287C488.126 257.304 487.487 258.202 487.179 259.226C486.87 260.251 487.007 261.549 487.913 262.119C489.312 262.999 490.177 264.826 489.61 266.379C489.043 267.933 486.832 268.728 485.583 267.644C482.538 265.002 477.867 264.421 474.268 266.238C471.551 267.61 468.545 265.134 466.508 262.871C466.282 262.62 466.044 262.345 466.004 262.009C465.894 261.086 467.311 260.729 468.086 261.241C468.862 261.753 469.276 262.674 470.005 263.25C472.482 265.209 475.917 262.074 479.071 262.234C482.262 262.396 484.861 265.98 487.968 265.233C485.75 262.833 483.128 260.807 480.247 259.267C480.314 258.198 481.925 258.479 482.996 258.487C485.071 258.504 486.429 256.02 486.058 253.977C485.687 251.935 484.182 250.313 482.743 248.816C479.934 245.895 476.909 242.844 472.977 241.859C471.77 241.556 470.293 241.292 469.849 240.13C469.018 237.956 466.564 236.532 464.263 236.889C461.963 237.247 460.057 239.349 459.926 241.673C459.108 241.324 458.546 240.572 457.86 240.005C456.009 238.475 453.083 238.442 451.198 239.93C449.314 241.418 448.667 244.272 449.725 246.428C448.374 246.159 447.272 247.792 447.503 249.15C447.733 250.509 448.788 251.555 449.789 252.503C452.529 255.097 455.608 257.843 459.376 258.038C460.548 258.098 461.841 257.933 462.788 258.626C463.735 259.319 463.498 261.306 462.331 261.178C456.05 260.49 450.093 257.202 446.163 252.255C444.591 250.277 443.499 247.029 445.525 245.521C446.855 244.531 446.687 242.533 447.225 240.965C448.161 238.237 451.28 236.92 454.142 236.556C457.003 236.191 459.996 236.432 462.68 235.375C463.91 234.891 465.117 234.129 466.434 234.239ZM323.972 216.604L323.641 216.994C313.673 228.738 304.712 242.093 290.13 242.39C287.91 247.612 285.69 252.834 283.47 258.056C283.844 258.174 284.213 258.299 284.579 258.43C286.411 253.657 287.994 251.302 289.328 251.365C296.938 251.719 310.108 248.412 315.045 240.319C315.862 238.98 316.561 237.507 317.188 236.027C316.445 236.293 315.342 236.522 314.472 236.278C313.051 235.88 312.009 234.23 312.073 234.058C312.137 233.886 313.338 235.115 314.776 235.464C315.667 235.68 316.73 235.591 317.39 235.545C319.146 231.287 320.334 227.077 321.981 225.908L322.463 225.494C324.41 223.834 324.492 222.203 323.819 219.179C323.642 218.382 323.741 217.57 323.972 216.604ZM326.979 190.212C320.144 198.976 309.499 203.794 299.053 207.589C283.767 213.141 267.945 217.219 251.878 219.746C247.207 220.481 241.448 220.634 238.857 216.679C237.572 218.104 233.583 224.392 232.416 225.44C228.212 229.214 225.271 226.997 223.265 230.782C219.502 237.885 228.783 237.277 232.539 236.316C244.932 233.142 257.946 234.161 270.488 236.681C281.099 238.813 292.75 241.532 302.233 236.316C311.896 231 315.897 219.241 323.846 211.596C331.861 203.886 342.973 201.154 349.225 191.957C349.731 191.211 350.213 190.323 349.988 189.45C349.67 188.22 348.2 187.757 346.956 187.498C339.687 185.986 331.545 184.358 326.979 190.212ZM317.225 176.719C311.76 182.594 304.374 186.271 297.007 189.45C279.254 197.112 260.574 202.621 241.504 205.818C241.484 208.793 241.463 211.767 241.443 214.742C241.426 217.072 244.654 217.676 246.975 217.461C269.818 215.346 292.254 208.915 312.749 198.607C317.769 196.083 322.939 193.067 325.582 188.107C320.968 186.277 317.587 181.67 317.225 176.719ZM453.758 183.161C451.295 193.367 448.832 203.574 446.368 213.78C446.265 214.207 446.167 214.68 446.375 215.067C446.682 215.642 447.462 215.714 448.114 215.714C453.659 215.711 459.203 215.708 464.748 215.704C465.332 215.704 465.972 215.684 466.41 215.299C466.779 214.975 466.916 214.469 467.035 213.993C469.627 203.646 472.218 193.3 474.81 182.953C475.16 181.556 473.187 180.855 471.748 180.804C467.86 180.665 463.973 180.526 460.085 180.387C457.581 180.297 454.345 180.725 453.758 183.161ZM477.133 183.668L469.945 212.689C469.697 213.691 469.561 214.991 470.443 215.527C471.747 216.319 473.001 214.425 473.369 212.944C475.738 203.4 478.108 193.855 480.477 184.31C480.77 183.131 480.841 181.502 479.694 181.1C478.401 180.646 477.463 182.338 477.133 183.668ZM269.163 153.538C258.888 155.8 248.563 160.932 243.396 170.097C238.444 178.878 239.071 189.61 239.84 199.662C239.933 200.89 240.14 202.308 241.199 202.935C241.992 203.405 242.992 203.251 243.897 203.078C261.59 199.683 278.908 194.337 295.436 187.167C302.661 184.032 309.923 180.412 315.203 174.568C313.009 165.471 305.523 158.204 296.803 154.808C288.082 151.413 278.302 151.526 269.163 153.538ZM496.592 64.4498C488.871 105.179 481.15 136.312 473.428 176.649L472.954 179.137L473.45 176.771C481.522 138.381 489.594 109.196 497.665 70.415C498.103 68.3134 498.349 65.6843 496.592 64.4498ZM488.369 64.4762C487.113 65.7943 486.711 67.6845 486.361 69.4708C478.644 108.805 470.926 138.14 463.209 177.474C464.521 179.277 467.521 178.898 469.081 177.305C470.641 175.712 471.142 173.393 471.575 171.205C478.721 135.158 485.858 109.108 492.986 73.0563C493.372 71.1058 493.758 69.1465 493.849 67.1604C493.896 66.1251 493.833 65.0022 493.182 64.1955C492.04 62.7785 489.624 63.1581 488.369 64.4762Z",
                        fill: "#00160A",
                      }),
                      Object(r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d:
                          "M418.401 234.615C419.267 233.873 420.308 235.257 421.287 235.842C422.638 236.65 424.473 235.816 425.91 236.461C428.063 237.427 427.552 240.869 425.732 242.372C423.912 243.875 421.427 244.25 419.346 245.363C417.467 246.368 415.925 247.972 413.941 248.747C409.913 250.322 404.799 247.365 404.154 243.088C403.509 238.811 407.523 234.478 411.837 234.795C414.095 234.961 416.681 236.086 418.401 234.615ZM409.349 245.732C409.816 246.185 410.34 246.664 410.989 246.712C411.468 246.748 411.927 246.538 412.361 246.333C416.934 244.161 421.418 241.805 425.8 239.27C424.174 237.779 421.605 239.105 419.85 240.442C419.269 240.884 418.376 240.249 418.299 239.523C418.223 238.796 418.654 238.124 419.067 237.522C417.173 238.67 414.766 238.062 412.571 237.77C410.375 237.479 407.626 237.869 406.807 239.927C405.976 242.017 407.734 244.168 409.349 245.732Z",
                        fill: "#E7EAEE",
                      }),
                    ],
                  }),
                }),
                Object(r.jsxs)(gt.a, {
                  flexDirection: "column",
                  justifyContent: "center",
                  maxW: "60rem",
                  children: [
                    Object(r.jsx)(I, {
                      headingType: C.article,
                      children: "Make your data come to life",
                    }),
                    Object(r.jsx)(xt, {
                      mt: 3,
                      children:
                        "Make your data come to life Dashboards automatically populate your project data into powerful, infographic powerhouse. Assign tasks or add custom fields to see the state of your team\u2019s woirk in real-time and quickly pinpoint issues.",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        qt = n(696),
        Qt = n(676),
        Ut = function () {
          var e,
            t,
            n,
            C,
            a = st({
              variables: {
                projectId: Object(u.h)().pathname.split("/").pop() || "",
              },
            }),
            i = a.data;
          return a.loading
            ? Object(r.jsx)(Tt, {})
            : Object(r.jsx)(Jt.a, {
                maxW: "60%",
                children: Object(r.jsxs)(gt.a, {
                  boxShadow: "lg",
                  borderRadius: "12px",
                  border: "1px",
                  borderColor: "achromatic.200",
                  pt: 4,
                  pb: 4,
                  children: [
                    Object(r.jsxs)(qt.b, {
                      direction: "row",
                      h: "100px",
                      p: 2,
                      w: "25%",
                      justifyContent: "center",
                      textAlign: "center",
                      flexDirection: "column",
                      children: [
                        Object(r.jsx)(ht.a, {
                          fontSize: "2rem",
                          fontWeight: "bold",
                          color: "achromatic.700",
                          children:
                            null === i ||
                            void 0 === i ||
                            null === (e = i.reportSummary.taskCountSummary) ||
                            void 0 === e
                              ? void 0
                              : e.totalTasksCount,
                        }),
                        Object(r.jsx)(ht.a, {
                          fontSize: "sm",
                          color: "achromatic.600",
                          children: "Total Task",
                        }),
                      ],
                    }),
                    Object(r.jsxs)(qt.b, {
                      direction: "row",
                      h: "100px",
                      w: "25%",
                      children: [
                        Object(r.jsx)(ft.a, {
                          orientation: "vertical",
                          borderLeftWidth: "2px",
                        }),
                        Object(r.jsxs)(Qt.a, {
                          flexDirection: "column",
                          width: "100%",
                          mr: "0.5rem",
                          children: [
                            Object(r.jsx)(ht.a, {
                              fontSize: "2rem",
                              fontWeight: "bold",
                              children:
                                null === i ||
                                void 0 === i ||
                                null ===
                                  (t = i.reportSummary.taskCountSummary) ||
                                void 0 === t
                                  ? void 0
                                  : t.incompleteTasksCount,
                            }),
                            Object(r.jsx)(ht.a, {
                              fontSize: "sm",
                              color: "achromatic.600",
                              children: "Incompleted Task",
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(r.jsxs)(qt.b, {
                      direction: "row",
                      h: "100px",
                      w: "25%",
                      children: [
                        Object(r.jsx)(ft.a, {
                          orientation: "vertical",
                          borderLeftWidth: "2px",
                        }),
                        Object(r.jsxs)(Qt.a, {
                          flexDirection: "column",
                          width: "100%",
                          mr: "0.5rem",
                          children: [
                            Object(r.jsx)(ht.a, {
                              fontSize: "2rem",
                              fontWeight: "bold",
                              children:
                                null === i ||
                                void 0 === i ||
                                null ===
                                  (n = i.reportSummary.taskCountSummary) ||
                                void 0 === n
                                  ? void 0
                                  : n.completedTasksCount,
                            }),
                            Object(r.jsx)(ht.a, {
                              fontSize: "sm",
                              color: "achromatic.600",
                              children: "Completed Task",
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(r.jsxs)(qt.b, {
                      direction: "row",
                      h: "100px",
                      w: "25%",
                      children: [
                        Object(r.jsx)(ft.a, {
                          orientation: "vertical",
                          borderLeftWidth: "2px",
                        }),
                        Object(r.jsxs)(Qt.a, {
                          flexDirection: "column",
                          width: "100%",
                          mr: "0.5rem",
                          children: [
                            Object(r.jsx)(ht.a, {
                              fontSize: "2rem",
                              fontWeight: "bold",
                              children:
                                null === i ||
                                void 0 === i ||
                                null ===
                                  (C = i.reportSummary.taskCountSummary) ||
                                void 0 === C
                                  ? void 0
                                  : C.overdueTasksCount,
                            }),
                            Object(r.jsx)(ht.a, {
                              fontSize: "sm",
                              color: "achromatic.600",
                              children: "Overdue Task",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              });
        },
        Ht = n(677),
        Pt = n(131),
        Kt = function (e, t) {
          if ("incompleteTaskStatus" === e)
            return t
              ? {
                  labels: Object.keys(t),
                  datasets: [
                    {
                      data: Object.values(t),
                      backgroundColor: [
                        "#31D5BF",
                        "#9F7AEA",
                        "#EE8030",
                        "#3949AB",
                        "#76B515",
                      ],
                      hoverBackgroundColor: [
                        "#E9E9E9",
                        "#E9E9E9",
                        "#E9E9E9",
                        "#E9E9E9",
                        "#E9E9E9",
                      ],
                      barPercentage: 0,
                      barThickness: 50,
                      maxBarThickness: 50,
                      minBarLength: 25,
                    },
                  ],
                }
              : null;
          if ("tasksByAssignee" === e && Array.isArray(t)) {
            var n = ["#31D5BF", "#3949AB", "#76B515"],
              C = ["#CDF1EC", "#933183", "#FFE81D"],
              r = t.map(function (e, n) {
                var C,
                  r =
                    null === (C = t[n].username) || void 0 === C
                      ? void 0
                      : C.split(" ");
                return r
                  ? r.length > 1
                    ? ""
                        .concat(r[0].toUpperCase(), " ")
                        .concat(r[1][0].toUpperCase(), ".")
                    : r[0].toUpperCase()
                  : null;
              }),
              a = [
                t.map(function (e) {
                  return e.incompleteTasksCount;
                }),
                t.map(function (e) {
                  return e.completedTasksCount;
                }),
                t.map(function (e) {
                  return e.overdueTasksCount;
                }),
              ],
              i = ["Complete", "Incomplete", "Overdue"];
            return {
              labels: r,
              datasets: [
                "incompleteTasksCount",
                "completedTasksCount",
                "overdueTasksCount",
              ].map(function (e, t) {
                return {
                  label: i[t],
                  data: a[t],
                  backgroundColor: n[t],
                  hoverBackgroundColor: C[t],
                  hoverBorderWidth: 1,
                  hoverBorderColor: "lightgrey",
                  barPercentage: 0,
                  barThickness: 50,
                  maxBarThickness: 50,
                  minBarLength: 25,
                };
              }),
            };
          }
          return "taskCountSummary" === e
            ? t
              ? {
                  labels: ["Incomplete", "Complete", "Overdue"],
                  datasets: [
                    {
                      backgroundColor: [
                        "#31D5BF",
                        "#9F7AEA",
                        "#EE8030",
                        "#3949AB",
                        "#76B515",
                      ],
                      data: [
                        t.incompleteTasksCount,
                        t.completedTasksCount,
                        t.overdueTasksCount,
                      ],
                    },
                  ],
                }
              : null
            : {};
        },
        Xt = n(131).Chart,
        $t = function (e) {
          var t = e.variant,
            n = e.data,
            C = Object(Z.a)(e, ["variant", "data"]);
          if ("taskCountSummary" === t) {
            var a = Xt.controllers.doughnut.prototype.draw;
            return (
              Xt.helpers.extend(Xt.controllers.doughnut.prototype, {
                draw: function () {
                  a.apply(this, arguments);
                  var e = this.chart,
                    t = e.width,
                    n = e.height,
                    C = e.ctx,
                    r = (n / 228).toFixed(2);
                  (C.font = "".concat(r, "em sans-serif")),
                    (C.textBaseline = "middle");
                  var i = new Date().getDate(),
                    o = new Date().getMonth() + 1,
                    c = "".concat(o, "/").concat(i),
                    s = Math.round((t - C.measureText(c).width) / 2),
                    l = n / 1.8;
                  C.fillText(c, s, l);
                },
              }),
              Object(r.jsx)(r.Fragment, {
                children: Object(r.jsx)(Pt.Doughnut, {
                  data: Kt(t, n),
                  options: {
                    title: {
                      display: !0,
                      text: "Task Count Summary",
                      fontSize: 24,
                    },
                  },
                  legend: { display: !1 },
                }),
              })
            );
          }
          if ("tasksByAssignee" === t) {
            return Object(r.jsx)(r.Fragment, {
              children: Object(r.jsx)(
                Pt.Bar,
                Object(p.a)(
                  {
                    data: Kt(t, n),
                    options: {
                      title: {
                        display: !0,
                        text: "Tasks By Assignee",
                        fontSize: 24,
                      },
                      scales: {
                        xAxes: [{ stacked: !0, gridLines: { display: !1 } }],
                        yAxes: [
                          {
                            display: !1,
                            stacked: !0,
                            gridLines: { display: !1 },
                            ticks: { beginAtZero: !0 },
                          },
                        ],
                      },
                    },
                    legend: { display: !1 },
                  },
                  C
                )
              ),
            });
          }
          if ("incompleteTaskStatus" === t) {
            return Object(r.jsx)(r.Fragment, {
              children: Object(r.jsx)(Pt.Bar, {
                data: Kt(t, n),
                options: {
                  title: {
                    display: !0,
                    text: "Incomplete Tasks",
                    fontSize: 24,
                  },
                  scales: {
                    xAxes: [{ maxTicksLimit: 4, gridLines: { display: !1 } }],
                    yAxes: [
                      {
                        display: !0,
                        ticks: {
                          beginAtZero: !0,
                          autoSkip: !0,
                          maxTicksLimit: 3,
                        },
                      },
                    ],
                  },
                },
                legend: { display: !1 },
              }),
            });
          }
          return Object(r.jsx)(Dt.a, {});
        };
      !(function (e) {
        (e.taskCountSummary = "taskCountSummary"),
          (e.tasksByAssignee = "tasksByAssignee"),
          (e.incompleteTaskStatus = "incompleteTaskStatus");
      })(Gt || (Gt = {}));
      var _t,
        en,
        tn = function () {
          var e = st({
              variables: {
                projectId: Object(u.h)().pathname.split("/").pop() || "",
              },
            }),
            t = e.data;
          return e.loading
            ? Object(r.jsx)(Tt, {})
            : Object(r.jsx)(r.Fragment, {
                children: Object(r.jsx)($t, {
                  variant: Gt.incompleteTaskStatus,
                  data:
                    null === t || void 0 === t
                      ? void 0
                      : t.reportSummary.incompleteTaskStatus,
                }),
              });
        },
        nn = function () {
          var e = st({
              variables: {
                projectId: Object(u.h)().pathname.split("/").pop() || "",
              },
            }),
            t = e.data,
            n = e.loading;
          return (
            console.log("chartSummary", t),
            n
              ? Object(r.jsx)(Tt, {})
              : Object(r.jsx)(r.Fragment, {
                  children: Object(r.jsx)($t, {
                    variant: Gt.taskCountSummary,
                    data:
                      null === t || void 0 === t
                        ? void 0
                        : t.reportSummary.taskCountSummary,
                  }),
                })
          );
        },
        Cn = function () {
          var e = st({
              variables: {
                projectId: Object(u.h)().pathname.split("/").pop() || "",
              },
            }),
            t = e.data;
          return e.loading
            ? Object(r.jsx)(Tt, {})
            : Object(r.jsx)(r.Fragment, {
                children: Object(r.jsx)($t, {
                  variant: Gt.tasksByAssignee,
                  data:
                    null === t || void 0 === t
                      ? void 0
                      : t.reportSummary.tasksByAssignee,
                }),
              });
        },
        rn = function () {
          return Object(r.jsx)(Qt.a, {
            children: Object(r.jsxs)(Ht.a, {
              templateRows: "repeat(3, 1fr)",
              templateColumns: "repeat(2, 1fr)",
              gap: 4,
              h: "40rem",
              w: "60%",
              children: [
                Object(r.jsx)(Ht.b, {
                  rowSpan: 1,
                  colSpan: 1,
                  boxShadow: "lg",
                  borderRadius: "8px",
                  p: 9,
                  children: Object(r.jsx)(tn, {}),
                }),
                Object(r.jsx)(Ht.b, {
                  rowSpan: 1,
                  colSpan: 1,
                  boxShadow: "lg",
                  borderRadius: "8px",
                  p: 9,
                  alignItems: "center",
                  children: Object(r.jsx)(Cn, {}),
                }),
                Object(r.jsx)(Ht.b, {
                  rowSpan: 1,
                  colSpan: 2,
                  boxShadow: "lg",
                  borderRadius: "8px",
                  p: 9,
                  children: Object(r.jsx)(nn, {}),
                }),
              ],
            }),
          });
        },
        an = function (e) {
          var t = Object.assign({}, e);
          return Object(r.jsx)(r.Fragment, {
            children: Object(r.jsxs)(L.a, {
              children: [
                Object(r.jsx)(bt, Object(p.a)({}, t)),
                Object(r.jsx)(M, Object(p.a)({}, t)),
                Object(r.jsx)(L.a, {
                  display: "flex",
                  children: Object(r.jsxs)(L.a, {
                    w: "100%",
                    p: 9,
                    ml: 210,
                    mt: 50,
                    children: [
                      Object(r.jsx)(Ot, {}),
                      Object(r.jsx)(L.a, {
                        mt: 9,
                        children: Object(r.jsx)(Ft, {}),
                      }),
                      Object(r.jsx)(L.a, {
                        mt: 9,
                        children: Object(r.jsx)(Wt, {}),
                      }),
                      Object(r.jsx)(L.a, {
                        mt: 9,
                        children: Object(r.jsx)(Nt, {}),
                      }),
                      Object(r.jsx)(L.a, {
                        mt: 9,
                        children: Object(r.jsx)(Ut, {}),
                      }),
                      Object(r.jsx)(L.a, {
                        mt: 9,
                        mb: 20,
                        children: Object(r.jsx)(rn, {}),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        on = n(685),
        cn = n(10),
        sn = n.n(cn),
        ln = n(20),
        dn = n(691),
        un = n(113),
        jn = n(249),
        bn = n(115),
        pn = n(678),
        Ln = n(679),
        mn = n(680),
        hn = n(681),
        xn = n(682),
        On = function (e) {
          var t,
            n = e.label,
            C = e.fontSize,
            a = void 0 === C ? "md" : C,
            i = e.isEditable,
            o = e.isLabelNonVisible,
            c = e.fontWeight,
            s = void 0 === c ? "normal" : c,
            l = e.autoCompleteDisable,
            d = (e.size, e.iconType),
            u = Object(Z.a)(e, [
              "label",
              "fontSize",
              "isEditable",
              "isLabelNonVisible",
              "fontWeight",
              "autoCompleteDisable",
              "size",
              "iconType",
            ]),
            j = Object(un.c)(u),
            b = Object(pt.a)(j, 2),
            L = b[0],
            m = b[1].error;
          return (
            "email" === d && (t = Object(r.jsx)(jn.b, { size: "1.6rem" })),
            "password" === d && (t = Object(r.jsx)(jn.a, { size: "1.6rem" })),
            Object(r.jsxs)(bn.a, {
              isInvalid: !!m,
              children: [
                Object(r.jsx)(pn.a, {
                  htmlFor: L.name,
                  fontWeight: "normal",
                  mb: ".2rem",
                  mt: "2",
                  color: "achromatic.600",
                  fontSize: ".9rem",
                  display: o ? "none" : "block",
                  children: n,
                }),
                Object(r.jsxs)(Ln.a, {
                  children: [
                    d
                      ? Object(r.jsx)(mn.a, {
                          width: "3rem",
                          px: "9px",
                          color: "achromatic.600",
                          pointerEvents: "none",
                          children: t,
                        })
                      : null,
                    Object(r.jsx)(
                      hn.a,
                      Object(p.a)(
                        Object(p.a)(Object(p.a)({}, L), u),
                        {},
                        {
                          id: L.name,
                          fontSize: a,
                          autoComplete: l ? "off" : "on",
                          fontWeight: s,
                          borderColor: i ? "transparent" : "achromatic.400",
                        }
                      )
                    ),
                  ],
                }),
                m ? Object(r.jsx)(xn.a, { children: m }) : null,
              ],
            })
          );
        },
        gn = n(683),
        fn = n(386);
      ((en = _t || (_t = {})).primary = "primary"),
        (en.danger = "danger"),
        (en.white = "white"),
        (en.gray = "gray");
      var Mn,
        vn,
        Zn,
        An,
        wn = function (e) {
          var t = e.buttontype,
            n = e.children,
            C = Object(Z.a)(e, ["buttontype", "children"]),
            a = { buttontype: t };
          return Object(r.jsx)(r.Fragment, {
            children: Object(r.jsx)(
              fn.a,
              Object(p.a)(
                Object(p.a)(
                  Object(p.a)(
                    {
                      bgColor:
                        t === _t.primary
                          ? "primary.200"
                          : t === _t.danger
                          ? "fail"
                          : t === _t.white
                          ? "achromatic.100"
                          : t === _t.gray
                          ? "achromatic.500"
                          : "primary.200",
                      color:
                        t === _t.white ? "achromatic.700" : "achromatic.100",
                      borderRadius: "full",
                    },
                    a
                  ),
                  C
                ),
                {},
                { children: n }
              )
            ),
          });
        },
        kn = function (e) {
          var t = e.initialValues,
            n = e.onCancel,
            C = e.buttonPosition,
            a = e.isSubmitButton,
            i = e.isCancelButton,
            o = e.isFullButton,
            c = e.children,
            s = e.submitBtnName,
            l = e.cancelBtnName,
            d = Object(Z.a)(e, [
              "initialValues",
              "onCancel",
              "buttonPosition",
              "isSubmitButton",
              "isCancelButton",
              "isFullButton",
              "children",
              "submitBtnName",
              "cancelBtnName",
            ]),
            u = function (e) {
              return Object(r.jsxs)(r.Fragment, {
                children: [
                  "right" !== C || i ? null : Object(r.jsx)(gn.a, {}),
                  Object(r.jsx)(wn, {
                    buttontype: _t.primary,
                    type: "submit",
                    isLoading: e,
                    isFullWidth: o,
                    mt: 3,
                    children: void 0 !== s ? s : "Submit",
                  }),
                ],
              });
            },
            j = "flex-end";
          return (
            "left" === C && (j = "flex-start"),
            "center" === C && (j = "center"),
            Object(r.jsx)(
              un.b,
              Object(p.a)(
                Object(p.a)({ initialValues: t }, d),
                {},
                {
                  children: function (e) {
                    var t = e.isSubmitting;
                    e.resetForm;
                    return Object(r.jsxs)(un.a, {
                      children: [
                        c,
                        Object(r.jsxs)(gt.a, {
                          justifyContent: j,
                          children: [
                            i
                              ? Object(r.jsx)(r.Fragment, {
                                  children: Object(r.jsx)(wn, {
                                    buttontype: _t.danger,
                                    onClick: n,
                                    isFullWidth: o,
                                    mr: a ? "3" : "0",
                                    mt: 3,
                                    children: void 0 !== l ? l : "Cancel",
                                  }),
                                })
                              : null,
                            a ? u(t) : null,
                          ],
                        }),
                      ],
                    });
                  },
                }
              )
            )
          );
        },
        yn = function () {
          var e,
            t,
            n,
            C = Object(u.g)(),
            a = at(),
            i = a.loading,
            o = a.data,
            c = Object(dn.a)(),
            l = s.useMutation(nt, n),
            d = Object(pt.a)(l, 2),
            j = d[0],
            b = d[1],
            m =
              (b.data,
              b.loading,
              b.error,
              (function (e) {
                return s.useMutation(Ue, e);
              })()),
            h = Object(pt.a)(m, 2),
            x = h[0],
            O = h[1],
            g =
              (O.data,
              O.loading,
              O.error,
              (function () {
                var e = Object(ln.a)(
                  sn.a.mark(function e(t) {
                    var n, C;
                    return sn.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((n = t.username), (C = t.email), !t.password)
                            ) {
                              e.next = 4;
                              break;
                            }
                            return (
                              (e.next = 4), j({ variables: Object(p.a)({}, t) })
                            );
                          case 4:
                            return (
                              (e.next = 6),
                              j({ variables: { username: n, email: C } })
                            );
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
            f = (function () {
              var e = Object(ln.a)(
                sn.a.mark(function e() {
                  return sn.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), x();
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return i
            ? Object(r.jsx)(Tt, {})
            : Object(r.jsx)(r.Fragment, {
                children: Object(r.jsx)(kn, {
                  initialValues: {
                    username:
                      null === o ||
                      void 0 === o ||
                      null === (e = o.getMe.user) ||
                      void 0 === e
                        ? void 0
                        : e.username,
                    email:
                      null === o ||
                      void 0 === o ||
                      null === (t = o.getMe.user) ||
                      void 0 === t
                        ? void 0
                        : t.email,
                    password: "",
                  },
                  isCancelButton: !0,
                  isSubmitButton: !0,
                  onCancel: Object(ln.a)(
                    sn.a.mark(function e() {
                      return sn.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), f();
                            case 2:
                              C.push("/");
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  ),
                  onSubmit: (function () {
                    var e = Object(ln.a)(
                      sn.a.mark(function e(t) {
                        return sn.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), g(t);
                              case 2:
                                c({
                                  title: "Account Updated.",
                                  description:
                                    "Account information has been updated",
                                  status: "success",
                                  duration: 2e3,
                                  isClosable: !0,
                                  position: "bottom-right",
                                });
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                  submitBtnName: "Confirm",
                  cancelBtnName: "Logout",
                  children: Object(r.jsxs)(L.a, {
                    lineHeight: 8,
                    children: [
                      Object(r.jsx)(L.a, {
                        p: 2,
                        children: Object(r.jsx)(On, {
                          label: "Full Name",
                          name: "username",
                          placeholder: "Enter Name",
                        }),
                      }),
                      Object(r.jsx)(L.a, {
                        p: 2,
                        children: Object(r.jsx)(On, {
                          label: "Email",
                          name: "email",
                          placeholder: "Enter Email",
                          type: "email",
                        }),
                      }),
                      Object(r.jsx)(L.a, {
                        p: 2,
                        mb: 6,
                        children: Object(r.jsx)(On, {
                          label: "Password",
                          name: "password",
                          placeholder: "Enter Password",
                          type: "password",
                        }),
                      }),
                    ],
                  }),
                }),
              });
        },
        In = n(250);
      !(function (e) {
        (e.yellow = "yellow"),
          (e.red = "red"),
          (e.primary = "primary"),
          (e.white = "white"),
          (e.black = "black");
      })(Mn || (Mn = {})),
        (function (e) {
          (e.google = "google"),
            (e.github = "github"),
            (e.plus = "plus"),
            (e.camera = "camera"),
            (e.none = "none");
        })(vn || (vn = {})),
        (function (e) {
          (e.xxs = "2xs"),
            (e.xs = "xs"),
            (e.sm = "sm"),
            (e.md = "md"),
            (e.lg = "lg"),
            (e.xl = "xl"),
            (e.xxl = "2xl");
        })(Zn || (Zn = {})),
        (function (e) {
          (e.xs = "xs"),
            (e.sm = "sm"),
            (e.base = "Base"),
            (e.md = "md"),
            (e.lg = "lg"),
            (e.xl = "xl"),
            (e.xxl = "2xl");
        })(An || (An = {}));
      var Sn = function (e) {
        var t = e.buttonColor,
          n = e.iconType,
          C = e.shadowType,
          a = Object(Z.a)(e, ["buttonColor", "iconType", "shadowType"]),
          i = { buttonColor: t, shadowType: C },
          o = function () {
            return t === Mn.yellow
              ? "yellow.300"
              : t === Mn.red
              ? "red.500"
              : t === Mn.primary
              ? "primary.200"
              : t === Mn.white
              ? "achromatic.100"
              : t === Mn.black
              ? "achromatic.800"
              : "primary.200";
          };
        return Object(r.jsx)(r.Fragment, {
          children: n
            ? Object(r.jsx)(
                T.a,
                Object(p.a)(
                  Object(p.a)(
                    {
                      bgColor: o(),
                      borderRadius: "full",
                      icon:
                        n === vn.google
                          ? Object(r.jsx)(In.a, {})
                          : n === vn.github
                          ? Object(r.jsx)(B.b, {})
                          : n === vn.plus
                          ? Object(r.jsx)(B.c, {})
                          : n === vn.camera
                          ? Object(r.jsx)(x.c, {})
                          : Object(r.jsx)(In.a, {}),
                    },
                    a
                  ),
                  i
                )
              )
            : Object(r.jsx)(
                T.a,
                Object(p.a)(
                  Object(p.a)({ bgColor: o(), borderRadius: "full" }, a),
                  i
                )
              ),
        });
      };
      function Bn() {
        var e = Object(U.a)([
          "\n  position: relative;\n  .avatar {\n    width: 500px;\n  }\n\n  button {\n    position: absolute;\n    top: 70%;\n    left: 70%;\n    box-shadow: 1px 3px 2px 1px rgba(0, 0, 0, 0.44);\n  }\n",
        ]);
        return (
          (Bn = function () {
            return e;
          }),
          e
        );
      }
      var Dn = Object(At.a)(L.a)(Bn()),
        Tn = function (e) {
          var t = Object.assign({}, e),
            n = Object(on.a)("(max-width: 80em)"),
            a = Object(pt.a)(n, 1)[0] ? "560px" : "30%";
          return Object(r.jsxs)(r.Fragment, {
            children: [
              Object(r.jsx)(bt, Object(p.a)({}, t)),
              Object(r.jsxs)(Jt.a, {
                maxW: a,
                mt: 16,
                children: [
                  Object(r.jsx)(Qt.a, {
                    mt: 40,
                    children: Object(r.jsx)(I, {
                      headingType: C.page,
                      fontSize: "2.5rem",
                      children: "My Profile",
                    }),
                  }),
                  Object(r.jsx)(Qt.a, {
                    mt: 6,
                    children: Object(r.jsxs)(Dn, {
                      children: [
                        Object(r.jsx)(J, {
                          size: "2xl",
                          boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.4)",
                        }),
                        Object(r.jsx)(Sn, {
                          "aria-label": "Button to upload profile",
                          buttonColor: Mn.primary,
                          color: "white",
                          iconType: vn.camera,
                          shadowType: An.xl,
                          fontSize: "xl",
                        }),
                      ],
                    }),
                  }),
                  Object(r.jsx)(yn, {}),
                ],
              }),
            ],
          });
        },
        En = n(48),
        Rn = function () {
          var e = En.a({ name: En.c().max(20).required() });
          return Object(r.jsx)(gt.a, {
            alignItems: "center",
            justifyContent: "center",
            bg: "achromatic.200",
            w: "100%",
            h: "100vh",
            children: Object(r.jsxs)(L.a, {
              display: "flex",
              flexDir: "column",
              boxShadow: "lg",
              borderRadius: 10,
              children: [
                Object(r.jsxs)(gt.a, {
                  justifyContent: "flex-end",
                  alignItems: "center",
                  bgColor: "primary.200",
                  w: 700,
                  py: 2,
                  px: 3,
                  borderTopRadius: 10,
                  children: [
                    Object(r.jsx)(Sn, {
                      "aria-label": "decoration button",
                      buttonColor: Mn.yellow,
                      size: "xs",
                      mr: 2,
                    }),
                    Object(r.jsx)(Sn, {
                      "aria-label": "decoration button",
                      buttonColor: Mn.red,
                      size: "xs",
                    }),
                  ],
                }),
                Object(r.jsxs)(L.a, {
                  bg: "achromatic.100",
                  h: 300,
                  p: 10,
                  borderBottomRadius: 10,
                  children: [
                    Object(r.jsx)(I, {
                      headingType: C.auth,
                      children: "New Project",
                    }),
                    Object(r.jsx)(xt, {
                      mt: 2,
                      mb: 4,
                      children: "What's the name of your next project?",
                    }),
                    Object(r.jsx)(kn, {
                      initialValues: { name: "" },
                      validationSchema: e,
                      onSubmit: function (e) {},
                      isSubmitButton: !0,
                      submitBtnName: "Submit",
                      children: Object(r.jsx)(On, {
                        label: "New Project Name",
                        isLabelNonVisible: !0,
                        name: "name",
                        type: "text",
                        placeholder: "Enter Project Name..",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        zn = function () {
          var e,
            t,
            n = Object(u.h)(),
            a = Object(dn.a)(),
            i = n.pathname.split("/").pop() || "",
            o = Zt([], 5),
            c = Object(pt.a)(o, 5),
            l = c[0],
            d = c[1],
            j = c[2],
            b = c[3],
            p = c[4],
            m = Object(on.a)("(min-width: 1440px)"),
            h = Object(pt.a)(m, 1)[0],
            x = ot({ variables: { projectId: i } }),
            O = x.data,
            g = x.loading;
          if (
            null === O ||
            void 0 === O ||
            null === (e = O.project) ||
            void 0 === e ||
            null === (t = e.project) ||
            void 0 === t
              ? void 0
              : t.projectPermissions
          ) {
            var f,
              M,
              v =
                null === O ||
                void 0 === O ||
                null === (f = O.project) ||
                void 0 === f ||
                null === (M = f.project) ||
                void 0 === M
                  ? void 0
                  : M.projectPermissions.map(function (e) {
                      return e.user;
                    });
            l.length < 1 && d(v);
          }
          var Z,
            A = s.useMutation(Xe, Z),
            w = Object(pt.a)(A, 2),
            k = w[0],
            y =
              (w[1].loading,
              (function () {
                var e = Object(ln.a)(
                  sn.a.mark(function e(t, n) {
                    return sn.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              k({
                                variables: {
                                  projectId: i,
                                  isAdmin: "ADMIN" === t.role,
                                  userId: n,
                                },
                              })
                            );
                          case 2:
                            a({
                              position: "bottom-right",
                              title: "Role Update Success!.",
                              description: "User role has been updated",
                              status: "success",
                              duration: 2e3,
                              isClosable: !0,
                            });
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })()),
            S = [
              { key: "Admin", value: "ADMIN" },
              { key: "Member", value: "MEMBER" },
            ];
          return g
            ? Object(r.jsx)(Tt, {})
            : Object(r.jsxs)(L.a, {
                bg: "primary.400",
                mt: 12,
                children: [
                  Object(r.jsxs)(gt.a, {
                    alignItems: "center",
                    p: 4,
                    children: [
                      Object(r.jsx)(L.a, {
                        w: "85%",
                        children: Object(r.jsx)(I, {
                          headingType: C.table,
                          children: "Access Permission",
                        }),
                      }),
                      Object(r.jsx)(L.a, {
                        w: "15%",
                        children: Object(r.jsx)(I, {
                          headingType: C.table,
                          fontWeight: "base",
                          children: "Role",
                        }),
                      }),
                    ],
                  }),
                  l.slice(0, j).map(function (e) {
                    return "string" !== typeof e.notification
                      ? Object(r.jsxs)(r.Fragment, {
                          children: [
                            Object(r.jsx)(gt.a, {
                              p: 2,
                              bg: "achromatic.100",
                              w: "100%",
                              children: Object(r.jsxs)(gt.a, {
                                alignItems: "center",
                                w: "100%",
                                children: [
                                  Object(r.jsx)(gt.a, {
                                    w: "6rem",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    children: Object(r.jsx)(J, {
                                      name: "".concat(e.username),
                                      src: "".concat(e.avatar),
                                      size: "md",
                                    }),
                                  }),
                                  Object(r.jsx)(gt.a, {
                                    w: h ? "75%" : "100%",
                                    children: Object(r.jsx)(ht.a, {
                                      fontWeight: "bold",
                                      pr: 2,
                                      children: "".concat(e.username),
                                    }),
                                  }),
                                  Object(r.jsx)(L.a, {
                                    style: h
                                      ? { width: "15%" }
                                      : { width: "33%" },
                                    children: Object(r.jsx)(un.b, {
                                      initialValues: { role: e.role },
                                      onSubmit: function (t) {
                                        return y(t, e.id);
                                      },
                                      children: function (t) {
                                        t.values;
                                        var n = t.submitForm,
                                          C = t.handleChange;
                                        return Object(r.jsxs)(bn.a, {
                                          pr: 3,
                                          justifySelf: "flex-end",
                                          children: [
                                            Object(r.jsx)(pn.a, {
                                              fontWeight: "base",
                                              m: 0,
                                            }),
                                            Object(r.jsx)(Et.a, {
                                              name: "role",
                                              onChange: function (e) {
                                                C(e), n();
                                              },
                                              defaultValue: e.role,
                                              borderColor: "achromatic.400",
                                              children:
                                                null === S || void 0 === S
                                                  ? void 0
                                                  : S.map(function (e) {
                                                      return Object(
                                                        r.jsx
                                                      )("option", {
                                                        value: e.value,
                                                        children: e.key,
                                                      });
                                                    }),
                                            }),
                                          ],
                                        });
                                      },
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            Object(r.jsx)(ft.a, { orientation: "horizontal" }),
                          ],
                        })
                      : null;
                  }),
                  Object(r.jsx)(gt.a, {
                    width: "100%",
                    justifyContent: "center",
                    children: Object(r.jsx)("button", {
                      type: "button",
                      onClick: function () {
                        return j >= l.length ? p(5) : b(5);
                      },
                      children: Object(r.jsxs)(gt.a, {
                        alignItems: "center",
                        color: "achromatic.600",
                        p: 2,
                        children: [
                          j >= l.length
                            ? Object(r.jsx)(vt.c, {})
                            : Object(r.jsx)(vt.a, {}),
                          Object(r.jsx)(ht.a, {
                            pl: 1,
                            color: "achromatic.600",
                            fontSize: "sm",
                            children: j >= l.length ? "" : "See More",
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              });
        },
        Fn = n(663);
      function Vn() {
        var e = Object(U.a)([
          "\n  form {\n    display: flex;\n    width: 100%;\n\n    .css-subxaf {\n      width: 360px;\n      .chakra-form-control {\n        display: flex;\n        flex-direction: column;\n        width: 360px;\n        .chakra-form__label {\n          width: 100%;\n        }\n        input {\n          width: 360px;\n        }\n      }\n    }\n\n    .css-1bvc4cc {\n      margin-left: 1rem;\n      display: flex;\n      justify-content: flex-end;\n      align-items: flex-end;\n\n      button {\n        padding: 0 1rem;\n      }\n    }\n  }\n",
        ]);
        return (
          (Vn = function () {
            return e;
          }),
          e
        );
      }
      var Gn = Object(At.a)(L.a)(Vn()),
        Yn = n(101),
        Wn = function (e) {
          var t = e.title,
            n = e.children,
            C = e.isOpen,
            a = e.onOpen,
            i = e.onClose,
            o = e.footer,
            c = void 0 === o || o,
            s = e.secondaryAction,
            l = e.secondaryText,
            d = e.buttonText,
            u = e.buttonColor,
            j = e.buttonFontColor,
            b = Object(Z.a)(e, [
              "title",
              "children",
              "isOpen",
              "onOpen",
              "onClose",
              "footer",
              "secondaryAction",
              "secondaryText",
              "buttonText",
              "buttonColor",
              "buttonFontColor",
            ]);
          return Object(r.jsxs)(r.Fragment, {
            children: [
              a
                ? Object(r.jsx)(
                    fn.a,
                    Object(p.a)(
                      Object(p.a)({ onClick: a }, b),
                      {},
                      { children: d }
                    )
                  )
                : null,
              Object(r.jsxs)(Yn.a, {
                isOpen: C,
                onClose: i,
                children: [
                  Object(r.jsx)(Yn.h, {}),
                  Object(r.jsxs)(Yn.d, {
                    children: [
                      Object(r.jsx)(Yn.g, { children: t }),
                      Object(r.jsx)(Yn.c, {}),
                      Object(r.jsx)(Yn.b, { children: n }),
                      c
                        ? Object(r.jsxs)(Yn.f, {
                            children: [
                              Object(r.jsx)(fn.a, {
                                mr: 3,
                                onClick: i,
                                children: "Close",
                              }),
                              Object(r.jsx)(fn.a, {
                                variant: u ? "solid" : "ghost",
                                bgColor: u,
                                onClick: s,
                                color: j,
                                children: l,
                              }),
                            ],
                          })
                        : null,
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Jn = function () {
          var e,
            t,
            n = Object(u.h)(),
            a = Object(u.g)(),
            i = Object(dn.a)(),
            o = n.pathname.split("/").pop() || "",
            c = ((t = { variables: { projectId: o } }), s.useMutation(Ye, t)),
            l = Object(pt.a)(c, 2),
            d = l[0],
            j = l[1].loading,
            b = (function (e) {
              return s.useMutation(Ke, e);
            })(),
            p = Object(pt.a)(b, 2),
            m = p[0],
            h = p[1].loading,
            x = ot({ variables: { projectId: o } }),
            O = x.data,
            g = x.loading,
            f = Object(Fn.a)(),
            M = f.isOpen,
            v = f.onOpen,
            Z = f.onClose;
          if (h || j || g) return Object(r.jsx)(Tt, {});
          var A = (function () {
              var e = Object(ln.a)(
                sn.a.mark(function e(t) {
                  var n;
                  return sn.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t.projectName),
                              (e.prev = 1),
                              (e.next = 4),
                              m({ variables: { projectId: o, name: n } })
                            );
                          case 4:
                            e.next = 9;
                            break;
                          case 6:
                            (e.prev = 6),
                              (e.t0 = e.catch(1)),
                              i({
                                title: "An error occurred.",
                                description: "Unable to update project name.",
                                status: "error",
                                duration: 2e3,
                                isClosable: !0,
                              });
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 6]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            w = (function () {
              var e = Object(ln.a)(
                sn.a.mark(function e() {
                  return sn.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2), d({ variables: { projectId: o } })
                          );
                        case 2:
                          i({
                            position: "bottom-right",
                            title: "Project Deleted",
                            description:
                              "Your project has been successfully deleted.",
                            status: "success",
                            duration: 2e3,
                            isClosable: !0,
                          }),
                            a.push("/my-profile");
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return Object(r.jsxs)(r.Fragment, {
            children: [
              Object(r.jsx)(L.a, {
                p: 4,
                bg: "primary.400",
                maxWidth: "100%",
                children: Object(r.jsx)(I, {
                  headingType: C.table,
                  children: "Basic Detail",
                }),
              }),
              Object(r.jsx)(Gn, {
                pl: 6,
                children: Object(r.jsx)(kn, {
                  initialValues: {
                    projectName:
                      null === O ||
                      void 0 === O ||
                      null === (e = O.project.project) ||
                      void 0 === e
                        ? void 0
                        : e.name,
                  },
                  isSubmitButton: !0,
                  onSubmit: (function () {
                    var e = Object(ln.a)(
                      sn.a.mark(function e(t) {
                        return sn.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), A(t);
                              case 2:
                                i({
                                  title: "Success!",
                                  description:
                                    "Project name has been successfully updated!",
                                  status: "success",
                                  duration: 2e3,
                                  isClosable: !0,
                                });
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                  children: Object(r.jsx)(L.a, {
                    lineHeight: 8,
                    children: Object(r.jsx)(On, {
                      label: "Project Name",
                      name: "projectName",
                      placeholder: "Enter Project Name...",
                    }),
                  }),
                }),
              }),
              Object(r.jsx)(gt.a, {
                p: 2,
                mt: 6,
                mr: 3,
                justifyContent: "flex-end",
                children: Object(r.jsx)(Wn, {
                  isOpen: M,
                  onOpen: v,
                  onClose: Z,
                  title: "Delete Project",
                  buttonText: "Delete Project",
                  bgColor: "fail",
                  color: "achromatic.100",
                  borderRadius: "9999px",
                  secondaryAction: function () {
                    return w();
                  },
                  secondaryText: "Confirm",
                  buttonColor: "fail",
                  buttonFontColor: "white",
                  children: Object(r.jsx)("p", {
                    children:
                      "Are you absolutely sure you want to delete this project? \ud83d\ude31 Deleting project will completely remove any data associated with it",
                  }),
                }),
              }),
            ],
          });
        },
        Nn = function (e) {
          var t = Object.assign({}, e);
          return Object(r.jsxs)(r.Fragment, {
            children: [
              Object(r.jsx)(bt, Object(p.a)({}, t)),
              Object(r.jsx)(M, Object(p.a)({}, t)),
              Object(r.jsx)(L.a, {
                display: "flex",
                ml: 210,
                mt: 50,
                children: Object(r.jsxs)(L.a, {
                  w: "100%",
                  p: 9,
                  children: [
                    Object(r.jsx)(L.a, { children: Object(r.jsx)(Ot, {}) }),
                    Object(r.jsxs)(L.a, {
                      mt: 9,
                      children: [Object(r.jsx)(Jn, {}), Object(r.jsx)(zn, {})],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        qn = n(21),
        Qn = n(62),
        Un = n(690),
        Hn = function (e) {
          var t = e.task,
            n = e.handleTaskClick,
            a = e.setDeletedTaskId,
            i = e.setIsDeleteTaskModalOpen,
            o = function (e) {
              return e ? Object(Un.a)(new Date(Number(e)), "MMM d") : "";
            },
            c = function () {
              if (!t) return [];
              var e = t.userTask;
              return e
                ? e.map(function (e) {
                    var t = e.user;
                    return { name: t.username, src: t.avatar || void 0 };
                  })
                : null;
            };
          return t && i && a
            ? Object(r.jsxs)(L.a, {
                w: 300,
                minH: 160,
                p: 4,
                bgColor: "achromatic.100",
                borderRadius: 10,
                boxShadow: "1px 2px 5px rgba(0,0,0,0.2)",
                position: "relative",
                _hover: { cursor: "pointer" },
                onClick: function () {
                  return n(t.id);
                },
                children: [
                  Object(r.jsx)(L.a, {
                    position: "absolute",
                    right: 4,
                    top: 4,
                    onClick: function () {
                      i(!0), a(t.id);
                    },
                    children: Object(r.jsx)(h.b, {}),
                  }),
                  Object(r.jsxs)(L.a, {
                    children: [
                      Object(r.jsxs)(L.a, {
                        display: "flex",
                        flexDir: "row",
                        alignItems: "flex-start",
                        mb: 2,
                        _hover: { cursor: "pointer" },
                        children: [
                          Object(r.jsx)(xt, {
                            fontSize: "xs",
                            mr: 2,
                            color: "primary.200",
                            children: "".concat(
                              null === t || void 0 === t ? void 0 : t.taskIndex
                            ),
                          }),
                          Object(r.jsx)(xt, {
                            fontSize: "xs",
                            mr: 2,
                            color: "fail",
                            children: "".concat(
                              null === t || void 0 === t
                                ? void 0
                                : t.boardRowIndex
                            ),
                          }),
                          Object(r.jsx)(I, {
                            pr: "1.5rem",
                            fontWeight: "normal",
                            headingType: C.taskCard,
                            children:
                              null === t || void 0 === t ? void 0 : t.title,
                          }),
                        ],
                      }),
                      Object(r.jsx)(L.a, {
                        display: "flex",
                        flexDir: "row",
                        alignItems: "center",
                        mb: 50,
                        children: (function () {
                          var e;
                          return null === t ||
                            void 0 === t ||
                            null === (e = t.taskLabel) ||
                            void 0 === e
                            ? void 0
                            : e.map(function (e) {
                                var t = e.label;
                                return Object(r.jsx)(
                                  zt,
                                  { mx: 1, bgColor: t.color, children: t.name },
                                  t.id
                                );
                              });
                        })(),
                      }),
                    ],
                  }),
                  Object(r.jsxs)(L.a, {
                    display: "flex",
                    flexDir: "row",
                    alignItems: "center",
                    position: "absolute",
                    bottom: 5,
                    justifyContent: "space-between",
                    children: [
                      c()
                        ? Object(r.jsx)(Q, { size: W.sm, avatars: c(), max: 3 })
                        : null,
                      Object(r.jsx)(xt, {
                        ml: 2,
                        fontSize: "xs",
                        color: "achromatic.600",
                        children:
                          t.startDate || t.endDate
                            ? ""
                                .concat(o(t.startDate), " ~ ")
                                .concat(o(t.endDate))
                            : "",
                      }),
                    ],
                  }),
                ],
              })
            : null;
        },
        Pn = function (e) {
          var t,
            n = e.handleBoardDelete,
            i = e.handleBoardUpdate,
            o = e.handleTaskCreate,
            c = e.board,
            s = e.boards,
            l = e.projectId,
            d = e.sprintId,
            u = Object(Z.a)(e, [
              "handleBoardDelete",
              "handleBoardUpdate",
              "handleTaskCreate",
              "board",
              "boards",
              "projectId",
              "sprintId",
            ]),
            j = u.handleTaskDelete,
            b = u.handleTaskClick,
            h = Object(a.useState)(!1),
            x = Object(pt.a)(h, 2),
            O = x[0],
            f = x[1],
            M = Object(a.useState)(!1),
            v = Object(pt.a)(M, 2),
            A = v[0],
            w = v[1],
            k = Object(a.useState)(!1),
            y = Object(pt.a)(k, 2),
            B = y[0],
            D = y[1],
            T = Object(a.useState)(!1),
            E = Object(pt.a)(T, 2),
            z = E[0],
            V = E[1],
            G = Object(a.useState)(s[0]),
            Y = Object(pt.a)(G, 2),
            W = Y[0],
            J = Y[1],
            N = Object(a.useState)(
              null === c || void 0 === c ? void 0 : c.title
            ),
            q = Object(pt.a)(N, 2),
            Q = q[0],
            U = q[1],
            H = Object(a.useState)(""),
            P = Object(pt.a)(H, 2),
            K = P[0],
            X = P[1],
            $ = Object(a.useState)(""),
            _ = Object(pt.a)($, 2),
            ee = _[0],
            te = _[1],
            ne = Object(dn.a)();
          if (!c) return null;
          var Ce,
            re,
            ae,
            ie = {
              handleTaskClick: b,
              projectId: l,
              setIsDeleteTaskModalOpen: V,
              setDeletedTaskId: te,
            },
            oe = (function () {
              var e = Object(ln.a)(
                sn.a.mark(function e() {
                  var t;
                  return sn.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (W && c.id !== W.id) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          return (e.next = 4), n(c.id, W.id, l);
                        case 4:
                          (t = e.sent).errors
                            ? ne({
                                title: "Board Deletion Failed\ud83d\ude02",
                                description: "".concat(t.errors),
                                duration: 5e3,
                                status: "error",
                                position: "bottom-right",
                              })
                            : (ne({
                                title: "Board Deletion Succeed\ud83e\udd73",
                                description: "Board is deleted",
                                duration: 5e3,
                                status: "success",
                                position: "bottom-right",
                              }),
                              w(!1));
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            ce = (function () {
              var e = Object(ln.a)(
                sn.a.mark(function e() {
                  var t;
                  return sn.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!i) {
                            e.next = 6;
                            break;
                          }
                          return (e.next = 3), i({ id: c.id, title: Q }, l);
                        case 3:
                          (t = e.sent).errors
                            ? ne({
                                title: "Board Update Failed\ud83d\ude02",
                                description: "".concat(t.errors),
                                duration: 5e3,
                                status: "error",
                                position: "bottom-right",
                              })
                            : ne({
                                title: "Board Update Succeed\ud83e\udd73",
                                description: "Board is updated",
                                duration: 5e3,
                                status: "success",
                                position: "bottom-right",
                              }),
                            f(!1);
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            se = (function () {
              var e = Object(ln.a)(
                sn.a.mark(function e() {
                  var t;
                  return sn.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            o({ title: K, boardId: c.id, sprintId: d }, l)
                          );
                        case 2:
                          (t = e.sent).errors
                            ? ne({
                                title: "Task Creation Failed\ud83d\ude02",
                                description: "".concat(t.errors),
                                duration: 5e3,
                                status: "error",
                                position: "bottom-right",
                              })
                            : ne({
                                title: "Task Creation Succeed\ud83e\udd73",
                                description: "Task is created",
                                duration: 5e3,
                                status: "success",
                                position: "bottom-right",
                              }),
                            D(!1);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            le = (function () {
              var e = Object(ln.a)(
                sn.a.mark(function e() {
                  var t;
                  return sn.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), j(ee, l);
                        case 2:
                          (t = e.sent).errors
                            ? ne({
                                title: "Task Creation Failed\ud83d\ude02",
                                description: "".concat(t.errors),
                                duration: 5e3,
                                status: "error",
                                position: "bottom-right",
                              })
                            : ne({
                                title: "Task Creation Succeed\ud83e\udd73",
                                description: "Task is created",
                                duration: 5e3,
                                status: "success",
                                position: "bottom-right",
                              }),
                            V(!1);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return Object(r.jsxs)(L.a, {
            w: 330,
            mr: 4,
            minH: 1e3,
            children: [
              Object(r.jsxs)(L.a, {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                px: 5,
                children: [
                  Object(r.jsxs)(L.a, {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    children: [
                      Object(r.jsx)(I, {
                        mr: 2,
                        headingType: C.board,
                        children: c.title,
                      }),
                      Object(r.jsx)(ht.a, {
                        color: "primary.300",
                        children: "".concat(
                          null === (t = c.task) || void 0 === t
                            ? void 0
                            : t.length
                        ),
                      }),
                      Object(r.jsx)(ht.a, {
                        color: "fail",
                        children: "".concat(c.boardColumnIndex),
                      }),
                    ],
                  }),
                  Object(r.jsxs)(gt.a, {
                    flexDir: "row",
                    children: [
                      Object(r.jsx)(F, {
                        "aria-label": "delete board",
                        iconButtonType: "pencil",
                        color: "achromatic.600",
                        onClick: function () {
                          return f(!0);
                        },
                      }),
                      c.boardColumnIndex >= s.length - 1
                        ? null
                        : Object(r.jsx)(F, {
                            "aria-label": "delete board",
                            iconButtonType: "deleteBin",
                            color:
                              c.boardColumnIndex >= s.length - 1
                                ? "transparent"
                                : "achromatic.600",
                            onClick:
                              c.boardColumnIndex === s.length - 1
                                ? function () {
                                    return null;
                                  }
                                : function () {
                                    return w(!0);
                                  },
                          }),
                    ],
                  }),
                ],
              }),
              Object(r.jsxs)(L.a, {
                bgColor: "primary.400",
                h: "100%",
                p: 4,
                mb: 4,
                borderRadius: 10,
                display: "flex",
                flexDir: "column",
                alignItems: "center",
                minH: 170,
                children: [
                  Object(r.jsx)(Qn.c, {
                    droppableId: c.id,
                    type: "TASK",
                    children: function (e) {
                      return Object(a.createElement)(
                        "div",
                        Object(p.a)(
                          Object(p.a)({}, e.droppableProps),
                          {},
                          { ref: e.innerRef, key: c.id }
                        ),
                        (t = c.task || []).length
                          ? t.map(function (e, t) {
                              return Object(r.jsx)(
                                Qn.b,
                                {
                                  index: e.boardRowIndex || t,
                                  draggableId: e.id,
                                  children: function (t) {
                                    return Object(r.jsx)(
                                      L.a,
                                      Object(p.a)(
                                        Object(p.a)(
                                          Object(p.a)(
                                            { mb: 4 },
                                            t.draggableProps
                                          ),
                                          t.dragHandleProps
                                        ),
                                        {},
                                        {
                                          ref: t.innerRef,
                                          children: Object(r.jsx)(
                                            Hn,
                                            Object(p.a)({ task: e }, ie),
                                            e.id
                                          ),
                                        }
                                      )
                                    );
                                  },
                                },
                                e.id
                              );
                            })
                          : null,
                        e.placeholder
                      );
                      var t;
                    },
                  }),
                  Object(r.jsx)(L.a, {
                    display: "flex",
                    justifyContent: "center",
                    onClick: function () {
                      return D(!0);
                    },
                    _hover: { cursor: "pointer" },
                    w: 300,
                    children:
                      ((Ce = Object(r.jsx)(R.b, {})),
                      (re = "#828282"),
                      (ae = "25"),
                      Object(r.jsx)(L.a, {
                        mx: 3,
                        children: Object(r.jsx)(g.b.Provider, {
                          value: { color: re, size: ae },
                          children: Ce,
                        }),
                      })),
                  }),
                ],
              }),
              Object(r.jsx)(Wn, {
                title: "Delete Board",
                isOpen: A,
                onClose: function () {
                  return w(!1);
                },
                secondaryText: "Submit",
                secondaryAction: oe,
                buttonColor: "fail",
                buttonFontColor: "white",
                children: Object(r.jsxs)(r.Fragment, {
                  children: [
                    Object(r.jsx)(ht.a, {
                      mb: 3,
                      children: "Which Board you want to move the tasks to?",
                    }),
                    Object(r.jsxs)(S.a, {
                      children: [
                        Object(r.jsx)(S.b, {
                          as: fn.a,
                          rightIcon: Object(r.jsx)(m.c, {}),
                          children: W.title,
                        }),
                        Object(r.jsx)(S.e, {
                          children: s
                            .filter(function (e) {
                              return c.id !== e.id;
                            })
                            .map(function (e) {
                              return Object(r.jsx)(S.d, {
                                onClick: function () {
                                  return J(e);
                                },
                                children: e.title,
                              });
                            }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              Object(r.jsx)(Wn, {
                title: "Edit Board",
                isOpen: O,
                onClose: function () {
                  return f(!1);
                },
                secondaryText: "Submit",
                secondaryAction: ce,
                buttonColor: "primary.200",
                buttonFontColor: "white",
                children: Object(r.jsx)(hn.a, {
                  onChange: function (e) {
                    return U(e.target.value);
                  },
                  defaultValue: c.title,
                }),
              }),
              Object(r.jsx)(Wn, {
                title: "Create Task",
                isOpen: B,
                onClose: function () {
                  return D(!1);
                },
                secondaryText: "Submit",
                secondaryAction: se,
                buttonColor: "primary.200",
                buttonFontColor: "white",
                children: Object(r.jsx)(hn.a, {
                  onChange: function (e) {
                    return X(e.target.value);
                  },
                  placeholder: "Write Task Name",
                }),
              }),
              Object(r.jsx)(Wn, {
                title: "Delete Task",
                isOpen: z,
                onClose: function () {
                  return V(!1);
                },
                secondaryText: "Confirm",
                secondaryAction: le,
                buttonColor: "fail",
                buttonFontColor: "white",
                children: Object(r.jsxs)(r.Fragment, {
                  children: [
                    Object(r.jsx)(ht.a, {
                      children: "You are permanently deleting this task.",
                    }),
                    Object(r.jsx)(ht.a, {
                      children: "Are you absolutely sure \ud83d\ude31?",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Kn = function (e) {
          var t,
            n,
            i,
            o = e.handleBoardCreate,
            c = e.projectId,
            s = Object(a.useState)(!1),
            l = Object(pt.a)(s, 2),
            d = l[0],
            j = l[1],
            b = Object(a.useState)(""),
            p = Object(pt.a)(b, 2),
            m = p[0],
            h = p[1],
            x = (Object(u.g)(), Object(dn.a)()),
            O = (function () {
              var e = Object(ln.a)(
                sn.a.mark(function e() {
                  var t;
                  return sn.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), o(m, c);
                          case 3:
                            (t = e.sent),
                              console.log("create", t.data),
                              t.errors
                                ? x({
                                    title: "Board Creation Failed\ud83d\ude02",
                                    description: "".concat(t.errors),
                                    duration: 5e3,
                                    status: "error",
                                    position: "bottom-right",
                                  })
                                : x({
                                    title: "Board Creation Succeed\ud83e\udd73",
                                    description: "Board is created",
                                    duration: 5e3,
                                    status: "success",
                                    position: "bottom-right",
                                  }),
                              (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0);
                          case 11:
                            j(!1);
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 8]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          En.a({ board: En.c().required() });
          return Object(r.jsxs)(L.a, {
            w: 330,
            children: [
              Object(r.jsx)(I, {
                mt: 2,
                mb: 3,
                w: 330,
                headingType: C.board,
                color: "achromatic.500",
                children: "Add New Board",
              }),
              Object(r.jsx)(L.a, {
                h: "100%",
                mb: 4,
                p: 4,
                borderRadius: 10,
                bgColor: d ? "primary.400" : "transparent",
                border: d ? "none" : "2px dotted #31D5BF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDir: "column",
                _hover: d ? {} : { bgColor: "violetBg", cursor: "pointer" },
                onClick: function () {
                  return j(!0);
                },
                children: d
                  ? null
                  : Object(r.jsxs)(r.Fragment, {
                      children: [
                        Object(r.jsx)(L.a, {
                          my: 2,
                          w: 300,
                          display: "flex",
                          justifyContent: "center",
                          children:
                            ((t = Object(r.jsx)(vt.d, {})),
                            (n = "#31D5BF"),
                            (i = "25"),
                            Object(r.jsx)(L.a, {
                              mx: 3,
                              children: Object(r.jsx)(g.b.Provider, {
                                value: { color: n, size: i },
                                children: t,
                              }),
                            })),
                        }),
                        Object(r.jsx)(xt, {
                          color: "primary.200",
                          children: "Add Board...",
                        }),
                      ],
                    }),
              }),
              Object(r.jsx)(Wn, {
                title: "Create New Board",
                isOpen: d,
                onClose: function () {
                  return j(!1);
                },
                secondaryText: "Submit",
                secondaryAction: O,
                buttonColor: "primary.200",
                buttonFontColor: "white",
                children: Object(r.jsx)(hn.a, {
                  onChange: function (e) {
                    return h(e.target.value);
                  },
                }),
              }),
            ],
          });
        },
        Xn = function (e) {
          var t = e.boards,
            n = e.projectId,
            C = e.sprintId,
            i = e.handleTaskUpdate,
            o = e.handleBoardUpdate,
            c = e.boardLoading,
            s = e.taskLoading,
            l = Object(Z.a)(e, [
              "boards",
              "projectId",
              "sprintId",
              "handleTaskUpdate",
              "handleBoardUpdate",
              "boardLoading",
              "taskLoading",
            ]),
            d = Object(a.useState)(t),
            u = Object(pt.a)(d, 2),
            j = u[0],
            b = u[1],
            m = Object(dn.a)(),
            h = l.handleBoardCreate,
            x = l.handleBoardDelete,
            O = l.handleTaskClick,
            g = l.handleTaskCreate,
            f = l.handleTaskDelete,
            M = (function () {
              var e = Object(ln.a)(
                sn.a.mark(function e(t) {
                  return sn.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), i(t, n);
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            v = (function () {
              var e = Object(ln.a)(
                sn.a.mark(function e(t) {
                  return sn.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), o(t, n);
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            A = {
              handleBoardCreate: h,
              handleBoardDelete: x,
              handleTaskClick: O,
              handleTaskCreate: g,
              handleTaskDelete: f,
              handleBoardUpdate: o,
              boards: t,
              projectId: n,
              sprintId: C,
            },
            w = function (e) {
              return e.map(function (t) {
                return Object(r.jsx)(
                  Qn.b,
                  {
                    index: t.boardColumnIndex,
                    draggableId: t.id,
                    isDragDisabled: t.boardColumnIndex === e.length - 1,
                    children: function (e) {
                      return Object(r.jsx)(
                        L.a,
                        Object(p.a)(
                          Object(p.a)(
                            Object(p.a)({}, e.draggableProps),
                            e.dragHandleProps
                          ),
                          {},
                          {
                            ref: e.innerRef,
                            children: Object(r.jsx)(
                              Pn,
                              Object(p.a)({ board: t }, A)
                            ),
                          }
                        )
                      );
                    },
                  },
                  t.id
                );
              });
            },
            k = (function () {
              var e = Object(ln.a)(
                sn.a.mark(function e(t, n) {
                  var C, r, a, i, o, l, d, u, L, h, x, O, g, f, Z, A, w, k, y;
                  return sn.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((C = t.destination),
                            (r = t.source),
                            t.draggableId,
                            (a = t.type),
                            !c && !s)
                          ) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return");
                        case 3:
                          if (C) {
                            e.next = 5;
                            break;
                          }
                          return e.abrupt("return");
                        case 5:
                          if (
                            (console.log("destination", C),
                            console.log("source", r),
                            console.log(
                              "------destination droppableId",
                              C.droppableId
                            ),
                            console.log(
                              "------source droppableId",
                              r.droppableId
                            ),
                            "TASK" !== a)
                          ) {
                            e.next = 49;
                            break;
                          }
                          if (
                            C.droppableId !== r.droppableId ||
                            C.index !== r.index
                          ) {
                            e.next = 12;
                            break;
                          }
                          return e.abrupt("return");
                        case 12:
                          if (
                            ((i = j.find(function (e) {
                              return e.id === r.droppableId;
                            })),
                            (o = j.findIndex(function (e) {
                              return e.id === r.droppableId;
                            })),
                            (l = j.find(function (e) {
                              return e.id === C.droppableId;
                            })),
                            (d = j.findIndex(function (e) {
                              return e.id === C.droppableId;
                            })),
                            i && l && i.task && l.task)
                          ) {
                            e.next = 18;
                            break;
                          }
                          return e.abrupt("return");
                        case 18:
                          if (
                            (console.log("-------------start-------------"),
                            (u = i.task.slice()),
                            (L = u.splice(r.index, 1)),
                            console.log(
                              "sourceTask: \uc0ad\uc81c\ub41c index",
                              r.index
                            ),
                            console.log(
                              "sourceTask: \uc0ad\uc81c\ub41c \uac83",
                              L
                            ),
                            (h = Object(p.a)(
                              Object(p.a)({}, i),
                              {},
                              { task: u }
                            )),
                            console.log("changedSourceBoard", h),
                            h.task.map(function (e) {
                              return void 0 === e.boardRowIndex ||
                                null === e.boardRowIndex
                                ? e
                                : e.boardRowIndex > r.index
                                ? (console.log("before:", e.boardRowIndex),
                                  console.log("after:", e.boardRowIndex - 1),
                                  Object(p.a)(
                                    Object(p.a)({}, e),
                                    {},
                                    { boardRowIndex: e.boardRowIndex - 1 }
                                  ))
                                : e;
                            }),
                            C.droppableId !== r.droppableId)
                          ) {
                            e.next = 39;
                            break;
                          }
                          return (
                            (x = h.task.map(function (e) {
                              return void 0 === e.boardRowIndex ||
                                null === e.boardRowIndex
                                ? e
                                : e.boardRowIndex >= C.index
                                ? Object(p.a)(
                                    Object(p.a)({}, e),
                                    {},
                                    { boardRowIndex: e.boardRowIndex + 1 }
                                  )
                                : e;
                            })),
                            (O = Object(p.a)(
                              Object(p.a)({}, L[0]),
                              {},
                              { boardId: r.droppableId, boardRowIndex: C.index }
                            )),
                            console.log("changedTask1", O),
                            x.splice(C.index, 0, O),
                            (h = Object(p.a)(
                              Object(p.a)({}, h),
                              {},
                              { task: x }
                            )),
                            ((g = Object(qn.a)(j))[o] = h),
                            b(g),
                            console.log("copyBoardList", g),
                            console.log("changedTask1.id: ", O.id),
                            M({ id: O.id, newBoardRowIndex: C.index }),
                            e.abrupt("return")
                          );
                        case 39:
                          (f = l.task.map(function (e) {
                            return void 0 === e.boardRowIndex ||
                              null === e.boardRowIndex
                              ? e
                              : e.boardRowIndex >= C.index
                              ? Object(p.a)(
                                  Object(p.a)({}, e),
                                  {},
                                  { boardRowIndex: e.boardRowIndex + 1 }
                                )
                              : e;
                          })),
                            (Z = Object(p.a)(
                              Object(p.a)({}, L[0]),
                              {},
                              { boardId: C.droppableId, boardRowIndex: C.index }
                            )),
                            f.splice(C.index, 0, Z),
                            (A = Object(p.a)(
                              Object(p.a)({}, l),
                              {},
                              { task: f }
                            )),
                            ((w = Object(qn.a)(j))[d] = A),
                            (w[o] = h),
                            b(w),
                            console.log("changedTask2: ", Z.id),
                            M({
                              id: Z.id,
                              boardId: C.droppableId,
                              newBoardRowIndex: C.index,
                            });
                        case 49:
                          if ("BOARD" !== a) {
                            e.next = 60;
                            break;
                          }
                          if (C.index !== j.length - 1) {
                            e.next = 53;
                            break;
                          }
                          return (
                            m({
                              title: "Not Available",
                              description: "Board is not draggable to the last",
                              status: "warning",
                              position: "bottom-right",
                              duration: 4e3,
                              isClosable: !0,
                            }),
                            e.abrupt("return")
                          );
                        case 53:
                          (k = Object(qn.a)(j)),
                            (y = k[r.index]),
                            (k[r.index] = k[C.index]),
                            (k[C.index] = y),
                            console.log("boardId(aka temp.id): ", y.id),
                            v({ id: y.id, boardColumnIndex: C.index }),
                            b(k);
                        case 60:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })();
          return Object(r.jsx)(Qn.a, {
            onDragEnd: k,
            children: Object(r.jsx)(Qn.c, {
              droppableId: "board",
              type: "BOARD",
              direction: "horizontal",
              children: function (e) {
                return Object(r.jsx)(r.Fragment, {
                  children: Object(r.jsxs)(
                    L.a,
                    Object(p.a)(
                      Object(p.a)(
                        { display: "flex", flexDir: "row", ref: e.innerRef },
                        e.droppableProps
                      ),
                      {},
                      {
                        children: [
                          w(j),
                          e.placeholder,
                          Object(r.jsx)(Kn, {
                            handleBoardCreate: h,
                            projectId: n,
                          }),
                        ],
                      }
                    )
                  ),
                });
              },
            }),
          });
        },
        $n = function (e) {
          var t = e.length;
          return window.location.pathname.slice(t);
        },
        _n = function () {
          return Object(r.jsxs)(L.a, {
            w: "100%",
            h: "80vh",
            borderRadius: 10,
            border: "2px dotted #31D5BF",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            children: [
              Object(r.jsx)(xt, {
                color: "primary.200",
                children: "Woof, woof! No Active Sprint!",
              }),
              Object(r.jsx)(xt, {
                color: "primary.200",
                children: "Create a new one.",
              }),
              Object(r.jsx)(l.b, {
                to: "/project/sprint/".concat($n("/project/board/")),
                children: Object(r.jsx)(wn, {
                  px: 10,
                  my: 2,
                  fontSize: "sm",
                  buttontype: _t.primary,
                  isFullWidth: !1,
                  children: "View Sprint",
                }),
              }),
            ],
          });
        },
        eC = n(687),
        tC = n(697),
        nC = n(27),
        CC = n.n(nC),
        rC = function (e) {
          if (e)
            return e.map(function (e) {
              var t = e.user;
              return Object(p.a)(
                Object(p.a)({}, t),
                {},
                {
                  label: null === t || void 0 === t ? void 0 : t.username,
                  value: null === t || void 0 === t ? void 0 : t.id,
                }
              );
            });
        },
        aC = [
          "labelTeal",
          "labelYellow",
          "labelOrange",
          "labelGreen",
          "labelViolet",
          "labelPurple",
          "labelPink",
          "labelCyan",
          "violet",
        ],
        iC = function (e) {
          if (e)
            return e.map(function (e) {
              var t = e.label;
              return { id: t.id, value: t.name, label: t.name, color: t.color };
            });
        },
        oC = function (e) {
          if (e)
            return e.map(function (e) {
              var t = e.id,
                n = e.name;
              return { id: t, value: n, label: n, color: e.color };
            });
        },
        cC = function (e) {
          return e.map(function (e) {
            var t = e.title;
            return { value: t, id: e.id, label: t };
          });
        },
        sC = function (e) {
          return e ? CC.a.unix(Number(e) / 1e3) : null;
        },
        lC = n(30),
        dC = n(686),
        uC = n(384),
        jC = function (e) {
          var t = e.label,
            n = e.fontSize,
            C = void 0 === n ? "md" : n,
            i = e.isEditable,
            o = e.isLabelNonVisible,
            c = e.fontWeight,
            s = void 0 === c ? "normal" : c,
            l = e.autoCompleteDisable,
            d = e.autoHeight,
            u = e.paddingNone,
            j = e.onBlurSubmit,
            b = Object(Z.a)(e, [
              "label",
              "fontSize",
              "isEditable",
              "isLabelNonVisible",
              "fontWeight",
              "autoCompleteDisable",
              "autoHeight",
              "paddingNone",
              "onBlurSubmit",
            ]),
            L = Object(un.c)(b),
            m = Object(pt.a)(L, 2),
            h = m[0],
            x = m[1].error,
            O = Object(a.useRef)(null);
          return Object(r.jsxs)(bn.a, {
            isInvalid: !!x,
            children: [
              Object(r.jsx)(pn.a, {
                htmlFor: h.name,
                fontWeight: "normal",
                mb: "0",
                mt: "2",
                display: o ? "none" : "block",
                children: t,
              }),
              d
                ? Object(r.jsx)(
                    dC.a,
                    Object(p.a)(
                      Object(p.a)(Object(p.a)({}, h), b),
                      {},
                      {
                        id: h.name,
                        fontSize: C,
                        fontWeight: s,
                        ref: O,
                        w: "100%",
                        onBlur: function () {
                          var e;
                          j &&
                            (null === (e = O.current) || void 0 === e
                              ? void 0
                              : e.value) &&
                            j(Object(lC.a)({}, h.name, O.current.value));
                        },
                        minRows: 1,
                        minH: "unset",
                        padding: u ? "0" : [1, 2],
                        borderColor: i ? "transparent" : "achromatic.400",
                        resize: "none",
                        as: uC.a,
                        bgColor: "achromatic.100",
                        autoComplete: l ? "off" : "on",
                      }
                    )
                  )
                : Object(r.jsx)(
                    dC.a,
                    Object(p.a)(
                      Object(p.a)(Object(p.a)({}, h), b),
                      {},
                      {
                        id: h.name,
                        fontSize: C,
                        w: "100%",
                        resize: "none",
                        fontWeight: s,
                        bgColor: "achromatic.100",
                        borderColor: i ? "transparent" : "achromatic.400",
                        autoComplete: l ? "off" : "on",
                      }
                    )
                  ),
              x ? Object(r.jsx)(xn.a, { children: x }) : null,
            ],
          });
        },
        bC = function (e) {
          var t = e.defaultOption,
            n = e.options,
            C = e.onChange,
            i = Object(a.useState)(t),
            o = Object(pt.a)(i, 2),
            c = o[0],
            s = o[1];
          return Object(r.jsxs)(S.a, {
            children: [
              Object(r.jsx)(S.b, {
                fontSize: ".7rem",
                as: fn.a,
                size: "sm",
                height: "1.4rem",
                bgColor: "primary.300",
                color: "achromatic.100",
                rightIcon: Object(r.jsx)(m.c, {}),
                children: c && c.value,
              }),
              Object(r.jsx)(S.e, {
                children:
                  t &&
                  (n
                    ? n.map(function (e) {
                        return Object(r.jsx)(
                          S.d,
                          {
                            fontSize: ".7rem",
                            size: "sm",
                            onClick: function () {
                              console.log("el:", e), s(e), C({ boardId: e.id });
                            },
                            children: e.value,
                          },
                          e.id
                        );
                      })
                    : null),
              }),
            ],
          });
        },
        pC = n(378),
        LC = function (e) {
          var t = e.sprints,
            n = e.currentSprint,
            C = e.onSprintSelect,
            i = Object(a.useState)(n || null),
            o = Object(pt.a)(i, 2),
            c = o[0],
            s = o[1];
          return Object(r.jsxs)(S.a, {
            children: [
              Object(r.jsx)(S.b, {
                px: ".6rem",
                py: 1,
                bgColor: "achromatic.100",
                transition: "all 0.2s",
                borderRadius: "md",
                borderWidth: "1px",
                borderColor: "achromatic.400",
                _focus: { outline: 0, boxShadow: "outline" },
                children: Object(r.jsxs)(L.a, {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "achromatic.600",
                  children: [
                    c ? c.title : "Select Project",
                    Object(r.jsx)(L.a, {
                      borderLeft: "1px",
                      borderColor: "achromatic.400",
                      paddingLeft: ".3rem",
                      marginLeft: "2",
                      color: "achromatic.400",
                      children: Object(r.jsx)(pC.a, { size: "1.4rem" }),
                    }),
                  ],
                }),
              }),
              Object(r.jsx)(S.e, {
                children:
                  null === t || void 0 === t
                    ? void 0
                    : t.map(function (e) {
                        return Object(r.jsx)(
                          S.d,
                          {
                            value: e.title,
                            backgroundColor:
                              (null === c || void 0 === c ? void 0 : c.id) ===
                              e.id
                                ? "primary.400"
                                : "achromatic.100",
                            onClick: function () {
                              s(e), C(e.id);
                            },
                            children: e.title,
                          },
                          e.id
                        );
                      }),
              }),
            ],
          });
        },
        mC = n(22),
        hC = n(380),
        xC = n(379);
      function OC() {
        var e = Object(U.a)([
          "\n  button {\n    transition: opacity 0.3s;\n    opacity: 0;\n  }\n  &:hover {\n    button {\n      opacity: 1;\n      display: block;\n    }\n  }\n",
        ]);
        return (
          (OC = function () {
            return e;
          }),
          e
        );
      }
      var gC,
        fC = Object(At.a)(L.a)(OC()),
        MC = function (e) {
          var t = e.handleDelete,
            n = e.userId,
            C = Object(Z.a)(e, ["handleDelete", "userId"]);
          return Object(r.jsxs)(fC, {
            position: "relative",
            children: [
              Object(r.jsx)(J, Object(p.a)({}, C)),
              Object(r.jsx)(T.a, {
                position: "absolute",
                top: "0",
                right: "0",
                size: "full",
                borderRadius: "full",
                colorScheme: "teal",
                "aria-label": "Delete assignee",
                icon: Object(r.jsx)(xC.a, {}),
                onClick: function () {
                  return t(n);
                },
              }),
            ],
          });
        },
        vC = function (e) {
          return Object(r.jsx)(mC.f.MultiValueContainer, Object(p.a)({}, e));
        },
        ZC = function (e) {
          var t = e.getStyles,
            n = e.innerProps,
            C = n.ref,
            a = Object(Z.a)(n, ["ref"]);
          return Object(r.jsx)(
            "div",
            Object(p.a)(
              Object(p.a)({}, a),
              {},
              { ref: C, style: t("clearIndicator", e) }
            )
          );
        };
      !(function (e) {
        (e.selectOption = "select-option"),
          (e.deselectOption = "deselect-option"),
          (e.removeValue = "remove-value"),
          (e.popValue = "pop-value"),
          (e.setValue = "set-value"),
          (e.clear = "clear"),
          (e.createOption = "create-option");
      })(gC || (gC = {}));
      var AC = function (e) {
          var t = e.options,
            n = e.defaultValue,
            C = e.deleteAssignee,
            o = e.createAssignee,
            c = Object(a.useState)(n || []),
            s = Object(pt.a)(c, 2),
            l = s[0],
            d = s[1],
            u = function (e) {
              var t = (function (e) {
                return mt.a.difference(e, l)[0];
              })(e);
              t.id && (o(t.id), d(e));
            },
            j = function (e) {
              !(function (e) {
                mt.a.difference(l, e)[0];
              })(e),
                d(e);
            };
          return Object(r.jsxs)(i.a.Fragment, {
            children: [
              Object(r.jsx)(qt.a, {
                spacing: "5px",
                marginBottom: "0.5rem",
                children: l
                  ? l.map(function (e) {
                      return Object(r.jsx)(
                        MC,
                        {
                          src: e.avatar || "",
                          name: e.username,
                          userId: e.id,
                          handleDelete: function (e) {
                            e && C(e);
                          },
                        },
                        e.id
                      );
                    })
                  : null,
              }),
              Object(r.jsx)(L.a, {
                position: "relative",
                children: Object(r.jsx)(hC.a, {
                  closeMenuOnSelect: !1,
                  components: { MultiValueContainer: vC, ClearIndicator: ZC },
                  styles: {
                    multiValue: function (e) {
                      return Object(p.a)(
                        Object(p.a)({}, e),
                        {},
                        { display: "none" }
                      );
                    },
                    clearIndicator: function (e) {
                      return Object(p.a)(
                        Object(p.a)({}, e),
                        {},
                        { display: "none" }
                      );
                    },
                  },
                  defaultValue: n,
                  isMulti: !0,
                  placeholder: "add user to assignee",
                  options: t,
                  onChange: function (e, t) {
                    switch (t.action) {
                      case gC.selectOption:
                      case gC.createOption:
                        u(e);
                        break;
                      case gC.removeValue:
                        j(e), d(e);
                        break;
                      case gC.clear:
                        console.log("clear");
                        break;
                      case gC.deselectOption:
                        console.log("deselectOption");
                        break;
                      case gC.setValue:
                        console.log("setValue");
                    }
                  },
                }),
              }),
            ],
          });
        },
        wC = function (e) {
          var t = e.children;
          return Object(r.jsx)(ht.a, {
            fontSize: "sm",
            color: "achromatic.600",
            mb: "1",
            children: t,
          });
        },
        kC = (n(523), n(381));
      n(629);
      function yC() {
        var e = Object(U.a)([
          "\n  width: 20rem;\n  display: grid;\n  grid-template-columns: 50% 2fr;\n",
        ]);
        return (
          (yC = function () {
            return e;
          }),
          e
        );
      }
      function IC() {
        var e = Object(U.a)([
          '\n  .DateRangePicker {\n    width: 100%;\n  }\n\n  .DateRangePickerInput {\n    border: none;\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1rem 1fr;\n  }\n\n  .DateInput {\n    width: 100%;\n  }\n\n  input.DateInput_input {\n    box-sizing: border-box;\n    display: inline-block;\n    text-align: center;\n    padding: 0.4rem;\n    width: 100%;\n    border: 1px solid #d0d0d0;\n    border-radius: 0.3rem;\n    font-family: "Open Sans, sans-serif";\n    font-weight: 400;\n    color: #828282;\n    font-size: 1rem;\n  }\n\n  input.DateInput_input::placeholder {\n    font-family: "Open Sans, sans-serif";\n    color: #828282;\n    font-weight: 400;\n  }\n\n  input.DateInput_input:focus::placeholder {\n    color: transparent;\n  }\n\n  p {\n    display: inline;\n  }\n\n  .calendar__dateText {\n    margin-left: 0.3rem;\n    color: #c4c4c4;\n  }\n\n  .calendar__dueDate {\n    color: #4f4f4f;\n    margin-left: 6rem;\n  }\n\n  .DateRangePickerInput_arrow_svg {\n    display: none;\n  }\n',
        ]);
        return (
          (IC = function () {
            return e;
          }),
          e
        );
      }
      var SC,
        BC = At.a.div(IC()),
        DC =
          (At.a.div(yC()),
          function (e) {
            var t = e.handleSubmit,
              n = e.defaultStartDate,
              C = e.defaultEndDate,
              i = Object(a.useState)(n),
              o = Object(pt.a)(i, 2),
              c = o[0],
              s = o[1],
              l = Object(a.useState)(C),
              d = Object(pt.a)(l, 2),
              u = d[0],
              j = d[1],
              b = Object(a.useState)(null),
              p = Object(pt.a)(b, 2),
              L = p[0],
              m = p[1];
            return Object(r.jsxs)(BC, {
              children: [
                Object(r.jsxs)(Ht.a, {
                  templateColumns: "1fr 1fr",
                  gap: "1rem",
                  w: "full",
                  children: [
                    Object(r.jsx)(xt, {
                      fontSize: "sm",
                      color: "achromatic.600",
                      mb: "1",
                      children: "Start Date",
                    }),
                    Object(r.jsx)(xt, {
                      fontSize: "sm",
                      color: "achromatic.600",
                      mb: "1",
                      children: "Due Date",
                    }),
                  ],
                }),
                Object(r.jsx)(kC.DateRangePicker, {
                  startDate: c,
                  startDateId: "tata-start-date",
                  endDate: u,
                  endDateId: "tata-end-date",
                  numberOfMonths: 1,
                  onDatesChange: function (e) {
                    var n = e.startDate,
                      C = e.endDate;
                    s(n), j(C), t({ startDate: n, endDate: C });
                  },
                  focusedInput: L,
                  onFocusChange: function (e) {
                    return m(e);
                  },
                }),
              ],
            });
          }),
        TC = n(382);
      !(function (e) {
        (e.selectOption = "select-option"),
          (e.deselectOption = "deselect-option"),
          (e.removeValue = "remove-value"),
          (e.popValue = "pop-value"),
          (e.setValue = "set-value"),
          (e.clear = "clear"),
          (e.createOption = "create-option");
      })(SC || (SC = {}));
      var EC = function (e) {
          var t = e.options,
            n = e.defaultValue,
            C = e.createTaskLabel,
            a = e.deleteTaskLabel,
            o = function (e) {
              a(e);
            },
            c = function (e, t) {
              switch (t.action) {
                case SC.selectOption:
                  !(function (e) {
                    if (!n || n.length < 1) C(e[0].label);
                    else {
                      console.log("-------delete start"),
                        console.log("values:", e),
                        console.log("defaultValue:", n);
                      var t = e.filter(function (e) {
                        return !n.find(function (t) {
                          return t.id === e.id;
                        });
                      });
                      console.log("-------newValue:", t),
                        console.log("-------delete end:"),
                        C(t[0].label);
                    }
                  })(e);
                  break;
                case SC.removeValue:
                  o(e);
              }
            },
            s = function (e) {
              C(e);
            };
          return Object(r.jsxs)(i.a.Fragment, {
            children: [
              Object(r.jsx)(L.a, {
                spacing: "5px",
                marginBottom: "0.5rem",
                children:
                  (console.log("defaultValue:", n),
                  null === n || void 0 === n
                    ? void 0
                    : n.map(function (e) {
                        return Object(r.jsx)(
                          zt,
                          {
                            m: 1,
                            bgColor: e.color,
                            hasCloseButton: !0,
                            onClose: function () {
                              return o(e);
                            },
                            children: e.value,
                          },
                          e.id
                        );
                      })),
              }),
              (console.log("renderSelect"),
              Object(r.jsx)(TC.a, {
                isMulti: !0,
                onChange: c,
                options: t || void 0,
                onCreateOption: s,
                defaultValue: n,
                value: n,
                placeholder: "Select Task's Label",
                styles: {
                  multiValue: function (e) {
                    return Object(p.a)(
                      Object(p.a)({}, e),
                      {},
                      { display: "none", backgroundColor: "primary.100" }
                    );
                  },
                  clearIndicator: function (e) {
                    return Object(p.a)(
                      Object(p.a)({}, e),
                      {},
                      { display: "none" }
                    );
                  },
                },
              })),
            ],
          });
        },
        RC = En.a({ email: En.c().max(5).required() }),
        zC = En.a({ content: En.c().min(5).required() }),
        FC = function (e) {
          var t,
            n,
            C,
            i,
            o,
            c,
            l,
            d,
            u,
            j,
            b,
            h,
            x,
            O,
            g,
            f,
            M = e.taskId,
            v = e.match,
            Z = e.isOpen,
            A = e.onClose,
            w = null === v || void 0 === v ? void 0 : v.params.projectId,
            k = Object(dn.a)(),
            y = s.useLazyQuery(ut, f),
            I = Object(pt.a)(y, 2),
            S = I[0],
            B = I[1],
            D = B.loading,
            T = B.data,
            E = B.refetch,
            z = tt(),
            V = Object(pt.a)(z, 1)[0],
            G = (function (e) {
              return s.useMutation(qe, e);
            })(),
            W = Object(pt.a)(G, 1)[0],
            J = (function (e) {
              return s.useMutation(Fe, e);
            })(),
            N = Object(pt.a)(J, 1)[0],
            q = (function (e) {
              return s.useMutation(Ne, e);
            })(),
            Q = Object(pt.a)(q, 1)[0],
            U = (function (e) {
              return s.useMutation(ze, e);
            })(),
            H = Object(pt.a)(U, 1)[0],
            P = (function (e) {
              return s.useLazyQuery(it, e);
            })(),
            K = Object(pt.a)(P, 2),
            X = K[0],
            $ = K[1].data,
            _ = (function (e) {
              return s.useMutation(De, e);
            })(),
            ee = Object(pt.a)(_, 1)[0],
            te = (function (e) {
              return s.useMutation(Ge, e);
            })(),
            ne = Object(pt.a)(te, 1)[0],
            Ce = at().data;
          if (
            (Object(a.useEffect)(
              function () {
                Z &&
                  M &&
                  w &&
                  (console.log("isOpen:", Z),
                  console.log("taskId:", M),
                  console.log("projectId", w),
                  T
                    ? E && E({ projectId: w, id: M })
                    : S({ variables: { projectId: w, id: M } }),
                  X({ variables: { projectId: w } }));
              },
              [M, Z, S, w, X, E, T]
            ),
            !M)
          )
            return null;
          if (!(null === T || void 0 === T ? void 0 : T.getTask.task))
            return Object(r.jsx)(ht.a, { children: "no task" });
          var re = function () {
              k({
                position: "bottom-right",
                title: "Update Task Fail...",
                description: "Please try again in a moment.",
                status: "error",
                isClosable: !0,
                duration: 4e3,
              });
            },
            ae = function () {
              k({
                position: "bottom-right",
                title: "Task Updated!",
                status: "success",
                isClosable: !0,
                duration: 4e3,
              });
            },
            ie = (function () {
              var e = Object(ln.a)(
                sn.a.mark(function e(t) {
                  var n, C, r;
                  return sn.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              console.log("start update:", t),
                              (e.prev = 1),
                              (e.next = 4),
                              V({
                                variables: {
                                  projectId: w,
                                  options: Object(p.a)(
                                    Object(p.a)({}, t),
                                    {},
                                    { id: M }
                                  ),
                                },
                              })
                            );
                          case 4:
                            if (
                              ((C = e.sent),
                              !(null === (n = C.data) || void 0 === n
                                ? void 0
                                : n.updateTask.error))
                            ) {
                              e.next = 7;
                              break;
                            }
                            throw new Error(
                              null === (r = C.data) || void 0 === r
                                ? void 0
                                : r.updateTask.error.message
                            );
                          case 7:
                            ae(), (e.next = 14);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(1)),
                              re(),
                              console.log("updateTask error:", e.t0);
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 10]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            oe = (function () {
              var e = Object(ln.a)(
                sn.a.mark(function e(t, n) {
                  var C, r, a;
                  return sn.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (C = n.resetForm),
                              (e.prev = 1),
                              (e.next = 4),
                              ee({
                                variables: {
                                  taskId: M,
                                  projectId: w,
                                  options: Object(p.a)({}, t),
                                },
                                refetchQueries: [
                                  {
                                    query: ut,
                                    variables: { projectId: w, id: M },
                                  },
                                ],
                              })
                            );
                          case 4:
                            if (
                              ((a = e.sent),
                              !(null === (r = a.data) || void 0 === r
                                ? void 0
                                : r.createComment.error))
                            ) {
                              e.next = 7;
                              break;
                            }
                            throw new Error(a.data.createComment.error.message);
                          case 7:
                            C(), ae(), (e.next = 15);
                            break;
                          case 11:
                            (e.prev = 11),
                              (e.t0 = e.catch(1)),
                              console.log("create comment error:", e.t0),
                              re();
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 11]]
                  );
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })(),
            ce = (function () {
              var e = Object(ln.a)(
                sn.a.mark(function e(t) {
                  var n, C, r, a;
                  return sn.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t.id),
                              console.log("labelId:", n),
                              (e.prev = 2),
                              (e.next = 5),
                              Q({
                                variables: {
                                  projectId: w,
                                  taskId: M,
                                  labelId: n,
                                },
                                refetchQueries: [
                                  {
                                    query: ut,
                                    variables: { projectId: w, id: M },
                                  },
                                  { query: it, variables: { projectId: w } },
                                ],
                              })
                            );
                          case 5:
                            if (
                              ((r = e.sent),
                              !(null === (C = r.data) || void 0 === C
                                ? void 0
                                : C.deleteTaskLabel.error))
                            ) {
                              e.next = 8;
                              break;
                            }
                            throw new Error(
                              null === (a = r.data) || void 0 === a
                                ? void 0
                                : a.deleteTaskLabel.error.message
                            );
                          case 8:
                            ae(), (e.next = 15);
                            break;
                          case 11:
                            (e.prev = 11),
                              (e.t0 = e.catch(2)),
                              console.log("delete label Error", e.t0),
                              re();
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 11]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            se = (function () {
              var e = Object(ln.a)(
                sn.a.mark(function e(t) {
                  var n, C, r;
                  return sn.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              H({
                                variables: {
                                  projectId: w,
                                  taskId: M,
                                  name: t,
                                  color: aC[mt.a.random(0, aC.length - 1)],
                                },
                                refetchQueries: [
                                  {
                                    query: ut,
                                    variables: { projectId: w, id: M },
                                  },
                                  { query: it, variables: { projectId: w } },
                                ],
                              })
                            );
                          case 3:
                            if (
                              ((C = e.sent),
                              !(null === (n = C.data) || void 0 === n
                                ? void 0
                                : n.createTaskLabel.error))
                            ) {
                              e.next = 6;
                              break;
                            }
                            throw new Error(
                              null === (r = C.data) || void 0 === r
                                ? void 0
                                : r.createTaskLabel.error.message
                            );
                          case 6:
                            ae(), (e.next = 13);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(0)),
                              console.log("create label Error", e.t0),
                              re();
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 9]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            le = function (e) {
              console.log("formValue:", e),
                ie({ basicOptions: Object(p.a)({}, e) });
            },
            de = (function () {
              var e = Object(ln.a)(
                sn.a.mark(function e(t) {
                  var n, C;
                  return sn.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              W({
                                variables: {
                                  taskId: M,
                                  projectId: w,
                                  userId: t,
                                },
                                refetchQueries: [
                                  {
                                    query: ut,
                                    variables: { projectId: w, id: M },
                                  },
                                ],
                              })
                            );
                          case 3:
                            if (
                              ((C = e.sent),
                              !(null === (n = C.data) || void 0 === n
                                ? void 0
                                : n.deleteUserTask.error))
                            ) {
                              e.next = 6;
                              break;
                            }
                            throw new Error(
                              C.data.deleteUserTask.error.message
                            );
                          case 6:
                            ae(), (e.next = 13);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(0)),
                              re(),
                              console.log("delete assignee error:", e.t0);
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 9]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            ue = (function () {
              var e = Object(ln.a)(
                sn.a.mark(function e(t) {
                  var n, C;
                  return sn.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              N({
                                variables: {
                                  taskId: M,
                                  projectId: w,
                                  userId: t,
                                },
                                refetchQueries: [
                                  {
                                    query: ut,
                                    variables: { projectId: w, id: M },
                                  },
                                ],
                              })
                            );
                          case 3:
                            if (
                              ((C = e.sent),
                              !(null === (n = C.data) || void 0 === n
                                ? void 0
                                : n.createUserTask.error))
                            ) {
                              e.next = 6;
                              break;
                            }
                            throw new Error(
                              C.data.createUserTask.error.message
                            );
                          case 6:
                            ae(), (e.next = 13);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(0)),
                              re(),
                              console.log("delete assignee error:", e.t0);
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 9]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            je = (function () {
              var e = Object(ln.a)(
                sn.a.mark(function e(t) {
                  var n, C, r;
                  return sn.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              ne({
                                variables: { projectId: w, id: t },
                                refetchQueries: [
                                  {
                                    query: ut,
                                    variables: { projectId: w, id: M },
                                  },
                                ],
                              })
                            );
                          case 3:
                            if (
                              ((C = e.sent),
                              !(null === (n = C.data) || void 0 === n
                                ? void 0
                                : n.deleteComment.error))
                            ) {
                              e.next = 6;
                              break;
                            }
                            throw new Error(
                              null === (r = C.data) || void 0 === r
                                ? void 0
                                : r.deleteComment.error.message
                            );
                          case 6:
                            ae(), (e.next = 13);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(0)),
                              console.log("delete label Error", e.t0),
                              re();
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 9]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            be = {
              currentSprint:
                null === T ||
                void 0 === T ||
                null === (t = T.getTask.task) ||
                void 0 === t
                  ? void 0
                  : t.sprint,
              sprints:
                null === $ ||
                void 0 === $ ||
                null === (n = $.project.project) ||
                void 0 === n
                  ? void 0
                  : n.sprint,
              onSprintSelect: function (e) {
                ie({ sprintId: e });
              },
            },
            pe = {
              options: rC(
                $
                  ? null === (C = $.project.project) || void 0 === C
                    ? void 0
                    : C.projectPermissions
                  : null
              ),
              defaultValue: rC(
                null === T ||
                  void 0 === T ||
                  null === (i = T.getTask.task) ||
                  void 0 === i
                  ? void 0
                  : i.userTask
              ),
              deleteAssignee: de,
              createAssignee: ue,
            };
          console.log("getTaskData", T);
          var Le = {
              options: oC(
                null === $ ||
                  void 0 === $ ||
                  null === (o = $.project.project) ||
                  void 0 === o
                  ? void 0
                  : o.label
              ),
              defaultValue: iC(
                (null === T || void 0 === T ? void 0 : T.getTask.task)
                  ? null === T || void 0 === T
                    ? void 0
                    : T.getTask.task.taskLabel
                  : void 0
              ),
              createTaskLabel: se,
              deleteTaskLabel: ce,
            },
            me = {
              defaultOption: (
                null === T ||
                void 0 === T ||
                null === (c = T.getTask.task) ||
                void 0 === c
                  ? void 0
                  : c.sprint
              )
                ? cC([T.getTask.task.sprint])[0]
                : void 0,
              options: (
                null === $ ||
                void 0 === $ ||
                null === (l = $.project.project) ||
                void 0 === l
                  ? void 0
                  : l.board
              )
                ? cC(
                    null === $ ||
                      void 0 === $ ||
                      null === (d = $.project.project) ||
                      void 0 === d
                      ? void 0
                      : d.board
                  )
                : void 0,
              onChange: function (e) {
                ie(e);
              },
            },
            he = {
              defaultStartDate: sC(
                null === T ||
                  void 0 === T ||
                  null === (u = T.getTask.task) ||
                  void 0 === u
                  ? void 0
                  : u.startDate
              ),
              defaultEndDate: sC(
                null === T ||
                  void 0 === T ||
                  null === (j = T.getTask.task) ||
                  void 0 === j
                  ? void 0
                  : j.endDate
              ),
              handleSubmit: function (e) {
                le(e);
              },
            };
          return Object(r.jsx)("div", {
            children: Object(r.jsx)(tC.a, {
              isOpen: !!Z && !!M && !!w,
              placement: "right",
              onClose: A,
              size: "md",
              children: Object(r.jsx)(Yn.h, {
                children: D
                  ? Object(r.jsx)(Qt.a, {
                      children: Object(r.jsx)(Dt.a, { size: "lg" }),
                    })
                  : Object(r.jsx)(tC.b, {
                      bgColor: "primary.400",
                      padding: "3",
                      children: Object(r.jsxs)(Yn.b, {
                        padding: "0",
                        children: [
                          Object(r.jsx)(Yn.c, {
                            color: "achromatic.700",
                            mr: "3",
                            mt: "6",
                          }),
                          Object(r.jsxs)(L.a, {
                            bgColor: "achromatic.100",
                            mt: 2,
                            py: "4",
                            px: "10",
                            borderTopRadius: "md",
                            boxShadow: "sm",
                            children: [
                              Object(r.jsxs)(L.a, {
                                display: "flex",
                                alignItems: "center",
                                mb: 2,
                                children: [
                                  Object(r.jsxs)(ht.a, {
                                    mr: "2",
                                    fontSize: "sm",
                                    color: "primary.200",
                                    children: [
                                      "Task - ",
                                      null === T ||
                                      void 0 === T ||
                                      null === (b = T.getTask.task) ||
                                      void 0 === b
                                        ? void 0
                                        : b.taskIndex,
                                    ],
                                  }),
                                  (
                                    null === T ||
                                    void 0 === T ||
                                    null === (h = T.getTask.task) ||
                                    void 0 === h
                                      ? void 0
                                      : h.sprint.didStart
                                  )
                                    ? Object(r.jsx)(bC, Object(p.a)({}, me))
                                    : null,
                                ],
                              }),
                              Object(r.jsx)(kn, {
                                validationSchema: RC,
                                onSubmit: function (e) {
                                  return ie(e);
                                },
                                initialValues: {
                                  title:
                                    null === T ||
                                    void 0 === T ||
                                    null === (x = T.getTask.task) ||
                                    void 0 === x
                                      ? void 0
                                      : x.title,
                                },
                                children: Object(r.jsx)(jC, {
                                  label: "title",
                                  name: "title",
                                  isEditable: !0,
                                  isLabelNonVisible: !0,
                                  fontSize: "2xl",
                                  fontWeight: "bold",
                                  onBlurSubmit: le,
                                  placeholder: "Task Title Here",
                                  autoHeight: !0,
                                  paddingNone: !0,
                                }),
                              }),
                              Object(r.jsxs)(L.a, {
                                children: [
                                  Object(r.jsx)(wC, { children: "Sprint" }),
                                  Object(r.jsx)(LC, Object(p.a)({}, be)),
                                ],
                              }),
                              Object(r.jsxs)(L.a, {
                                mt: 2,
                                children: [
                                  Object(r.jsx)(wC, {
                                    children: "Assignee Users",
                                  }),
                                  Object(r.jsx)(AC, Object(p.a)({}, pe)),
                                ],
                              }),
                              Object(r.jsx)(L.a, {
                                mt: 2,
                                children: Object(r.jsx)(
                                  DC,
                                  Object(p.a)({}, he)
                                ),
                              }),
                              Object(r.jsxs)(L.a, {
                                mt: 2,
                                children: [
                                  Object(r.jsx)(wC, { children: "Label" }),
                                  Object(r.jsx)(EC, Object(p.a)({}, Le)),
                                ],
                              }),
                              Object(r.jsxs)(L.a, {
                                mt: 2,
                                children: [
                                  Object(r.jsx)(wC, {
                                    children: "Description",
                                  }),
                                  Object(r.jsx)(kn, {
                                    validationSchema: RC,
                                    onSubmit: function (e) {
                                      return le(e);
                                    },
                                    initialValues: {
                                      description:
                                        null === T ||
                                        void 0 === T ||
                                        null === (O = T.getTask.task) ||
                                        void 0 === O
                                          ? void 0
                                          : O.description,
                                    },
                                    children: Object(r.jsx)(jC, {
                                      label: "description",
                                      name: "description",
                                      isLabelNonVisible: !0,
                                      onBlurSubmit: le,
                                      placeholder: "description here",
                                      autoHeight: !0,
                                    }),
                                  }),
                                ],
                              }),
                              Object(r.jsx)(L.a, {
                                children: (function () {
                                  var e, t;
                                  return (
                                    null === T ||
                                    void 0 === T ||
                                    null === (e = T.getTask.task) ||
                                    void 0 === e
                                      ? void 0
                                      : e.file
                                  )
                                    ? Object(r.jsx)(eC.a, {
                                        color: "achromatic.600",
                                        fontSize: "sm",
                                        children:
                                          null === T ||
                                          void 0 === T ||
                                          null === (t = T.getTask.task) ||
                                          void 0 === t
                                            ? void 0
                                            : t.file.map(function (e) {
                                                return Object(r.jsxs)(
                                                  eC.b,
                                                  {
                                                    display: "flex",
                                                    alignItems: "flex-end",
                                                    children: [
                                                      Object(r.jsx)(R.a, {}),
                                                      Object(r.jsx)("a", {
                                                        target: "blank",
                                                        href:
                                                          "https://naver.com",
                                                        children: e.fileLink,
                                                      }),
                                                    ],
                                                  },
                                                  e.fileLink
                                                );
                                              }),
                                      })
                                    : null;
                                })(),
                              }),
                              Object(r.jsxs)(L.a, {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                color: "achromatic.600",
                                children: [
                                  Object(r.jsx)(fn.a, {
                                    leftIcon: Object(r.jsx)(m.d, {}),
                                    size: "sm",
                                    bgColor: "transparent",
                                    padding: "0",
                                    _hover: { backgroundColor: "transparent" },
                                    fontWeight: "normal",
                                    children: "Add a file",
                                  }),
                                  Object(r.jsx)(F, {
                                    "aria-label": "delete task",
                                    iconButtonType: "deleteBin",
                                    padding: "0",
                                    h: "1rem",
                                    w: "0",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(r.jsxs)(L.a, {
                            bgColor: "achromatic.200",
                            borderBottomRadius: "md",
                            py: "4",
                            px: "10",
                            boxShadow: "sm",
                            children: [
                              (function () {
                                var e;
                                return (
                                  null === T ||
                                  void 0 === T ||
                                  null === (e = T.getTask.task) ||
                                  void 0 === e
                                    ? void 0
                                    : e.comment
                                )
                                  ? T.getTask.task.comment.map(function (e) {
                                      var t, n, C, a;
                                      return Object(r.jsxs)(L.a, {
                                        display: "flex",
                                        mb: "2",
                                        children: [
                                          Object(r.jsx)(Y.a, {
                                            size: "sm",
                                            name:
                                              null === (t = e.user) ||
                                              void 0 === t
                                                ? void 0
                                                : t.username,
                                          }),
                                          Object(r.jsxs)(L.a, {
                                            ml: "2",
                                            children: [
                                              Object(r.jsxs)(L.a, {
                                                display: "flex",
                                                alignItems: "center",
                                                children: [
                                                  Object(r.jsx)(ht.a, {
                                                    fontSize: "sm",
                                                    fontWeight: "bold",
                                                    children:
                                                      null === (n = e.user) ||
                                                      void 0 === n
                                                        ? void 0
                                                        : n.username,
                                                  }),
                                                  Object(r.jsx)(ht.a, {
                                                    fontSize: "xs",
                                                    fontWeight: "light",
                                                    ml: 3,
                                                    children: CC()(
                                                      Number(e.createdAt)
                                                    )
                                                      .fromNow()
                                                      .toString(),
                                                  }),
                                                  (null === (C = e.user) ||
                                                  void 0 === C
                                                    ? void 0
                                                    : C.email) ===
                                                  (null === Ce ||
                                                  void 0 === Ce ||
                                                  null ===
                                                    (a = Ce.getMe.user) ||
                                                  void 0 === a
                                                    ? void 0
                                                    : a.email)
                                                    ? Object(r.jsx)(F, {
                                                        "aria-label":
                                                          "delete task",
                                                        iconButtonType: "close",
                                                        padding: "0",
                                                        h: "1rem",
                                                        w: "1rem",
                                                        onClick: function () {
                                                          je(e.id);
                                                        },
                                                      })
                                                    : null,
                                                ],
                                              }),
                                              Object(r.jsx)(ht.a, {
                                                fontSize: "sm",
                                                children: e.content,
                                              }),
                                            ],
                                          }),
                                        ],
                                      });
                                    })
                                  : null;
                              })(),
                              Object(r.jsxs)(L.a, {
                                display: "flex",
                                mt: 5,
                                children: [
                                  Object(r.jsx)(Y.a, {
                                    name:
                                      null === Ce ||
                                      void 0 === Ce ||
                                      null === (g = Ce.getMe.user) ||
                                      void 0 === g
                                        ? void 0
                                        : g.username,
                                    size: "sm",
                                    mr: 2,
                                  }),
                                  Object(r.jsx)(L.a, {
                                    width: "full",
                                    children: Object(r.jsx)(kn, {
                                      validationSchema: zC,
                                      onSubmit: oe,
                                      initialValues: { content: "" },
                                      isSubmitButton: !0,
                                      children: Object(r.jsx)(jC, {
                                        label: "content",
                                        name: "content",
                                        isLabelNonVisible: !0,
                                        placeholder: "new comment here",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
              }),
            }),
          });
        },
        VC =
          (Object(u.i)(FC),
          function (e) {
            var t,
              n,
              i,
              o,
              c,
              l = Object.assign({}, e),
              d = l.match.params.projectId,
              u = Object(a.useState)(null),
              j = Object(pt.a)(u, 2),
              b = j[0],
              m = j[1],
              h = Object(a.useState)([]),
              x = Object(pt.a)(h, 2),
              O = x[0],
              g = x[1],
              f = Object(Fn.a)(),
              v = f.isOpen,
              Z = f.onOpen,
              A = f.onClose,
              w =
                ((c = {
                  variables: { projectId: d },
                  fetchPolicy: "cache-and-network",
                }),
                s.useQuery(Ct, c)),
              k = w.loading,
              y = w.data,
              S = (function (e) {
                return s.useQuery(dt, e);
              })({
                variables: { projectId: d },
                fetchPolicy: "cache-and-network",
              }).data,
              B = (function (e) {
                return s.useMutation(Be, e);
              })(),
              D = Object(pt.a)(B, 1)[0],
              T = (function (e) {
                return s.useMutation(Ve, e);
              })(),
              E = Object(pt.a)(T, 1)[0],
              R = (function (e) {
                return s.useMutation(Re, e);
              })(),
              z = Object(pt.a)(R, 1)[0],
              F = (function (e) {
                return s.useMutation(Je, e);
              })(),
              V = Object(pt.a)(F, 1)[0],
              G = tt(),
              Y = Object(pt.a)(G, 2),
              W = Y[0],
              J = Y[1],
              N = (J.data, J.loading),
              q = (function (e) {
                return s.useMutation(Pe, e);
              })(),
              Q = Object(pt.a)(q, 2),
              U = Q[0],
              H = Q[1],
              P = (H.data, H.loading);
            Object(a.useEffect)(
              function () {
                var e;
                (null === y || void 0 === y ? void 0 : y.getBoards) &&
                  (null === y ||
                  void 0 === y ||
                  null === (e = y.getBoards) ||
                  void 0 === e
                    ? void 0
                    : e.boards) &&
                  g(y.getBoards.boards);
              },
              [y]
            );
            var K = (function () {
                var e = Object(ln.a)(
                  sn.a.mark(function e(t, n) {
                    return sn.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              D({
                                variables: { title: t, projectId: n },
                                update: function (e, t) {
                                  var C = t.data,
                                    r =
                                      null === C || void 0 === C
                                        ? void 0
                                        : C.createBoard.boards,
                                    a = r && r[r.length - 2],
                                    i = e.readQuery({
                                      query: Ct,
                                      variables: { projectId: n },
                                    });
                                  console.log("existingBoards", i),
                                    console.log("newBoard", a);
                                  var o = {
                                      getBoards: {
                                        boards: [].concat(
                                          Object(qn.a)(
                                            null === i || void 0 === i
                                              ? void 0
                                              : i.getBoards.boards
                                          ),
                                          [a]
                                        ),
                                        error: null,
                                        __typename: "BoardResponse",
                                      },
                                    },
                                    c = Object(p.a)(Object(p.a)({}, i), o);
                                  return (
                                    e.writeQuery({
                                      query: Ct,
                                      variables: { projectId: n },
                                      data: { getBoards: { boards: c } },
                                    }),
                                    "hello"
                                  );
                                },
                              })
                            );
                          case 2:
                            return e.abrupt("return", e.sent);
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              X = (function () {
                var e = Object(ln.a)(
                  sn.a.mark(function e(t, n, C) {
                    return sn.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              E({
                                variables: {
                                  id: t,
                                  newBoardId: n,
                                  projectId: C,
                                },
                                update: function (e, t) {
                                  var n = t.data,
                                    r =
                                      null === n || void 0 === n
                                        ? void 0
                                        : n.deleteBoard.boards;
                                  r &&
                                    (wr.writeQuery({
                                      query: Ct,
                                      variables: { projectId: C },
                                      data: {
                                        getBoards: { boards: Object(qn.a)(r) },
                                      },
                                    }),
                                    console.log("deleteboard", r));
                                },
                              })
                            );
                          case 2:
                            return e.abrupt("return", e.sent);
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n, C) {
                  return e.apply(this, arguments);
                };
              })(),
              $ = (function () {
                var e = Object(ln.a)(
                  sn.a.mark(function e(t, n) {
                    return sn.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              z({ variables: { options: t, projectId: n } })
                            );
                          case 2:
                            return e.abrupt("return", e.sent);
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              _ = (function () {
                var e = Object(ln.a)(
                  sn.a.mark(function e(t, n) {
                    return sn.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              V({ variables: { id: t, projectId: n } })
                            );
                          case 2:
                            return e.abrupt("return", e.sent);
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              ee = (function () {
                var e = Object(ln.a)(
                  sn.a.mark(function e(t, n) {
                    return sn.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              W({ variables: { projectId: n, options: t } })
                            );
                          case 2:
                            return e.abrupt("return", e.sent);
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              te = (function () {
                var e = Object(ln.a)(
                  sn.a.mark(function e(t, n) {
                    return sn.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              U({ variables: { options: t, projectId: n } })
                            );
                          case 2:
                            return e.abrupt("return", e.sent);
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })();
            return (
              Object(a.useEffect)(
                function () {
                  b && Z();
                },
                [b, Z]
              ),
              S && S
                ? Object(r.jsx)(r.Fragment, {
                    children: Object(r.jsxs)(L.a, {
                      children: [
                        Object(r.jsx)(bt, Object(p.a)({}, l)),
                        Object(r.jsx)(M, Object(p.a)({}, l)),
                        Object(r.jsx)(L.a, {
                          display: "flex",
                          children: Object(r.jsxs)(L.a, {
                            w: "100%",
                            p: 9,
                            ml: 210,
                            mt: 50,
                            children: [
                              Object(r.jsx)(Ot, {}),
                              Object(r.jsxs)(gt.a, {
                                alignItems: "flex-end",
                                mt: 7,
                                mb: 5,
                                ml: 5,
                                children: [
                                  Object(r.jsx)(I, {
                                    mr: 3,
                                    headingType: C.sprint,
                                    children: (
                                      null === S ||
                                      void 0 === S ||
                                      null ===
                                        (t = S.getStartedSprint.sprint) ||
                                      void 0 === t
                                        ? void 0
                                        : t.title
                                    )
                                      ? null === S ||
                                        void 0 === S ||
                                        null ===
                                          (n = S.getStartedSprint.sprint) ||
                                        void 0 === n
                                        ? void 0
                                        : n.title
                                      : "",
                                  }),
                                  (
                                    null === S || void 0 === S
                                      ? void 0
                                      : S.getStartedSprint.sprint
                                  )
                                    ? Object(r.jsx)(wn, {
                                        size: "sm",
                                        buttontype: _t.primary,
                                        children: "Sprint complete",
                                      })
                                    : null,
                                ],
                              }),
                              Object(r.jsx)(L.a, {
                                mt: 9,
                                children:
                                  !k &&
                                  (null === y || void 0 === y
                                    ? void 0
                                    : y.getBoards.boards) &&
                                  (null === S ||
                                  void 0 === S ||
                                  null === (i = S.getStartedSprint.sprint) ||
                                  void 0 === i
                                    ? void 0
                                    : i.id)
                                    ? Object(r.jsx)(Xn, {
                                        projectId: d,
                                        sprintId:
                                          null === S ||
                                          void 0 === S ||
                                          null ===
                                            (o = S.getStartedSprint.sprint) ||
                                          void 0 === o
                                            ? void 0
                                            : o.id,
                                        handleBoardCreate: K,
                                        handleBoardDelete: X,
                                        handleBoardUpdate: te,
                                        handleTaskClick: function (e) {
                                          m(e);
                                        },
                                        handleTaskCreate: $,
                                        handleTaskDelete: _,
                                        handleTaskUpdate: ee,
                                        boards: O,
                                        boardLoading: P,
                                        taskLoading: N,
                                      })
                                    : Object(r.jsx)(_n, {}),
                              }),
                            ],
                          }),
                        }),
                        b
                          ? Object(r.jsx)(
                              FC,
                              Object(p.a)(
                                Object(p.a)({ taskId: b }, l),
                                {},
                                { isOpen: v, onClose: A }
                              )
                            )
                          : Object(r.jsx)(ht.a, { children: "oh?" }),
                      ],
                    }),
                  })
                : null
            );
          }),
        GC = function () {
          var e,
            t,
            n = s.useLazyQuery(rt, e),
            C = Object(pt.a)(n, 2),
            r = C[0],
            a = C[1],
            i = (a.loading, a.data),
            o = Object(u.g)();
          i &&
            ((
              null === i ||
              void 0 === i ||
              null === (t = i.getMe.user) ||
              void 0 === t
                ? void 0
                : t.projectPermissions[0]
            )
              ? o.push(
                  "/project/dashboard/".concat(
                    i.getMe.user.projectPermissions[0].project.id
                  )
                )
              : o.push("/new-project"));
          return { routeToProject: r };
        },
        YC = function () {
          var e,
            t = GC().routeToProject,
            n = En.a({
              password: En.c().min(6).required(),
              email: En.c().email().required(),
              username: En.c().min(3).max(20).required(),
              confirm: En.c().oneOf(
                [En.b("password"), null],
                "Passwords must match"
              ),
            }),
            a = s.useMutation(He, e),
            i = Object(pt.a)(a, 1)[0],
            o = (function () {
              var e = Object(ln.a)(
                sn.a.mark(function e(n, C) {
                  var r, a, o, c, s, l, d, u;
                  return sn.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (c = C.setFieldError),
                            (s = n.username),
                            (l = n.email),
                            (d = n.password),
                            (e.next = 4),
                            i({
                              variables: {
                                options: {
                                  username: s,
                                  email: l,
                                  password: d,
                                  projectId: null,
                                },
                              },
                            })
                          );
                        case 4:
                          (u = e.sent),
                            (
                              null === (r = u.data) ||
                              void 0 === r ||
                              null === (a = r.register.error) ||
                              void 0 === a
                                ? void 0
                                : a.message
                            )
                              ? c(
                                  u.data.register.error.field,
                                  u.data.register.error.message
                                )
                              : (null === (o = u.data) || void 0 === o
                                  ? void 0
                                  : o.register.user) && t(),
                            console.log(u);
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })();
          return Object(r.jsxs)(L.a, {
            bgColor: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDir: "column",
            children: [
              Object(r.jsx)(I, { headingType: C.auth, children: "Register" }),
              Object(r.jsxs)(L.a, {
                w: "70%",
                children: [
                  Object(r.jsxs)(kn, {
                    initialValues: {
                      username: "",
                      email: "",
                      password: "",
                      confirm: "",
                    },
                    validationSchema: n,
                    onSubmit: o,
                    isSubmitButton: !0,
                    isFullButton: !0,
                    submitBtnName: "Sign in",
                    children: [
                      Object(r.jsx)(On, {
                        label: "Name",
                        name: "username",
                        placeholder: "Name",
                      }),
                      Object(r.jsx)(On, {
                        label: "Email",
                        name: "email",
                        type: "email",
                        iconType: "email",
                        placeholder: "Email",
                      }),
                      Object(r.jsx)(On, {
                        label: "Password",
                        name: "password",
                        type: "password",
                        iconType: "password",
                        placeholder: "Password",
                      }),
                      Object(r.jsx)(On, {
                        label: "Confirm Password",
                        name: "confirm",
                        type: "password",
                        iconType: "password",
                        placeholder: "Password",
                      }),
                    ],
                  }),
                  Object(r.jsxs)(L.a, {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 7,
                    children: [
                      Object(r.jsx)("a", {
                        href: "http://retrievo.io/auth/google",
                        children: Object(r.jsx)(Sn, {
                          "aria-label": "google login button",
                          iconType: vn.google,
                          shadowType: An.base,
                          buttonColor: Mn.white,
                          size: "md",
                          variant: "outline",
                          mr: 2,
                        }),
                      }),
                      Object(r.jsx)("a", {
                        href: "http://retrievo.io/auth/github",
                        children: Object(r.jsx)(Sn, {
                          "aria-label": "google login button",
                          iconType: vn.github,
                          shadowType: An.base,
                          buttonColor: Mn.white,
                          size: "md",
                          variant: "outline",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        WC = function () {
          var e,
            t = GC().routeToProject,
            n = En.a({
              password: En.c().min(6).required(),
              email: En.c().email().required(),
            }),
            a = s.useMutation(Qe, e),
            i = Object(pt.a)(a, 1)[0],
            o = (function () {
              var e = Object(ln.a)(
                sn.a.mark(function e(n, C) {
                  var r, a, o, c, s, l, d;
                  return sn.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (c = C.setFieldError),
                            (s = n.email),
                            (l = n.password),
                            (e.next = 4),
                            i({
                              variables: {
                                options: {
                                  email: s,
                                  password: l,
                                  projectId: null,
                                },
                              },
                            })
                          );
                        case 4:
                          (d = e.sent),
                            (
                              null === (r = d.data) ||
                              void 0 === r ||
                              null === (a = r.login.error) ||
                              void 0 === a
                                ? void 0
                                : a.message
                            )
                              ? c(
                                  d.data.login.error.field,
                                  d.data.login.error.message
                                )
                              : (null === (o = d.data) || void 0 === o
                                  ? void 0
                                  : o.login.user) && t();
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })();
          return Object(r.jsxs)(L.a, {
            bgColor: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDir: "column",
            children: [
              Object(r.jsx)(I, { headingType: C.auth, children: "Login" }),
              Object(r.jsxs)(L.a, {
                w: "70%",
                children: [
                  Object(r.jsxs)(kn, {
                    initialValues: { email: "", password: "" },
                    validationSchema: n,
                    onSubmit: o,
                    isSubmitButton: !0,
                    isFullButton: !0,
                    submitBtnName: "Sign in",
                    children: [
                      Object(r.jsx)(On, {
                        label: "email",
                        name: "email",
                        type: "email",
                        iconType: "email",
                        placeholder: "Email",
                      }),
                      Object(r.jsx)(On, {
                        label: "password",
                        name: "password",
                        type: "password",
                        iconType: "password",
                        placeholder: "Password",
                      }),
                    ],
                  }),
                  Object(r.jsxs)(L.a, {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 7,
                    children: [
                      Object(r.jsx)("a", {
                        href: "http://retrievo.io/auth/google",
                        children: Object(r.jsx)(Sn, {
                          "aria-label": "google login button",
                          iconType: vn.google,
                          shadowType: An.base,
                          buttonColor: Mn.white,
                          size: "md",
                          variant: "outline",
                          mr: 2,
                        }),
                      }),
                      Object(r.jsx)("a", {
                        href: "http://retrievo.io/auth/github",
                        children: Object(r.jsx)(Sn, {
                          "aria-label": "google login button",
                          iconType: vn.github,
                          shadowType: An.base,
                          buttonColor: Mn.white,
                          size: "md",
                          variant: "outline",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        JC = function () {
          return Object(r.jsxs)("svg", {
            width: "383",
            height: "383",
            viewBox: "0 0 383 383",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              Object(r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d:
                  "M206.804 332.369C275.539 332.369 285.283 301.79 295.705 296.171C306.127 290.552 299.647 279.275 306.483 270.77C317.401 257.184 324.018 264.185 327.631 246.56C331.245 228.935 324.676 223.949 324.676 208.214C324.676 176.687 339.778 161.763 320.492 145.268C301.206 128.773 268.999 130.719 237.145 130.719C178.022 130.719 142.603 49.6707 63.7471 73.9861C36.5717 82.3657 39.5752 93.7852 45.5464 134.141C48.1394 151.666 28.5613 173.946 31.9582 193.861C38.1622 230.233 54.5473 225.3 85.4622 249.857C90.6486 253.977 98.213 253.934 103.867 258.16C113.346 265.244 113.956 276.259 131.677 283.688C160.253 295.669 157.829 332.369 206.804 332.369Z",
                fill: "#314043",
              }),
              Object(r.jsx)("ellipse", {
                cx: "75.4035",
                cy: "238.481",
                rx: "17.3779",
                ry: "16.3413",
                fill: "#C2FFB3",
              }),
              Object(r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d:
                  "M68.5883 180.218C65.6259 172.819 68.2136 168.386 69.8724 162.599C71.258 157.766 82.0935 149.914 87.0803 158.101C88.5474 160.51 87.9589 162.786 91.1653 164.903C98.9273 170.027 94.6929 159.396 94.9815 156.709C95.1223 155.398 94.0147 152.374 94.427 151.109C94.8597 149.782 97.1659 147.896 97.1659 145.144C97.1659 142.392 92.4749 141.332 91.1653 140.656C79.5283 134.648 72.1275 124.612 75.8156 119.519C80.9542 112.423 101.093 123.588 107.144 124.612C107.222 124.626 108.303 118.984 109.186 117.692C110.952 115.108 112.903 112.599 115.232 110.507C116.275 109.57 117.688 108.991 119.078 108.804C123.237 108.242 127.491 107.782 131.656 108.291C133.128 108.47 141.894 98.3254 145.312 95.053C171.534 69.9461 224.101 100.541 195.447 142.116C190.181 149.757 183.447 152.187 182.577 154.888C180.645 160.887 192.807 160.098 197.958 160.738C206.759 161.833 211.097 166.354 205.634 174.103C202.23 178.931 182.263 178.684 173.517 175.193C170.271 173.898 166.259 168.233 163.19 172.88C161.076 176.082 152.834 182.875 143.992 186.718C140.001 188.452 135.455 187.407 132.05 188.956C127.256 191.136 113.104 200.291 107.144 200.289C101.141 200.286 93.3734 193.063 92.4749 192.589C91.1051 191.867 80.509 189.797 75.2745 181.719C73.6915 179.276 69.6727 182.926 68.5883 180.218Z",
                fill: "white",
              }),
              Object(r.jsx)("ellipse", {
                cx: "170.508",
                cy: "137.327",
                rx: "1.84087",
                ry: "1.81455",
                fill: "#FFB61D",
              }),
              Object(r.jsx)("ellipse", {
                cx: "157.03",
                cy: "133.539",
                rx: "1.78732",
                ry: "1.78733",
                fill: "#FFB61D",
              }),
              Object(r.jsx)("ellipse", {
                cx: "287.25",
                cy: "132.007",
                rx: "24.2567",
                ry: "24.2567",
                fill: "#FFF0C8",
              }),
              Object(r.jsx)("ellipse", {
                cx: "211.403",
                cy: "269.617",
                rx: "70.4847",
                ry: "60.2438",
                fill: "#EBA9A9",
              }),
              Object(r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d:
                  "M151.648 302.465L152.439 303.038C150.654 304.64 147.968 302.648 146.462 300.781C144.041 297.779 141.583 294.588 140.846 290.802C140.427 288.647 140.595 286.427 140.764 284.239L141.447 275.416C141.75 271.506 142.054 267.589 142.73 263.726C144.562 253.272 149.173 243.318 155.963 235.16L156.031 235.079C157.23 233.639 158.539 232.066 158.516 230.2C158.467 226.25 160.742 222.559 163.728 219.973C166.715 217.388 170.371 215.729 173.972 214.104C175.604 213.369 177.734 212.71 178.998 213.976C181.598 216.581 185.938 214.922 189.373 213.599C193.59 211.974 198.094 211.099 202.612 211.026C202.744 211.024 202.876 211.022 203.01 211.02L203.01 211.02C205.723 210.981 208.776 210.938 210.431 208.836C211.485 207.498 213.5 207.575 215.192 207.778L226.824 209.169C227.713 209.275 228.778 209.518 229.059 210.368C229.81 212.648 232.461 213.578 234.759 214.271C242.93 216.735 250.916 220.079 257.852 225.05C264.789 230.021 270.651 236.708 273.762 244.655C268.704 237.741 263.516 230.698 256.496 225.789C254.487 224.384 252.351 223.171 250.182 222.028C245.064 219.329 239.737 217.004 234.203 215.314C208.513 207.473 178.797 214.746 159.631 233.564C156.853 236.293 154.247 239.298 152.671 242.859L154.753 243.505C151.453 244.98 149.003 248.211 148.472 251.786C149.8 249.512 151.693 247.57 153.932 246.184C153.291 248.326 151.624 250.046 149.99 251.733C147.907 253.882 145.877 255.977 146.093 258.817C147.082 256.222 149.573 254.263 152.328 253.914C147.958 258.184 143.268 263.195 143.407 269.304C145.001 265.777 147.708 262.762 151.044 260.799L146.242 267.253C144.425 269.694 142.513 272.483 142.928 275.497C144.508 272.661 146.767 270.207 149.462 268.398C148.165 271.349 146.311 274.056 144.029 276.334C146.199 276.071 148.289 275.172 149.972 273.776C149.267 274.761 148.631 275.873 148.607 277.084C148.584 278.296 149.368 279.596 150.567 279.77C150.93 278.958 152.069 278.616 152.819 279.092C150.544 281.306 150.521 285.408 152.771 287.648C152.971 286.595 153.859 285.708 154.911 285.509C153.233 288.443 152.931 292.128 154.11 295.296C154.467 293.501 155.463 291.84 156.878 290.679C156.062 294.938 154.258 299.003 151.648 302.465ZM150.654 301.109C152.075 301.094 152.959 299.505 153.107 298.092C153.284 296.401 152.864 294.711 152.448 293.063L149.976 283.288C149.511 283.435 149.457 283.941 149.4 284.471C149.352 284.924 149.302 285.394 148.993 285.673C148.367 284.895 148.296 283.717 148.823 282.869C149.356 282.014 149.008 280.815 148.252 280.148C147.497 279.481 146.445 279.255 145.438 279.222C144.893 279.204 144.314 279.246 143.869 279.559C143.423 279.873 143.189 280.539 143.506 280.982C144.447 282.302 145.156 283.788 145.589 285.351C145.621 285.468 145.653 285.586 145.684 285.705C145.899 286.516 146.12 287.35 146.714 287.928C147.173 288.376 147.29 289.058 147.383 289.692L148.138 294.828C148.275 295.763 148.413 296.717 148.256 297.648C148.098 298.58 147.595 299.504 146.75 299.927L149.448 300.845C149.84 300.978 150.241 301.113 150.654 301.109ZM180.071 216.916C179.539 217.029 179.093 216.561 178.713 216.162L178.669 216.117C178.279 215.709 177.608 215.353 177.196 215.74C172.407 220.246 166.956 224.049 161.073 226.988C160.005 227.522 159.862 228.96 159.861 230.154C159.861 230.552 160.243 231.112 160.491 230.8C161.704 229.28 163.282 228.1 164.841 226.938C169.228 223.667 173.667 220.366 178.696 218.21C179.306 217.948 180.021 217.578 180.071 216.916ZM228.213 211.848C227.942 211.211 227.17 210.981 226.49 210.853C224.636 210.504 222.748 210.346 220.863 210.188C218.274 209.97 215.689 209.754 213.197 209.043C212.399 208.815 211.717 209.624 211.279 210.329C212.592 210.192 213.913 210.136 215.233 210.16C217.53 210.202 219.815 210.489 222.095 210.774C223.254 210.92 224.42 211.067 225.531 211.426C225.661 211.468 225.791 211.513 225.922 211.558C226.681 211.818 227.465 212.087 228.213 211.848ZM203.69 221.639C204.215 221.759 204.715 222.152 204.794 222.684C204.872 223.216 204.509 223.734 204.045 224.004C203.581 224.275 203.032 224.351 202.5 224.421L200.897 224.634C200.736 224.655 200.57 224.678 200.431 224.761C200.028 224.999 200.056 225.646 200.385 225.978C200.715 226.311 201.22 226.394 201.688 226.393C203.869 226.389 205.933 224.82 206.599 222.743C206.757 222.25 206.841 221.702 206.645 221.222C206.546 220.979 206.38 220.768 206.195 220.581C205.338 219.712 204.06 219.329 202.842 219.415C201.624 219.501 200.465 220.02 199.474 220.733C198.999 221.075 198.546 221.475 198.277 221.995C198.007 222.514 197.949 223.173 198.251 223.675C198.366 223.866 198.544 224.035 198.764 224.071C198.985 224.107 199.239 223.965 199.266 223.743C199.342 223.128 199.792 222.607 200.327 222.294C200.863 221.981 201.481 221.844 202.089 221.722C202.617 221.616 203.165 221.519 203.69 221.639ZM160.715 252.1C161.315 248.556 164.177 245.674 167.515 244.339C169.354 243.603 171.458 243.281 173.308 243.99C173.764 244.165 174.206 244.406 174.535 244.768C174.844 245.108 175.038 245.536 175.185 245.971C176.124 248.758 175.171 251.981 173.152 254.12C171.133 256.259 168.194 257.381 165.261 257.591C164.321 257.659 163.312 257.621 162.536 257.087C161.759 256.553 161.374 255.366 161.972 254.638C162.254 254.651 162.407 254.903 162.563 255.161L162.563 255.161C162.64 255.289 162.718 255.419 162.813 255.521C163.139 255.872 163.678 255.897 164.156 255.877C166.236 255.789 168.348 255.274 170.041 254.062C171.734 252.851 172.95 250.872 172.915 248.79C172.903 248.119 172.757 247.433 172.377 246.881C171.754 245.973 170.574 245.564 169.476 245.636C168.377 245.709 167.347 246.196 166.411 246.777C165.18 247.541 164.043 248.501 163.271 249.727C162.499 250.954 162.122 252.469 162.448 253.881C162.16 254.401 161.302 254.298 160.948 253.82C160.594 253.342 160.616 252.687 160.715 252.1ZM179.872 281.31C178.35 282.29 177.088 283.822 176.854 285.617C176.664 287.068 177.15 288.514 177.63 289.897C178.004 290.977 178.391 292.08 179.104 292.973C180.391 294.586 182.523 295.253 184.56 295.581C185.115 295.67 185.957 295.42 185.759 294.894C183.608 294.854 181.492 293.857 180.092 292.223C178.692 290.59 178.031 288.346 178.321 286.214C178.382 285.765 178.484 285.319 178.673 284.907C179.054 284.075 179.764 283.434 180.533 282.938C182.189 281.868 184.205 281.366 186.168 281.536C188.062 281.699 189.953 282.529 191.109 284.038C192.265 285.547 192.54 287.772 191.521 289.376C191.355 289.636 191.234 290.097 191.538 290.152C193.18 289.267 194.091 287.316 193.999 285.454C193.907 283.591 192.923 281.847 191.572 280.562C190.824 279.851 189.939 279.251 188.936 279.009C187.614 278.69 186.231 279.019 184.915 279.365C183.165 279.825 181.394 280.331 179.872 281.31ZM254.613 283.624C249.109 281.57 243.13 280.804 237.286 281.405C234.836 281.657 232.378 282.157 230.175 283.26C226.019 285.34 223.047 289.622 222.553 294.243C222.059 298.865 224.057 303.678 227.679 306.591C229.053 307.695 230.612 308.522 232.173 309.35L232.173 309.35L232.173 309.35L232.173 309.35L232.173 309.35L232.173 309.35L232.173 309.35L232.173 309.35L232.174 309.35L232.174 309.35L232.174 309.35L232.174 309.35L232.174 309.35L232.174 309.351L232.174 309.351L232.174 309.351L232.174 309.351L232.174 309.351C233.239 309.916 234.306 310.481 235.315 311.136C235.603 311.411 234.954 311.686 234.575 311.564C231.045 310.425 227.617 308.692 225.1 305.968C222.037 302.655 220.543 297.949 221.134 293.476C221.724 289.003 224.389 284.847 228.207 282.442C231.227 280.54 234.837 279.739 238.404 279.61C241.971 279.482 245.527 279.991 249.054 280.538C251.257 280.879 253.84 281.533 254.613 283.624ZM196.708 290.52C196.458 289.947 195.453 289.798 195.27 290.395C194.102 294.194 190.395 297.066 186.425 297.248C185.528 297.289 184.63 297.206 183.736 297.12C181.81 296.933 179.824 296.713 178.138 295.765C175.713 294.401 174.253 291.602 174.236 288.82C174.219 286.038 175.539 283.334 177.542 281.404C177.264 280.625 176.07 281.001 175.477 281.578C172.191 284.772 171.627 290.285 173.933 294.246C176.239 298.206 181.071 300.426 185.626 299.923C190.181 299.419 194.294 296.369 196.412 292.305C196.7 291.751 196.958 291.092 196.708 290.52ZM168.183 309.756C167.441 312.602 167.37 315.621 167.979 318.498C168.252 319.788 168.282 320.499 168.287 320.632L168.288 320.65L168.288 320.653C168.288 320.654 168.288 320.655 168.289 320.655C168.289 320.655 168.289 320.653 168.289 320.65L168.29 320.632C168.296 320.499 168.328 319.785 168.607 318.493C169.23 315.61 169.082 312.565 168.183 309.756ZM172.125 311.477C171.071 313.687 171.202 316.421 172.462 318.521C172.745 318.992 172.959 319.375 173.118 319.658L173.118 319.658C173.331 320.039 173.442 320.237 173.481 320.224C173.523 320.21 173.478 319.943 173.385 319.385L173.385 319.385L173.384 319.385C173.347 319.161 173.302 318.891 173.251 318.571L172.125 311.477ZM175.093 314.299C174.646 315.71 174.975 317.341 175.935 318.468C176.914 319.619 177.234 319.988 176.936 318.506C176.631 316.994 175.998 315.549 175.093 314.299ZM260.991 298.252C259.645 303.655 255.346 307.749 251.177 311.441C251.368 311.852 251.984 311.704 252.378 311.482C256.601 309.106 260.017 305.233 261.576 300.645C263.135 296.058 262.747 290.787 260.287 286.613C260.08 286.263 259.817 285.89 259.418 285.812C259.019 285.734 258.559 286.196 258.793 286.529C261.159 289.878 261.982 294.273 260.991 298.252ZM200.286 249.465C200.276 248.61 200.288 247.685 200.804 247.004C201.515 246.066 202.863 245.967 204.04 245.951C204.565 245.943 205.097 245.937 205.608 246.058C206.696 246.317 207.563 247.12 208.335 247.929C208.506 248.108 208.688 248.329 208.646 248.573C208.594 248.876 208.214 249.015 207.913 248.953C207.713 248.912 207.534 248.812 207.354 248.712C207.263 248.662 207.172 248.612 207.079 248.569C205.997 248.072 204.725 248.617 203.753 249.304C203.6 249.412 203.436 249.551 203.432 249.738C203.428 249.926 203.589 250.072 203.741 250.183C205.054 251.145 206.736 251.591 208.353 251.405C208.74 251.361 209.194 251.219 209.295 250.843C209.334 250.696 209.318 250.523 209.304 250.356C209.279 250.076 209.256 249.813 209.491 249.716C209.613 249.666 209.752 249.702 209.879 249.739C210.754 249.994 211.778 250.403 211.948 251.299C211.997 251.558 211.962 251.828 211.879 252.078C211.638 252.81 210.966 253.382 210.205 253.503C209.867 253.557 209.522 253.528 209.181 253.498C208.29 253.422 207.398 253.345 206.515 253.203C204.894 252.942 203.309 252.459 201.817 251.772C201.3 251.533 200.762 251.24 200.5 250.734C200.301 250.349 200.291 249.898 200.286 249.465ZM233.581 228.387C233.06 226.979 231.801 225.868 230.339 225.525C229.887 225.419 229.376 225.393 228.992 225.656C228.609 225.918 228.477 226.557 228.843 226.843C229.197 227.121 228.983 227.774 228.55 227.898C228.116 228.021 227.65 227.727 227.434 227.332C227.217 226.937 227.194 226.468 227.192 226.017C227.188 225.416 227.243 224.745 227.687 224.34C227.857 224.185 228.067 224.086 228.277 223.992C229.142 223.605 230.099 223.277 231.023 223.485C231.905 223.683 232.607 224.334 233.221 224.995C233.725 225.538 234.202 226.106 234.649 226.697C235.042 227.217 235.421 227.772 235.569 228.408C235.717 229.043 235.589 229.781 235.098 230.211C234.618 230.631 233.878 230.667 233.295 230.408C232.779 230.178 232.339 229.673 232.378 229.11C232.416 228.547 233.108 228.08 233.581 228.387ZM238.231 267.979C239.523 267.942 240.727 266.946 241.006 265.684C241.176 264.917 240.967 264.004 240.298 263.591C239.809 263.289 239.194 263.311 238.621 263.348C237.828 263.399 237.004 263.468 236.315 263.864C235.625 264.26 235.112 265.081 235.328 265.847C235.68 267.091 236.938 268.016 238.231 267.979ZM238.397 266.114C238.147 266.181 237.791 266.117 237.768 265.859C237.758 265.752 237.816 265.651 237.882 265.566C238.25 265.09 238.949 264.905 239.503 265.138C239.311 265.609 238.889 265.982 238.397 266.114ZM239.064 246.992C238.854 246.506 239.261 245.94 239.757 245.754C240.154 245.605 240.585 245.62 241.012 245.636C241.119 245.639 241.225 245.643 241.331 245.645C241.86 245.651 242.445 245.563 242.788 245.16C242.909 245.018 242.991 244.809 242.899 244.647C242.803 244.477 242.575 244.448 242.38 244.438C241.031 244.368 239.438 244.409 238.66 245.514C238.493 245.751 238.084 245.671 237.927 245.426C237.771 245.182 237.807 244.861 237.896 244.584C238.214 243.594 239.129 242.874 240.128 242.586C241.127 242.297 242.2 242.388 243.214 242.618C243.556 242.695 243.911 242.797 244.16 243.043C244.358 243.238 244.469 243.506 244.542 243.774C244.887 245.058 244.377 246.529 243.311 247.324C242.244 248.119 240.689 248.187 239.557 247.489C239.355 247.365 239.159 247.209 239.064 246.992ZM234.44 269.685C235.066 270.436 235.808 271.118 236.708 271.501C238.528 272.273 240.854 271.559 241.927 269.9C242.318 269.295 242.493 268.373 241.915 267.944C240.989 269.89 238.304 270.749 236.421 269.702C236.06 269.501 235.732 269.245 235.434 268.96C234.079 267.663 233.373 265.545 234.167 263.847C234.426 263.293 234.824 262.815 235.259 262.386C236.208 261.449 237.565 260.682 238.832 261.099C238.884 261.116 238.937 261.135 238.989 261.155C239.167 261.22 239.345 261.286 239.531 261.275C239.773 261.261 240.025 261.044 239.963 260.81C239.945 260.741 239.902 260.681 239.858 260.625C239.075 259.628 237.538 259.32 236.432 259.938C235.114 260.674 233.776 261.54 233.075 262.877C231.935 265.052 232.866 267.799 234.44 269.685ZM255.42 236.134C255.362 236.217 255.376 236.333 255.39 236.443C255.407 236.574 255.422 236.699 255.314 236.752C254.92 236.946 254.448 236.926 254.028 236.797C252.881 236.445 252.112 235.392 251.463 234.383C251.083 233.793 250.705 233.166 250.644 232.467C250.583 231.768 250.94 230.981 251.613 230.783C252.364 230.563 253.1 231.121 253.685 231.641C254.344 232.228 255.018 232.833 255.426 233.616C255.834 234.399 255.924 235.41 255.42 236.134ZM252.925 233.515C253.087 233.672 253.176 233.883 253.264 234.095C253.352 234.303 253.439 234.511 253.596 234.668C253.796 234.867 254.098 234.956 254.374 234.897C253.858 234.098 253.26 233.353 252.593 232.676C252.415 232.73 252.4 232.995 252.507 233.147C252.572 233.239 252.663 233.307 252.755 233.375C252.814 233.42 252.873 233.464 252.925 233.515ZM154.719 305.638C154.655 306.686 154.736 307.899 155.574 308.531C155.853 308.375 155.834 307.975 155.799 307.657C155.583 305.699 156.19 303.812 156.802 301.912C157.24 300.552 157.68 299.185 157.821 297.782C157.862 297.375 157.753 296.818 157.344 296.802C157.038 296.79 156.84 297.114 156.717 297.394C155.571 299.995 154.891 302.801 154.719 305.638ZM236.051 267.855C236.997 268.273 238.046 268.7 239.036 268.399C239.43 268.28 239.781 268.052 240.125 267.828C240.124 268.406 239.626 268.892 239.072 269.058C238.517 269.223 237.921 269.134 237.355 269.012C236.727 268.876 235.959 268.491 236.051 267.855ZM161.219 316.146C161.461 315.717 161.502 315.207 161.538 314.715L161.823 310.798C161.963 308.876 162.103 306.946 161.978 305.023C161.962 304.781 161.937 304.525 161.796 304.327C161.655 304.13 161.355 304.024 161.161 304.171C161.019 304.279 160.983 304.474 160.958 304.651C160.648 306.875 160.483 309.119 160.463 311.365C160.448 312.993 160.522 314.675 161.219 316.146ZM156.938 312.78C156.687 312.992 156.27 312.806 156.131 312.508C155.993 312.21 156.049 311.862 156.108 311.539C156.728 308.159 157.431 304.794 158.217 301.448C158.236 301.364 158.258 301.277 158.312 301.21C158.519 300.955 158.937 301.212 159.083 301.506C159.444 302.228 159.271 303.089 159.091 303.875L157.155 312.32C157.116 312.488 157.07 312.669 156.938 312.78ZM163.644 312.93C163.536 314.198 163.726 315.47 163.916 316.729C163.983 317.177 164.306 317.772 164.711 317.568L165.499 309.132C165.531 308.789 165.553 308.409 165.34 308.138C165.127 307.867 164.589 307.878 164.521 308.216L163.939 311.108C163.818 311.712 163.696 312.317 163.644 312.93ZM245.104 287.076C242.858 285.92 240.124 285.464 237.791 286.433C236.049 287.157 231.124 290.282 230.469 294.287C230.03 296.969 230.034 299.709 230.973 302.298L231.124 302.704C231.403 303.437 232.294 304.28 232.792 303.674C231.338 301.046 231.067 297.792 232.064 294.959C233.062 292.126 235.313 289.761 238.093 288.624C238.678 288.385 239.289 288.197 239.918 288.137C241.191 288.017 242.461 288.429 243.598 289.012C246.047 290.266 249.082 292.353 250.247 294.846C251.371 297.249 252.199 300.115 251.182 302.565C250.165 305.015 243.484 306.788 243.484 306.788L244.223 308.137C244.223 308.137 247.963 307.399 250.247 305.735C259.836 298.752 247.252 288.182 245.104 287.076Z",
                fill: "#00160A",
              }),
              Object(r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d:
                  "M75.6046 252.594C72.2135 252.958 68.6217 252.174 65.9739 250.024C64.0987 248.501 62.781 246.383 61.8564 244.152C60.8526 241.729 60.2755 239.13 60.1595 236.51C60.1158 235.524 60.1392 234.519 60.4291 233.576C60.9061 232.022 62.055 230.776 63.2277 229.651C65.7227 227.258 68.6553 225.075 72.0754 224.572C74.4059 224.229 76.7766 224.696 79.0578 225.283C80.8495 225.744 82.6389 226.288 84.2504 227.197C87.8114 229.204 90.2791 233.034 90.6361 237.106C90.993 241.179 90.5539 243.877 85.0581 248.937C82.2023 250.801 78.9957 252.231 75.6046 252.594ZM81.5849 239.811C81.0349 239.984 80.4866 240.291 79.9188 240.191C78.7588 239.987 78.5512 238.396 78.8088 237.246C79.5462 233.956 81.8395 231.051 84.8682 229.569C84.1826 228.326 82.3613 228.234 81.0731 228.832C79.785 229.43 78.778 230.507 77.5323 231.188C76.9123 231.528 76.1777 231.768 75.5033 231.557C74.3936 231.209 73.97 229.756 74.3333 228.651C74.6966 227.546 75.6033 226.722 76.4739 225.951C73.3192 226.062 70.1975 227.009 67.513 228.669C65.4113 229.969 63.4178 232.1 63.6967 234.556C65.4344 233.157 67.4745 232.136 69.6357 231.584C70.0941 231.467 70.6695 231.408 70.9563 231.784C71.1736 232.069 71.1112 232.479 70.972 232.81C70.2812 234.448 68.2497 234.997 66.9897 236.252C66.8242 236.417 66.6655 236.607 66.6255 236.837C66.547 237.288 66.9766 237.699 67.4279 237.774C67.8792 237.849 68.3323 237.685 68.7603 237.523C69.6494 237.188 70.5385 236.853 71.4275 236.517C72.0711 236.274 72.8353 236.042 73.4076 236.424C73.9997 236.819 74.0555 237.717 73.7209 238.345C73.3862 238.973 72.772 239.394 72.1808 239.79C70.756 240.745 69.3311 241.7 67.9063 242.655C66.7133 243.455 65.3768 244.533 65.4902 245.964C65.5969 247.312 67.0794 248.228 68.4284 248.141C69.7775 248.054 70.9647 247.23 71.9603 246.315C72.956 245.401 73.8547 244.357 75.0109 243.656C75.7654 243.199 76.8419 242.946 77.4548 243.58C77.9283 244.07 77.8826 244.858 77.7049 245.516C77.1927 247.412 75.8078 249.054 74.0249 249.878C75.4755 250.213 76.9883 250.276 78.4618 250.063C79.3021 249.942 80.1721 249.709 80.7798 249.116C81.3875 248.523 81.6228 247.479 81.0957 246.814C80.3093 245.821 80.3406 244.368 80.843 243.206C81.3453 242.043 82.2426 241.104 83.1217 240.192C82.8701 239.674 82.1349 239.638 81.5849 239.811ZM88.3007 242.065C89.0907 240.239 89.1195 238.174 88.9194 236.194C88.6982 234.005 87.935 231.502 85.8727 230.735C82.8506 231.989 80.5184 234.788 79.8293 237.987C79.7714 238.255 79.7261 238.544 79.8319 238.798C79.9376 239.052 80.2519 239.237 80.4954 239.109C81.3309 238.672 82.3585 238.423 83.2079 238.833C84.0573 239.244 84.471 240.524 83.7832 241.17C83.0233 241.883 82.2428 242.625 81.8328 243.583C81.4228 244.541 81.4819 245.781 82.2538 246.482C82.8338 247.008 82.8353 248.041 82.2568 248.569C83.9017 248.088 85.0737 246.674 86.1404 245.333C86.9558 244.308 87.7806 243.267 88.3007 242.065ZM69.365 232.622C67.6539 233.332 65.9931 234.162 64.3988 235.106C64.0197 235.33 63.6366 235.567 63.3593 235.91C62.985 236.372 62.8428 236.975 62.7271 237.559C62.3534 239.444 62.1607 241.474 62.9524 243.225C63.2051 243.784 63.5505 244.295 63.8941 244.803C63.9955 244.953 64.1107 245.113 64.2846 245.164C64.4585 245.214 64.6881 245.074 64.6472 244.898C64.5214 244.354 64.9331 243.843 65.3393 243.46C67.7189 241.221 70.9245 239.935 73.0643 237.465C72.7397 237.08 72.124 237.261 71.6612 237.459C70.5588 237.93 69.4221 238.32 68.2632 238.626C67.6653 238.783 66.9991 238.912 66.4534 238.621C65.6549 238.195 65.5249 237.03 65.9467 236.23C66.3685 235.429 67.1703 234.912 67.9437 234.442C68.717 233.972 69.5283 233.482 69.9922 232.705C69.9078 232.484 69.5836 232.531 69.365 232.622ZM75.221 247.626C75.9771 247.019 76.7941 246.302 76.8766 245.336C76.9197 244.83 76.5956 244.212 76.0907 244.261C75.9355 244.275 75.7938 244.352 75.6599 244.432C73.461 245.746 72.0139 248.314 69.5334 248.953C70.2343 249.267 70.9652 249.514 71.7129 249.689C71.9355 249.741 72.1673 249.787 72.3912 249.741C72.6518 249.687 72.8698 249.515 73.0772 249.349C73.7918 248.775 74.5064 248.2 75.221 247.626ZM77.2659 226.627C76.7766 227.168 76.2873 227.709 75.798 228.251C75.4104 228.679 74.9946 229.245 75.2103 229.781C75.3693 230.176 75.8386 230.376 76.2631 230.343C76.6876 230.31 77.0742 230.093 77.4301 229.859C78.6986 229.027 79.8408 227.893 81.3211 227.56C80.2947 227.186 79.2683 226.812 78.2419 226.438C78.0282 226.36 77.7898 226.283 77.5795 226.369C77.4533 226.421 77.3574 226.526 77.2659 226.627Z",
                fill: "#00160A",
              }),
              Object(r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d:
                  "M96.3663 161.982C96.2382 164.547 94.2598 167.324 91.7101 167.02C90.5593 165.689 89.6586 164.037 88.7685 162.405C87.059 159.269 85.3884 156.205 82.0599 155.624C78.7908 155.052 75.7463 157.457 73.7102 160.077C70.7614 163.873 68.8558 168.471 68.2551 173.24C67.9019 176.043 69.0517 179.931 71.8605 179.623C75.0689 179.27 77.3507 181.794 79.6714 184.361C81.8194 186.737 84.0008 189.15 86.9812 189.353C90.53 189.596 93.4288 191.722 96.363 193.874L96.3631 193.874C98.3229 195.311 100.298 196.76 102.494 197.667C106.625 199.374 111.388 199.044 115.604 197.562C119.821 196.08 123.573 193.527 127.124 190.814L127.311 190.671C129.249 189.189 131.279 187.637 133.689 187.31C146.016 185.64 157.481 178.41 164.299 168.007C173.967 175.734 187.483 178.376 199.348 174.856C201.362 174.258 203.388 173.457 204.881 171.981C206.374 170.504 207.22 168.211 206.486 166.243C205.684 164.092 203.285 162.94 201.006 162.662C199.756 162.511 198.497 162.555 197.237 162.6C196.198 162.637 195.158 162.674 194.123 162.601C187.855 162.158 182.636 157.835 177.891 153.717C184.767 151.608 190.342 146.311 194.023 140.132C197.704 133.953 199.677 126.914 201.176 119.88C201.964 116.178 202.55 112.008 200.435 108.869C199.489 107.464 198.101 106.437 196.718 105.414C195.161 104.261 193.609 103.113 192.701 101.436C190.955 98.2085 187.551 96.2949 184.322 94.5517C175.873 89.9897 166.167 85.2946 157.061 88.3412C153.514 89.5279 150.45 91.8019 147.462 94.0525C142.501 97.7898 137.187 102.174 136.242 108.313C128.125 104.681 117.623 107.581 112.52 114.864C111.353 116.53 110.457 118.367 109.562 120.202C108.508 122.363 107.455 124.521 105.963 126.393C99.9693 123.663 93.8623 121.18 87.663 118.955C84.9145 117.968 81.6312 117.097 79.2625 118.805C77.3633 120.174 76.7807 122.862 77.3382 125.136C77.8957 127.41 79.384 129.338 80.98 131.051C84.4425 134.768 88.6017 137.833 93.1768 140.041C93.3231 140.111 93.4704 140.182 93.6182 140.252L93.6204 140.253L93.6222 140.254C95.0547 140.936 96.5273 141.638 97.4812 142.89C98.5343 144.274 98.5997 146.588 97.1232 147.505C94.9424 148.861 94.5409 151.902 94.9879 154.431C95.1406 155.295 95.3649 156.151 95.5888 157.005C96.0202 158.652 96.4505 160.294 96.3663 161.982ZM155.572 175.503C150.077 181.273 142.344 184.648 134.438 185.635C126.531 186.622 118.457 185.339 110.905 182.801C112.936 182.8 114.405 180.14 113.325 178.419C109.162 183.272 102.816 185.544 96.7691 187.62C91.3061 189.494 84.7763 188.133 80.7635 183.979C76.7507 179.825 75.6648 173.008 78.4868 167.969C79.7134 165.779 81.7939 163.872 84.2953 163.657C86.7966 163.442 89.49 165.516 89.258 168.016C87.8661 167.774 86.4013 168.956 86.344 170.368C91.7287 169.788 96.791 166.702 99.7741 162.182C100.804 160.622 101.586 158.922 102.369 157.222L102.369 157.222L102.369 157.222L102.369 157.221L102.369 157.221C102.895 156.079 103.421 154.937 104.023 153.835C105.52 151.093 107.67 148.479 110.648 147.536C113.039 146.78 115.624 147.2 118.095 147.626L129.073 149.519C129.895 148.809 128.564 147.673 127.502 147.451C124.07 146.734 120.592 146.292 117.112 145.85C113.886 145.44 110.66 145.031 107.471 144.402C100.843 143.094 94.1814 140.702 89.3573 135.973C92.6296 134.09 95.1192 130.892 96.1407 127.257C96.3474 126.522 95.855 125.314 95.2579 125.791C94.5757 128.15 93.8363 130.61 92.1271 132.374C90.418 134.138 87.418 134.912 85.4835 133.399C82.9721 131.435 80.3318 129.293 79.3387 126.263C78.3455 123.234 79.9166 119.165 83.0831 118.793C84.5044 118.627 85.8938 119.214 87.2044 119.789L100.427 125.585C104.363 127.31 108.357 129.052 112.608 129.678C115.592 130.118 118.628 129.994 121.643 129.87L130.188 129.517C130.538 129.503 130.896 129.487 131.218 129.349C132.076 128.983 132.368 127.934 132.557 127.02C134.85 115.954 137.931 104.276 146.267 96.6452C149.997 93.2305 154.643 90.8262 159.585 89.7537C164.456 88.6965 169.831 89.0073 174.025 91.7015C166.989 92.2193 160.158 95.186 154.977 99.9734C152.8 97.6497 148.749 99.5491 147.012 102.218C144.321 106.356 144.37 112.103 147.131 116.194C149.456 119.638 150.318 123.747 151.182 127.865C151.976 131.65 152.771 135.443 154.706 138.736C157.765 143.944 163.463 147.287 169.414 148.323C175.365 149.36 181.535 148.277 187.191 146.156C180.86 152.47 170.748 154.654 162.376 151.515C161.766 151.286 161.159 151.031 160.551 150.775C158.628 149.965 156.698 149.152 154.634 149.176C155.843 150.456 157.387 151.417 159.069 151.936C157.13 155.194 155.094 158.396 152.968 161.535C152.695 161.936 152.386 162.364 151.92 162.5C151.401 162.651 150.859 162.393 150.386 162.131C146.476 159.97 142.971 157.078 140.106 153.649L134.376 160.62C137.317 164.214 140.755 167.402 144.562 170.062C139.495 176.322 131.818 180.399 123.795 181.091C132.1 181.514 140.508 177.619 145.555 171.01C148.75 172.804 152.107 174.309 155.572 175.503ZM181.837 114.208C183.672 112.207 184.352 109.348 184.195 106.638C184.039 103.927 183.127 101.32 182.118 98.7993C184.747 98.4877 187.417 99.4795 189.511 101.099C191.605 102.719 193.178 104.922 194.468 107.234C196.032 110.036 197.231 113.066 197.752 116.232C198.977 123.688 196.361 131.291 192.638 137.866C191.915 139.142 191.137 140.41 190.082 141.429C189.019 142.456 187.712 143.193 186.372 143.816C180.844 146.385 174.484 147.126 168.513 145.898C172.325 142.724 175.017 138.352 176.731 133.698C178.446 129.043 179.23 124.097 179.682 119.157L179.685 119.129C179.798 117.884 179.918 116.575 180.628 115.546C180.863 115.206 181.154 114.911 181.445 114.615L181.445 114.615C181.578 114.481 181.71 114.346 181.837 114.208ZM174.939 134.781C173.294 138.628 170.746 142.161 167.291 144.522C166.887 144.798 166.452 145.065 165.966 145.122C165.536 145.172 165.106 145.054 164.693 144.924C161.756 143.997 158.981 142.353 157.097 139.917C156.413 139.033 155.855 138.058 155.357 137.057C151.73 129.77 151.375 120.929 154.405 113.374C154.55 113.013 154.757 112.608 155.138 112.532C155.632 112.434 156.01 112.939 156.287 113.358C158.551 116.789 162.784 118.525 166.89 118.705C170.995 118.885 175.034 117.718 178.928 116.402C178.218 118.137 178.037 120.027 177.858 121.9C177.836 122.136 177.813 122.371 177.79 122.606C177.372 126.769 176.584 130.933 174.939 134.781ZM174.103 99.038C176.204 98.5604 178.655 98.429 180.261 99.866C180.779 100.33 181.164 100.926 181.481 101.545C183.47 105.431 182.691 110.548 179.637 113.667C176.106 117.271 170.518 117.866 165.49 117.438C163.686 117.284 161.831 117.007 160.291 116.055C158.298 114.823 157.118 112.652 156.027 110.579C160.871 105.166 167.019 100.648 174.103 99.038ZM191.095 164.387C190.436 166.051 189.77 167.738 189.554 169.515C189.339 171.292 189.619 173.199 190.7 174.626C181.732 175.122 172.618 172.357 165.437 166.96C167.752 163.683 169.581 160.063 170.844 156.255C171.343 154.75 173.248 154.123 174.794 154.471C176.218 154.792 177.413 155.705 178.579 156.596L178.736 156.715L178.88 156.825C182.697 159.723 186.904 162.06 191.095 164.387ZM128.423 187.115C127.009 188.707 125.318 190.029 123.592 191.276C119.987 193.878 116.057 196.244 111.676 197C105.256 198.108 98.3191 195.339 94.4271 190.114L108.431 184.89C108.766 184.765 109.113 184.638 109.471 184.658C109.672 184.669 109.867 184.727 110.061 184.785L110.061 184.785L110.061 184.785L110.061 184.785C110.191 184.824 110.32 184.863 110.453 184.888C110.902 184.973 111.356 184.898 111.811 184.823H111.811C112.095 184.776 112.379 184.73 112.663 184.721C113.712 184.69 114.675 185.169 115.628 185.642C115.87 185.763 116.111 185.883 116.353 185.994C120.066 187.702 124.348 187.425 128.423 187.115ZM108.204 127.199C108.105 126.978 108.209 126.724 108.313 126.506C111.181 120.499 114.975 114.936 119.52 110.074C122.716 114.512 124.844 119.715 125.673 125.122C125.838 126.202 125.659 127.697 124.574 127.832C119.374 128.48 114.082 128.392 108.906 127.571C108.633 127.528 108.317 127.451 108.204 127.199ZM127.79 126.828C126.72 120.941 124.497 115.267 121.284 110.219C124.003 108.787 127.218 108.764 130.29 108.773C132.231 108.779 134.349 108.848 135.828 110.104L131.992 121.424C131.341 123.345 130.681 125.321 130.763 127.348L128.338 127.387C128.252 127.388 128.163 127.389 128.083 127.356C127.889 127.275 127.828 127.035 127.79 126.828ZM158.992 155.795C159.636 154.699 160.249 153.529 160.314 152.259C163.216 153.564 166.411 154.211 169.591 154.137C170.09 154.125 170.072 154.895 169.868 155.35C169.249 156.728 168.629 158.108 167.912 159.438C167.176 160.804 166.341 162.113 165.507 163.42L163.508 166.554C163.234 166.983 162.952 167.422 162.545 167.727C161.454 168.548 159.896 168.153 158.65 167.594C156.584 166.666 154.683 165.373 153.06 163.793C155.314 161.348 157.306 158.662 158.992 155.795ZM83.9664 158.503C84.9276 159.472 85.5559 160.714 86.1684 161.934L83.2845 162.346C82.3237 162.483 81.3385 162.628 80.4892 163.097C79.6629 163.555 79.0256 164.287 78.4649 165.047C76.1195 168.225 74.8196 172.161 74.8113 176.11C74.8084 177.536 73.1224 178.554 71.7426 178.193C70.3628 177.831 69.4254 176.46 69.1869 175.054C68.9483 173.648 69.2842 172.209 69.7055 170.847C71.1882 166.051 73.8402 161.521 77.7641 158.391C78.5138 157.792 79.3421 157.232 80.2892 157.081C81.6372 156.866 83.0051 157.534 83.9664 158.503ZM205.067 166.531C205.401 166.96 205.648 167.482 205.633 168.024C205.614 168.726 205.169 169.341 204.69 169.854C201.906 172.838 197.628 173.853 193.576 174.332C193.309 174.364 193.029 174.392 192.778 174.294C192.572 174.213 192.407 174.055 192.26 173.89C191.283 172.79 190.895 171.253 190.975 169.784C191.054 168.315 191.561 166.9 192.192 165.571C192.325 165.291 192.479 164.998 192.75 164.847C192.966 164.728 193.225 164.718 193.472 164.712L198.376 164.583C199.583 164.552 200.804 164.521 201.986 164.77C203.168 165.019 204.325 165.578 205.067 166.531ZM150.412 120.194C148.414 116.491 146.919 112.518 145.981 108.416L146.788 106.26C147.787 104.326 149.046 102.527 150.521 100.927C151.121 100.275 152.162 100.203 152.991 100.517C153.82 100.831 154.487 101.455 155.13 102.065L158.026 104.808C158.112 104.89 158.202 104.978 158.23 105.093C158.284 105.309 158.105 105.508 157.943 105.662C156.588 106.951 155.383 108.404 154.417 110.006C152.957 112.428 152.065 115.142 151.186 117.829L150.412 120.194ZM157.812 99.3987C163.707 96.2414 170.155 93.2703 176.805 93.9808C180.281 94.3523 183.607 95.7353 186.502 97.6945C178.207 95.5622 168.961 97.529 162.251 102.853C161.214 103.676 159.658 104.57 158.735 103.621C158.498 103.377 158.343 103.036 158.192 102.704C157.95 102.171 157.719 101.661 157.177 101.611C156.66 101.563 156.43 100.862 156.649 100.391C156.868 99.9208 157.354 99.6439 157.812 99.3987ZM141.617 157.148C142.781 158.266 144.062 159.253 145.34 160.238L150.505 164.216C148.915 165.617 147.359 167.058 145.839 168.536C142.22 166.391 138.99 163.593 136.352 160.317C137.796 158.812 139.183 157.253 140.507 155.642C140.715 156.236 141.163 156.712 141.617 157.148ZM108.409 146.389C105.69 148.513 102.878 150.75 101.382 153.86C101.09 154.467 100.849 155.107 100.607 155.745L100.607 155.745C100.095 157.102 99.5842 158.455 98.5906 159.488C98.1502 159.359 97.977 158.84 97.8697 158.394L96.8348 154.089C96.6952 153.508 96.5546 152.912 96.6339 152.32C96.7129 151.73 97.0034 151.193 97.2888 150.672L100.325 145.123C100.393 144.999 100.463 144.873 100.571 144.783C100.84 144.559 101.238 144.631 101.577 144.714L108.409 146.389ZM152.589 165.449C154.443 167.356 156.748 168.822 159.261 169.693C159.731 169.251 160.64 169.494 160.825 170.113C159.96 171.235 159.011 172.292 157.987 173.271C157.53 173.709 156.798 173.617 156.181 173.475C153.169 172.784 150.268 171.612 147.621 170.018C147.444 169.911 147.244 169.76 147.262 169.554C147.274 169.415 147.383 169.307 147.485 169.213L151.202 165.79C151.592 165.431 152.219 165.07 152.589 165.449ZM200.047 117.625C200.012 118.045 199.953 118.513 199.625 118.777C199.622 115.482 198.805 112.19 197.267 109.276C196.988 108.748 196.685 108.231 196.348 107.737C196.305 107.674 196.261 107.61 196.217 107.546C195.877 107.056 195.53 106.555 195.447 105.97L199.431 110.13C199.797 110.513 200.174 110.913 200.347 111.414C200.514 111.897 200.474 112.423 200.433 112.933L200.047 117.625ZM195.47 112.338L194.568 111.201C193.576 109.95 192.358 108.584 190.762 108.582C189.835 108.581 188.983 109.056 188.179 109.517L186.93 110.233C186.589 110.429 186.238 110.632 185.998 110.943C185.304 111.841 185.81 113.152 186.466 114.077C186.92 114.718 187.464 115.333 188.185 115.641C189.119 116.04 190.193 115.863 191.171 115.593C192.512 115.224 193.807 114.691 195.018 114.009C195.406 113.791 195.834 113.472 195.815 113.028C195.803 112.767 195.633 112.543 195.47 112.338ZM187.59 113.215C187.435 112.968 187.274 112.704 187.272 112.412C187.267 111.842 187.836 111.459 188.337 111.185L190.118 110.214C190.387 110.068 190.667 109.917 190.973 109.897C191.279 109.876 191.619 110.023 191.722 110.312C192.025 111.165 192.773 111.845 193.651 112.066C193.935 112.138 194.026 112.531 193.892 112.791C193.758 113.052 193.483 113.204 193.221 113.334C192.282 113.8 191.301 114.179 190.294 114.467C189.89 114.582 189.463 114.683 189.054 114.586C188.386 114.427 187.955 113.797 187.59 113.215ZM174.926 122.004C173.16 122.21 172.824 125.393 173.644 127.091C173.813 127.441 174.077 127.8 174.462 127.849C175.12 127.933 175.483 127.121 175.629 126.474L175.632 126.459C175.824 125.606 176.681 121.8 174.926 122.004ZM165.82 126.18C166.173 125.357 166.29 124.434 166.156 123.548C166.093 123.136 165.969 122.718 165.694 122.406C165.419 122.093 164.964 121.912 164.573 122.053C164.218 122.18 163.995 122.527 163.827 122.864C163.235 124.055 162.999 125.421 163.157 126.741C163.23 127.356 164.005 127.692 164.592 127.497C165.18 127.303 165.576 126.749 165.82 126.18ZM171.025 124.295C171.299 124.068 171.645 124.481 171.756 124.819C172.121 125.93 172.424 127.062 172.662 128.208C172.812 128.932 172.936 129.684 172.776 130.405C172.55 131.423 171.777 132.251 170.879 132.781C169.982 133.311 168.96 133.586 167.953 133.854C167.687 133.925 167.353 133.976 167.181 133.761C167.035 133.578 167.107 133.292 167.273 133.127C167.436 132.966 167.663 132.892 167.881 132.82L167.894 132.816C169.464 132.3 171.141 131.369 171.507 129.757C171.708 128.871 171.463 127.981 171.218 127.087C170.994 126.273 170.77 125.455 170.88 124.635C170.897 124.51 170.927 124.376 171.025 124.295ZM160.06 120.67C159.646 120.098 159.977 119.227 160.577 118.854C161.177 118.48 161.934 118.486 162.635 118.576C163.471 118.684 164.294 118.897 165.078 119.208C165.245 119.274 165.424 119.358 165.498 119.522C165.634 119.825 165.282 120.157 164.949 120.157C164.682 120.157 164.439 120.028 164.199 119.901C164.141 119.87 164.083 119.839 164.025 119.81C162.717 119.161 160.982 119.537 160.06 120.67ZM175.141 120.473C175.763 120.37 176.422 120.513 176.945 120.866C177.163 121.013 177.476 120.765 177.477 120.502C177.478 120.238 177.282 120.017 177.075 119.854C176.629 119.503 176.073 119.293 175.507 119.261C175.141 119.24 174.736 119.311 174.501 119.591C174.265 119.872 174.336 120.398 174.689 120.496C174.815 120.531 174.947 120.507 175.077 120.484L175.079 120.484C175.099 120.48 175.12 120.477 175.141 120.473ZM167.423 136.629C167.598 136.53 167.829 136.703 167.855 136.902C167.881 137.101 167.768 137.292 167.638 137.445C166.986 138.215 165.862 138.452 164.87 138.271C163.878 138.091 162.989 137.558 162.152 136.995C161.758 136.73 161.37 136.457 160.989 136.175C160.593 135.883 160.172 135.526 160.125 135.036C160.077 134.547 160.704 134.054 161.062 134.391C161.942 135.219 162.841 136.061 163.935 136.574C165.03 137.086 166.371 137.223 167.423 136.629ZM148.588 140.552C144.924 132.586 143.395 123.649 144.203 114.917C144.217 114.768 144.235 114.608 144.334 114.495C144.473 114.336 144.758 114.343 144.89 114.508C144.843 119.312 144.798 124.144 145.582 128.883C146.366 133.622 148.031 138.31 151.071 142.029C151.097 142.061 151.124 142.093 151.15 142.126C151.214 142.203 151.279 142.281 151.343 142.358L151.346 142.361L151.346 142.362C151.869 142.989 152.396 143.621 152.693 144.377C150.716 144.339 149.415 142.348 148.588 140.552ZM152.183 104.579C152.115 104.506 152.036 104.441 151.945 104.402C151.681 104.288 151.371 104.405 151.139 104.576C150.217 105.259 150.213 106.856 151.133 107.543C151.581 107.16 152.041 106.763 152.304 106.236C152.567 105.709 152.583 105.012 152.183 104.579ZM160.137 112.992C161.131 113.799 162.264 114.434 163.471 114.862C167.366 116.243 171.742 115.376 175.501 113.659C176.075 113.396 176.808 113.534 177.247 113.988C174.833 115.708 171.877 116.653 168.914 116.652C168.26 116.652 167.608 116.608 166.957 116.551C165.625 116.434 164.283 116.264 163.03 115.797C161.777 115.331 160.607 114.541 159.897 113.408L160.137 112.992ZM202.548 165.482C202.51 165.615 202.616 165.742 202.714 165.839L204.194 167.307C204.355 166.885 204.174 166.393 203.864 166.065C203.553 165.736 203.134 165.536 202.725 165.343C202.645 165.347 202.571 165.405 202.548 165.482Z",
                fill: "#00160A",
              }),
              Object(r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d:
                  "M299.735 108.359C301.548 108.988 303.255 107.353 304.817 106.239C307.235 104.515 310.388 103.864 313.291 104.488C313.772 104.591 314.277 104.747 314.594 105.123C314.884 105.468 314.966 105.938 315.013 106.386C315.299 109.128 314.613 111.961 313.105 114.269C312.372 115.392 311.453 116.391 310.797 117.561C310.141 118.731 309.766 120.16 310.234 121.417C313.012 128.891 311.856 137.706 307.244 144.21C302.632 150.714 294.696 154.722 286.724 154.573C282.647 154.497 278.652 153.409 274.811 152.04C273.135 151.443 271.293 150.788 269.629 151.418C266.593 152.569 263.397 153.295 260.163 153.57C259.36 153.638 258.521 153.673 257.781 153.357C256.672 152.882 256.003 151.68 255.875 150.481C255.748 149.282 256.08 148.081 256.498 146.951C257.762 143.539 261.683 138.21 264.057 136.983C263.865 132.84 263.886 128.649 264.781 124.6C265.677 120.551 267.505 116.622 270.503 113.758C271.741 112.574 273.158 111.589 274.643 110.735C282.151 106.412 291.549 105.522 299.735 108.359ZM288.301 108.023C282.56 108.157 276.971 110.464 272.483 114.047C271.165 115.098 269.927 116.267 268.938 117.633C268.158 118.709 267.542 119.897 267.026 121.122C263.97 128.393 264.667 137.128 268.84 143.821C268.931 143.967 269.035 144.122 269.197 144.179C269.398 144.248 269.613 144.147 269.801 144.047C282.905 137.063 294.569 127.391 303.858 115.806C304.079 115.53 304.312 115.21 304.264 114.859C304.228 114.596 304.041 114.383 303.858 114.191C299.894 110.035 294.042 107.889 288.301 108.023ZM296.328 151.425C302.552 148.503 307.279 142.729 309.301 136.157C309.759 134.668 310.088 133.13 310.12 131.573C310.147 130.264 309.965 128.961 309.783 127.664C309.519 125.784 309.254 123.904 308.99 122.024C308.92 121.526 308.44 120.868 308.089 121.229C298.35 131.251 287.716 140.403 276.355 148.54C275.976 148.81 275.56 149.145 275.54 149.61C275.516 150.147 276.029 150.538 276.496 150.806C282.452 154.241 290.103 154.347 296.328 151.425ZM257.935 150.66C258.387 151.386 259.369 151.535 260.224 151.559C264.713 151.683 269.154 150.368 273.169 148.359C277.185 146.35 280.82 143.663 284.352 140.891C289.063 137.194 293.634 133.318 298.088 129.315C303.604 124.357 309.025 119.098 312.646 112.626C313.347 111.373 313.993 110.001 313.884 108.57C313.774 107.14 312.633 105.695 311.2 105.751C308.157 105.87 305.166 107.04 302.85 109.016C302.39 109.409 302.715 110.246 303.282 110.459C303.849 110.672 304.481 110.46 305.035 110.216C305.589 109.971 306.165 109.685 306.767 109.752C307.687 109.854 308.339 110.795 308.394 111.719C308.449 112.642 308.041 113.53 307.56 114.32C306.669 115.782 305.506 117.056 304.331 118.301C293.886 129.367 281.838 138.916 268.679 146.557C267.494 147.245 266.295 147.921 265.02 148.422C264.351 148.685 263.584 148.896 262.931 148.595C261.86 148.102 261.774 146.599 262.096 145.465C262.578 143.763 263.62 142.223 265.021 141.143C264.756 140.395 264.49 139.647 264.225 138.899C260.765 141.109 258.337 144.868 257.745 148.931C257.66 149.517 257.621 150.157 257.935 150.66ZM267.772 145.527C267.797 145.45 267.752 145.37 267.709 145.301C267.262 144.591 266.815 143.881 266.368 143.171C266.166 142.849 265.775 142.485 265.471 142.714C264.379 143.537 263.597 144.762 263.311 146.1C263.254 146.364 263.221 146.658 263.365 146.887C263.632 147.312 264.271 147.217 264.744 147.048C265.752 146.687 266.722 146.222 267.636 145.664C267.692 145.63 267.752 145.59 267.772 145.527ZM306.655 111.721C306.61 111.536 306.391 111.456 306.201 111.448C305.625 111.423 305.023 111.896 305.06 112.472C305.096 113.047 305.951 113.409 306.309 112.957C306.417 112.82 306.462 112.646 306.505 112.478C306.548 112.31 306.59 112.143 306.633 111.976C306.654 111.893 306.676 111.805 306.655 111.721Z",
                fill: "#00160A",
              }),
            ],
          });
        },
        NC = function (e) {
          var t = e.changeCard;
          return Object(r.jsxs)(L.a, {
            bg: "primary.200",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            children: [
              Object(r.jsx)(I, { headingType: C.auth, children: "Welcome!" }),
              Object(r.jsx)(xt, { children: "To Infinity And Beyond!" }),
              Object(r.jsx)(L.a, {
                mt: -10,
                width: "70%",
                children: Object(r.jsx)(JC, {}),
              }),
              Object(r.jsx)(xt, { mt: -5, children: "Have we met before?" }),
              Object(r.jsx)(wn, {
                px: 100,
                mt: 2,
                buttontype: _t.white,
                fontWeight: "normal",
                onClick: t,
                children: "Login",
              }),
            ],
          });
        },
        qC = function () {
          return Object(r.jsxs)("svg", {
            width: "324",
            height: "324",
            viewBox: "0 0 324 324",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              Object(r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d:
                  "M162 38.4488C202.852 38.4397 271.936 55.7466 272.592 80.9817L271.936 162.989C266.173 225.656 222.482 278.314 162 295.488C101.518 278.314 57.8272 225.656 52.0645 162.989L51.408 80.9817C51.5016 61.2431 121.148 38.4397 162 38.4488Z",
                fill: "url(#paint0_linear)",
              }),
              Object(r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d:
                  "M163.902 228.166L163.899 228.15C164.444 231.76 166.521 234.826 170.132 237.346C174.219 240.139 179.328 249.437 170.132 249.437C167.719 249.437 162.06 248.359 160.221 246.338C159.676 245.793 159.131 244.567 158.586 242.659C157.973 240.888 157.325 239.696 156.644 239.083C155.691 242.761 155.314 250.918 158.107 256.64C160.832 262.157 161.717 266.346 160.764 269.207C158.039 270.774 152.453 269.91 144.007 268.343C142.304 250.02 141.895 222.629 144.007 190C138.421 188.774 136.345 187.551 133.961 187.688C130.282 187.824 122.684 188.852 120.436 191.849C110.491 204.859 105.016 213.675 103.381 217.217C102.7 218.852 100.52 227.125 96.8417 241.294C96.978 242.452 96.6374 254.499 96.8417 255.589C92.0469 265.296 87.3392 262.386 81.9238 262.386C82.1962 260.275 82.9456 253.899 85.3978 250.629C88.1226 247.155 86.7942 241.127 87.3392 239.083C87.6798 237.584 87.9863 235.234 88.2588 232.033C88.4632 228.627 88.7356 226.141 89.0762 224.574C93.9126 202.776 98.6809 184.963 103.381 171.135C101.196 171.707 94.5132 174.611 89.8479 174.34C82.2963 173.901 74.3458 171.707 75.5175 168.035C75.9262 166.059 77.0842 164.969 78.9915 164.765C79.3321 164.697 80.2177 164.663 81.6481 164.663C82.8062 164.663 83.7598 164.561 84.5091 164.356C87.5167 163.629 91.6339 165.106 94.9241 164.356C103.035 162.506 110.255 158.067 113.599 153.56C118.844 146.408 126.536 142.355 128.035 141.401C130.964 139.494 130.969 137.791 136.691 136.292C144.457 134.249 164.164 115.979 166.276 114.003C168.592 111.823 169.852 109.916 170.057 108.281C170.261 106.169 169.341 102.355 167.298 96.8372C165.527 91.9326 165.254 88.0499 166.48 85.1889C166.549 86.4832 166.683 76.8103 169.272 73.1319C170.089 71.9058 171.281 70.3391 172.848 68.4317C174.755 66.1157 175.981 64.6171 176.526 63.9359C178.638 64.549 180.477 66.5244 182.044 69.8622C183.747 73.6088 185.279 75.8907 186.642 76.7081C187.026 76.6196 190.474 75.1221 192.785 74.6127C195.808 73.9466 199.136 74.1605 199.484 73.2341C200.029 71.5993 200.472 70.4072 200.812 69.6579C202.038 67.0694 203.707 65.7751 205.819 65.7751C208.203 65.7751 211.132 67.004 212.971 70.9549C213.312 71.7042 215.083 74.3762 217.671 81.8012C221.35 92.2914 221.827 101.742 221.35 105.829C219.851 118.635 217.876 126.741 215.424 130.147C215.151 130.42 214.334 130.726 212.971 131.067C211.881 131.339 211.302 131.85 211.234 132.599C211.779 134.915 217.883 140.413 219.177 144.773C220.54 149.269 221.493 152.641 222.038 154.888C224.014 162.79 224.524 170.011 223.571 176.55C222.958 180.705 222.617 187.211 222.549 196.066C222.481 205.467 222.208 212.312 221.732 216.604C221.527 218.647 221.084 221.372 220.403 224.778C219.518 228.933 218.973 231.692 218.768 233.055C217.747 239.594 217.951 245.248 219.381 250.016C222.583 254.103 226.938 260.097 228.096 266.501C228.096 271.359 214.772 272.826 208.308 265.566C206.739 263.804 205.699 253.403 206.789 244.411C207.334 239.438 206.064 230.841 205.179 221.917C204.225 211.972 202.785 205.226 202.853 202.365C203.057 195.894 200.369 185.401 198.053 184.311C189.198 189.761 170.37 194.568 169.417 195.044C168.599 195.521 168.122 196.032 167.986 196.577C165.383 217.806 164.022 228.338 163.905 228.173L163.902 228.166Z",
                fill: "white",
              }),
              Object(r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d:
                  "M201.642 145.811C202.536 146.329 203.762 143.297 203.227 141.914C201.343 137.04 199.562 138.393 199.875 140.775C200.186 143.151 199.875 144.786 201.642 145.811Z",
                fill: "#FFB61D",
              }),
              Object(r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d:
                  "M173.944 60.7888C174.275 60.0435 174.607 59.2981 174.963 58.5693C175.742 56.9765 177.846 56.4831 178.99 57.6215C179.667 58.2946 180.338 58.9733 181.009 59.6521C182.474 61.1336 183.94 62.6152 185.46 64.0376L185.676 64.2415C187.606 66.0848 189.206 68.139 190.279 70.5913C190.365 70.7883 190.347 71.0306 190.33 71.2728C190.322 71.3851 190.314 71.4973 190.316 71.6051C190.2 71.5905 190.071 71.5889 189.943 71.5872C189.66 71.5835 189.377 71.5799 189.219 71.4376C188.919 71.1681 188.678 70.8342 188.437 70.4992L188.437 70.4991C188.286 70.2888 188.134 70.078 187.967 69.8825C186.21 67.8249 184.443 65.7757 182.662 63.7382C182.579 63.6434 182.431 63.6054 182.283 63.5674C182.214 63.5497 182.145 63.5321 182.083 63.5087C182.087 63.583 182.086 63.6587 182.086 63.7343C182.085 63.8982 182.083 64.0622 182.127 64.2131C182.24 64.6029 182.369 64.9894 182.498 65.3757L182.498 65.3758L182.498 65.3759L182.498 65.3759L182.498 65.376L182.498 65.3761L182.498 65.3762L182.498 65.3763L182.498 65.3763L182.498 65.3764L182.498 65.3764L182.498 65.3765L182.498 65.3765L182.498 65.3766L182.498 65.3766L182.498 65.3767L182.498 65.3767L182.498 65.3767L182.498 65.3768C182.741 66.1018 182.983 66.8263 183.115 67.5708C183.464 69.5452 183.718 71.5429 183.86 73.5415C183.882 73.8443 183.461 74.2069 183.078 74.5037L182.821 74.7006C182.753 74.7529 182.087 74.3134 182.012 74.0202C181.831 73.3201 181.691 72.6092 181.552 71.8984L181.552 71.8982C181.412 71.1876 181.273 70.477 181.092 69.7771C181.005 69.4401 180.92 69.1028 180.834 68.7657C180.111 65.9157 179.39 63.0742 177.79 60.5013C177.03 59.2785 176.599 59.683 176.16 60.4647L175.501 61.6467C174.681 63.1264 173.873 64.6161 173.057 66.1186L173.057 66.119C172.35 67.4217 171.638 68.734 170.908 70.0579C170.609 70.7012 170.3 71.3336 169.993 71.9608L169.993 71.9609L169.993 71.9609L169.993 71.9611C169.164 73.6571 168.354 75.3159 167.79 77.0548C167.091 79.2124 166.337 81.606 166.615 83.7659C166.985 86.6463 169.294 92.9578 169.294 92.9578C171.965 101.937 184.915 119.017 190.306 122.342C195.254 125.392 200.612 127.355 206.505 127.584C209.814 127.713 212.626 126.431 215.345 124.764L215.733 124.523C217.922 123.149 219.341 121.409 219.544 118.718C219.7 116.651 219.898 114.586 220.095 112.522C220.421 109.109 220.748 105.697 220.886 102.277C221.036 98.5808 220.774 94.8329 220.309 91.1571C219.896 87.8821 219.188 84.6371 218.45 81.4087L218.133 80.026C216.427 72.6009 212.363 66.6071 206.657 61.6649C204.612 59.8935 202.88 60.1856 201.562 62.555C201.001 63.5637 200.465 64.5867 199.93 65.6097C199.383 66.6555 198.835 67.7012 198.261 68.7316C198.12 68.9838 197.841 69.1588 197.562 69.3339C197.434 69.4147 197.305 69.4956 197.19 69.584C197.183 69.445 197.162 69.2992 197.14 69.1535C197.093 68.8383 197.047 68.5231 197.155 68.276L197.331 67.8746C198.225 65.8364 199.12 63.7938 200.16 61.8297C201.684 58.9531 204.549 57.5893 207.601 59.8872C211.452 62.7861 214.551 66.4079 216.924 70.5283C218.139 72.6378 218.917 75.014 219.688 77.3685C219.847 77.8537 220.006 78.338 220.168 78.8189L220.323 79.283C221.749 83.6182 222.719 88.0697 223.037 92.6342C223.138 94.0835 223.099 95.5435 223.061 97.002L223.061 97.0021L223.061 97.0022L223.061 97.0023L223.061 97.0024L223.061 97.0024L223.061 97.0025L223.061 97.0026L223.061 97.0027L223.061 97.0028L223.061 97.0028C223.049 97.4612 223.037 97.9195 223.03 98.3773C223.018 99.1007 223.01 99.8246 223.002 100.549C222.979 102.734 222.955 104.919 222.813 107.097C222.7 108.825 222.523 110.549 222.346 112.274C222.137 114.314 221.928 116.353 221.825 118.399L221.813 118.595C221.377 125.053 215.624 128.62 210.739 129.823C206.505 130.865 201.955 130.623 197.599 128.946C192.631 127.387 188.556 124.432 184.714 121.299C179.745 117.247 167.223 96.3603 165.069 88.9175C163.785 84.4803 164.003 80.3086 165.725 76.0668C167.254 72.3003 169.258 68.8479 171.524 65.482C172.501 64.0321 173.222 62.4106 173.944 60.7888ZM222.497 172.954L222.497 172.954C222.631 170.188 222.765 167.411 222.525 164.672C222.09 159.704 220.921 154.874 218.654 150.349C217.733 148.511 216.977 146.561 216.395 144.589C215.663 142.106 214.105 140.208 212.538 138.298C212.264 137.965 211.99 137.631 211.72 137.294C210.475 135.737 209.286 134.128 208.182 132.47C207.631 131.641 207.395 131.522 206.835 132.448C204.505 136.298 199.162 137.159 195.351 134.751C189.115 130.812 183.745 125.854 178.375 120.897L178.024 120.573C175.502 118.244 173.25 115.601 172.112 112.225C171.987 111.854 171.705 111.507 171.418 111.229C171.213 111.03 170.962 110.878 170.711 110.726C170.601 110.66 170.491 110.594 170.385 110.523C170.393 110.643 170.396 110.764 170.399 110.885V110.885C170.405 111.145 170.411 111.406 170.473 111.652C171.446 115.493 173.694 118.586 176.417 121.327C179.707 124.638 183.007 127.957 186.533 131.007C189.091 133.219 191.964 135.09 194.818 136.922C195.754 137.523 196.947 137.769 198.09 138.004L198.091 138.004L198.092 138.005L198.094 138.005C198.244 138.036 198.393 138.066 198.54 138.098C199.425 138.285 199.696 138.677 199.726 139.54C199.737 139.826 199.74 140.115 199.743 140.405C199.76 142.009 199.777 143.632 200.985 144.934C201.507 145.497 202.17 145.956 202.839 146.339C203.035 146.451 203.627 146.239 203.776 146.008C205.237 143.736 205.921 141.315 203.712 139.144C202.909 138.355 203.808 137.961 204.045 137.888C205.252 137.519 205.915 136.625 206.586 135.72C206.727 135.53 206.868 135.339 207.015 135.152C207.164 134.964 207.852 134.888 207.932 135.005C208.645 136.052 209.403 137.07 210.16 138.089L210.161 138.089C212.098 140.693 214.036 143.298 215.229 146.376C215.535 147.163 215.843 147.949 216.151 148.735L216.151 148.735C217.076 151.092 218.001 153.449 218.841 155.836C220.687 161.086 221.065 166.523 220.694 172.043C220.644 172.796 220.591 173.549 220.538 174.303C220.312 177.517 220.086 180.732 220.041 183.95C219.983 188.088 220.149 192.234 220.352 196.371C220.446 198.278 220.629 200.181 220.813 202.085C220.928 203.278 221.044 204.472 221.137 205.667C221.512 210.486 220.721 215.2 219.875 219.919C219.541 221.786 219.352 223.681 219.163 225.573C219.111 226.091 219.059 226.609 219.004 227.127C218.42 232.657 217.916 238.219 218.624 243.748C218.747 244.704 218.82 245.675 218.893 246.648C219.124 249.722 219.356 252.816 221.16 255.536C221.764 256.446 222.476 257.354 223.329 258.017C223.739 258.336 224.097 258.566 224.425 258.777L224.425 258.777C225.584 259.521 226.371 260.028 227.737 263.316C229.176 266.78 227.581 268 226.557 268.784C226.333 268.955 226.136 269.106 226.004 269.254C226.333 269.858 228.076 269.734 228.734 269.254C230.819 267.736 230.819 264.974 229.938 262.512C228.969 259.805 227.686 257.5 225.057 256.48C222.456 255.471 221.645 253.28 221.285 250.979C220.659 246.986 220.077 242.942 220.028 238.913C219.987 235.556 220.375 232.186 220.761 228.829C220.832 228.207 220.904 227.586 220.973 226.965C221.503 222.166 222.057 217.362 222.851 212.603C223.414 209.233 223.177 205.895 222.94 202.559C222.863 201.478 222.786 200.397 222.737 199.315C222.594 196.213 222.35 193.115 222.106 190.017L222.106 190.017C221.947 188.009 221.789 186.001 221.659 183.992C221.605 183.174 221.65 182.35 221.697 181.48C221.722 181.015 221.748 180.536 221.76 180.039C221.841 179.337 221.939 178.658 222.036 177.991C222.208 176.81 222.373 175.672 222.423 174.528C222.446 174.004 222.471 173.479 222.497 172.954ZM202.243 144.304C201.418 143.523 201.419 142.536 201.42 141.548C201.421 140.776 201.421 140.002 201.028 139.324C200.967 139.218 201.248 138.744 201.411 138.72C201.658 138.683 202.073 138.815 202.187 139.009C202.497 139.544 202.764 140.104 203.031 140.664L203.031 140.664L203.031 140.664L203.031 140.664L203.031 140.664L203.031 140.664L203.031 140.664L203.031 140.664L203.031 140.665L203.031 140.665L203.031 140.665L203.031 140.665L203.032 140.665C203.153 140.92 203.275 141.176 203.4 141.428C204.065 142.764 203.536 143.706 202.243 144.304ZM156.346 256.605C155.685 255.133 155.147 253.514 155.003 251.92C154.638 247.861 154.358 243.779 154.357 239.706C154.356 236.447 154.515 233.189 154.673 229.93V229.93V229.93V229.929V229.929V229.929V229.929V229.929V229.928V229.928V229.928V229.928C154.745 228.457 154.817 226.986 154.874 225.515C154.904 224.746 154.925 223.978 154.947 223.209C154.962 222.659 154.977 222.109 154.996 221.56C155.264 213.55 157.714 206.187 161.775 199.352C162.181 198.669 163.492 198.056 164.288 198.157C166.836 198.483 169.254 198.036 171.701 197.583C172.135 197.502 172.571 197.422 173.007 197.346C176.817 196.68 180.485 195.635 183.827 193.747C186.609 192.176 189.258 190.361 191.899 188.551L191.9 188.551L191.9 188.551C192.144 188.384 192.388 188.217 192.631 188.05C194.618 186.691 196.583 185.271 198.385 183.683C199.429 182.762 199.983 183.27 200.379 184.047C202.11 187.442 203.735 190.906 204.214 194.735C204.901 200.222 205.572 205.715 206.049 211.222C206.532 216.809 206.886 222.408 207.239 228.005L207.239 228.008C207.308 229.096 207.376 230.183 207.446 231.27C207.704 235.305 207.9 239.343 208.082 243.382C208.226 246.568 208.003 249.679 207.417 252.873C206.71 256.733 206.628 260.913 208.302 264.609C209.793 267.903 212.592 270.067 216.355 270.473C218.519 270.706 220.075 268.375 218.902 266.513C218.298 265.554 217.326 264.815 216.37 264.088C216.106 263.887 215.843 263.687 215.59 263.484C215.433 263.358 215.126 263.418 214.819 263.477C214.677 263.505 214.535 263.533 214.408 263.542C214.455 263.655 214.495 263.774 214.535 263.892C214.624 264.153 214.713 264.415 214.872 264.623C215.041 264.846 215.249 265.05 215.455 265.252L215.455 265.252C215.787 265.577 216.115 265.898 216.274 266.292C216.485 266.814 216.389 267.654 216.079 268.12C215.887 268.408 214.884 268.507 214.514 268.271C212.156 266.767 210.117 264.985 209.697 261.952C209.63 261.471 209.478 260.992 209.327 260.516C209.113 259.841 208.9 259.172 208.936 258.509C209.052 256.355 209.288 254.207 209.525 252.06C209.64 251.02 209.754 249.98 209.855 248.939L209.871 248.776L209.871 248.776C209.992 247.533 210.113 246.286 210.124 245.039C210.161 240.937 210.182 236.833 210.135 232.731L210.128 232.061L210.128 232.06C210.061 226.117 209.994 220.172 209.8 214.232C209.715 211.632 209.431 209.036 209.148 206.444L209.148 206.441C209.105 206.047 209.062 205.654 209.02 205.261C208.703 202.315 208.361 199.369 207.9 196.443C207.119 191.483 205.733 186.708 203.125 182.361C202.705 181.661 202.854 180.456 204.708 180.623C205.653 180.709 207.331 181.037 208.803 181.326L208.804 181.326L208.805 181.326L208.806 181.326L208.806 181.326C210.22 181.603 211.444 181.843 211.642 181.793C211.448 181.463 207.639 179.753 205.898 179.607C201.674 179.254 198.302 181.336 195.002 183.681C194.726 183.877 194.449 184.074 194.173 184.271C189.921 187.3 185.655 190.339 180.645 192.078C177.12 193.302 173.546 194.307 169.789 194.54C169.072 194.584 168.36 194.699 167.648 194.813L167.648 194.813C167.163 194.891 166.678 194.969 166.191 195.025C166.008 195.046 165.815 194.981 165.622 194.915C165.533 194.885 165.445 194.855 165.357 194.833C165.396 194.763 165.432 194.692 165.468 194.62C165.547 194.462 165.627 194.304 165.736 194.17C166.081 193.751 166.437 193.336 166.821 192.953C174.891 184.906 181.186 173.856 181.132 173.417C180.965 173.527 180.117 174.631 179.076 175.984C177.84 177.592 176.331 179.554 175.371 180.623C171.308 185.148 167.092 189.539 162.846 193.894C157.989 198.874 155.018 204.824 153.507 211.539C152.732 214.98 152.128 218.439 152.369 222.026C152.545 224.635 152.577 227.253 152.61 229.871C152.623 230.963 152.637 232.056 152.661 233.147C152.674 233.754 152.688 234.36 152.701 234.966L152.701 234.969C152.765 237.798 152.828 240.627 152.864 243.456L152.865 243.522C152.872 244.29 152.917 249.474 154.357 254.592C155.494 258.636 157.673 262.649 158.529 264.226L158.529 264.226L158.529 264.226C158.698 264.537 158.815 264.753 158.863 264.857C159.474 266.171 159.431 267.024 158.253 267.174C157.254 267.302 155.985 267.16 155.661 265.563L155.644 265.475C155.559 265.054 155.469 264.609 155.246 264.264C155.115 264.062 154.874 263.932 154.632 263.802C154.525 263.744 154.418 263.686 154.32 263.622C154.296 263.685 154.35 263.903 154.426 264.207C154.704 265.317 155.269 267.571 153.329 267.595C151.361 267.62 151.469 266.498 151.537 265.794C151.548 265.681 151.558 265.578 151.558 265.493V265.474C151.558 264.861 151.558 263.954 151.045 263.87C149.902 263.683 149.849 264.787 149.811 265.583L149.81 265.59C149.801 265.788 149.806 265.986 149.812 266.181C149.835 267.006 149.856 267.779 148.739 268.258C147.509 268.786 146.598 268.43 145.805 267.624C144.967 266.772 145.206 265.846 145.992 265.056C147.599 263.44 147.535 261.314 147.45 259.354C147.278 255.402 146.957 251.457 146.636 247.512C146.55 246.459 146.464 245.406 146.381 244.353C146.264 242.861 146.123 241.371 145.983 239.881L145.983 239.88C145.857 238.543 145.731 237.207 145.621 235.87C145.457 233.864 145.304 231.857 145.151 229.851C144.972 227.509 144.793 225.167 144.597 222.826C144.538 222.119 144.441 221.413 144.344 220.707L144.344 220.707C144.199 219.653 144.054 218.601 144.036 217.545C144.008 215.958 144.08 214.37 144.153 212.781L144.153 212.781C144.194 211.877 144.235 210.973 144.258 210.068C144.277 209.32 144.274 208.57 144.272 207.821V207.82C144.268 206.761 144.264 205.703 144.321 204.648C144.373 203.694 144.404 202.736 144.435 201.777C144.523 199.067 144.611 196.354 145.156 193.738C145.56 191.798 146.951 188.154 147.918 185.621L147.918 185.621L147.918 185.62C148.472 184.171 148.886 183.085 148.898 182.89C148.497 183.21 145.529 187.98 144.58 190.104L144.562 190.145C143.656 192.173 143.609 192.279 141.633 191.419C137.804 189.752 133.828 188.639 129.684 188.144C129.398 188.11 129.106 188.138 128.813 188.167C128.56 188.192 128.307 188.217 128.057 188.201C127.784 188.184 127.515 188.1 127.246 188.015C127.126 187.977 127.006 187.94 126.886 187.908C126.969 187.805 127.046 187.693 127.123 187.581C127.291 187.338 127.458 187.094 127.688 186.946C128.369 186.507 129.066 186.092 129.762 185.677L129.763 185.676C130.454 185.264 131.145 184.852 131.821 184.417C133.2 183.53 134.048 182.935 135.2 182.127L135.201 182.126L135.201 182.126L135.201 182.126L135.216 182.116C135.486 181.926 135.774 181.725 136.089 181.505C136.309 181.351 137.156 180.477 137.291 180.201C137.002 180.113 128.239 183.041 125.414 186.579C122.958 189.653 120.649 192.852 118.396 196.08C115.575 200.121 112.847 204.226 110.137 208.342L109.758 208.917L109.498 209.311C107.269 212.694 105.038 216.079 102.97 219.56L102.742 219.943C100.923 223.003 99.0809 226.101 97.7925 229.394C95.9847 234.015 94.4582 238.768 94.3667 243.863C94.342 245.24 94.1384 246.612 93.9346 247.986C93.7671 249.114 93.5995 250.244 93.5309 251.377C93.3682 254.068 93.9847 256.657 94.9459 259.195C95.1313 259.685 94.8895 260.35 94.6601 260.981C94.5914 261.17 94.5237 261.356 94.469 261.534C94.4344 261.646 93.8939 261.675 93.6085 261.624C92.5902 261.443 92.3749 260.736 92.2649 259.786C92.1739 259 91.8441 258.234 91.5226 257.487L91.5225 257.487L91.4688 257.362L91.4298 257.271L91.4016 257.205C91.3242 257.023 90.8055 256.837 90.6463 256.928C90.4307 257.051 90.2651 257.435 90.2563 257.713C90.2472 257.995 90.2768 258.283 90.3062 258.569C90.3502 258.997 90.3938 259.422 90.308 259.822C90.164 260.492 89.7746 261.154 89.3369 261.693C89.1797 261.886 88.2531 261.806 88.2174 261.688C88.0765 261.222 88.0439 260.722 88.0114 260.224C88.0066 260.151 88.0018 260.077 87.9966 260.004C87.9925 259.945 87.9882 259.887 87.9835 259.829C87.9775 259.756 87.9928 259.681 88.008 259.606C88.0241 259.526 88.0402 259.447 88.0309 259.37C87.9588 258.779 87.8772 258.188 87.7956 257.597C87.7674 257.393 87.7392 257.189 87.7114 256.984L87.5149 257.217L87.343 257.42C86.9125 257.929 86.4821 258.438 86.0594 258.954C86.032 258.987 86.033 259.046 86.0339 259.103C86.0349 259.162 86.0359 259.22 86.0066 259.248C85.8716 259.38 85.7399 259.521 85.608 259.663C85.2305 260.067 84.8509 260.474 84.3841 260.673C84.1456 260.775 83.221 260.039 83.1588 259.606C83.0609 258.924 83.194 257.948 83.637 257.493C85.6875 255.391 87.0368 252.896 87.6644 250.108C87.98 248.705 88.0991 247.261 88.2183 245.814V245.814C88.2947 244.886 88.3712 243.957 88.4997 243.039L88.6756 241.779C89.2893 237.383 89.9032 232.984 90.6576 228.611C91.22 225.35 91.8694 222.104 92.5188 218.858C92.846 217.223 93.1731 215.587 93.4892 213.95C93.534 213.718 93.4982 213.465 93.4638 213.222L93.4519 213.137C92.8009 208.392 93.7 203.768 94.7931 199.216L94.9839 198.421L94.9839 198.421C96.3783 192.609 97.7782 186.775 99.713 181.135C100.869 177.766 102.43 174.536 103.991 171.307L103.991 171.306C104.675 169.893 105.358 168.48 106.007 167.056C106.25 166.521 106.488 165.984 106.725 165.447L106.725 165.446L106.726 165.446L106.726 165.446L106.726 165.445L106.726 165.445L106.726 165.444L106.726 165.444L106.727 165.444L106.727 165.443L106.727 165.443L106.727 165.443C107.326 164.088 107.925 162.733 108.617 161.427L108.823 161.037C110.376 158.104 111.932 155.163 113.699 152.36C115.899 148.869 118.563 145.674 122.065 143.443C124.895 141.64 127.938 140.122 131.013 138.764C134.409 137.265 137.87 135.911 141.33 134.558L141.331 134.557L141.332 134.557L141.334 134.556L141.335 134.556L141.336 134.555L141.338 134.555L141.339 134.554L141.34 134.554L141.342 134.553L141.343 134.553L141.344 134.552C142.381 134.147 143.418 133.741 144.453 133.331C145.152 133.055 145.862 132.809 146.572 132.563L146.572 132.563L146.572 132.562L146.572 132.562L146.572 132.562L146.572 132.562L146.572 132.562L146.573 132.562L146.573 132.562L146.573 132.562L146.573 132.562L146.573 132.562C147.39 132.279 148.207 131.996 149.006 131.667C149.248 131.567 149.416 131.286 149.585 131.005C149.662 130.876 149.739 130.747 149.824 130.636C149.701 130.633 149.575 130.622 149.449 130.61C149.179 130.585 148.908 130.561 148.662 130.626C141.994 132.388 135.696 135.108 129.392 137.83C128.422 138.248 127.453 138.667 126.483 139.082C121.586 141.176 117.421 144.146 114.223 148.344C112.225 150.966 110.297 153.723 108.869 156.676C107.297 159.931 104.614 161.7 101.643 163.079C98.1597 164.695 94.48 165.987 90.5273 165.651C88.2996 165.462 86.0847 165.092 83.8746 164.724C83.6075 164.679 83.3405 164.634 83.0736 164.59C80.4674 164.158 77.1461 165.669 77.709 168.505C78.0637 170.293 79.3707 171.178 80.8781 171.582C81.4336 171.73 81.9892 171.886 82.5456 172.042L82.5462 172.042L82.5468 172.043L82.5475 172.043L82.5481 172.043L82.5488 172.043L82.5494 172.043L82.55 172.044C85.9705 173.003 89.418 173.97 93.0257 173.346C94.7844 173.042 96.51 172.548 98.236 172.054C99.0714 171.814 99.9068 171.575 100.746 171.357C100.979 171.297 101.223 171.276 101.467 171.255C101.579 171.246 101.692 171.236 101.804 171.223C101.773 171.31 101.745 171.399 101.716 171.487C101.655 171.677 101.593 171.867 101.508 172.045C98.2476 178.794 95.8101 185.815 94.3562 193.179C94.0643 194.658 93.7233 196.127 93.3823 197.595L93.3823 197.596L93.3823 197.596L93.3822 197.596L93.3822 197.597L93.3821 197.597L93.3821 197.597L93.382 197.597L93.382 197.598L93.3819 197.598L93.3819 197.598L93.3818 197.598L93.3817 197.599C92.9559 199.434 92.5302 201.268 92.2 203.121C91.9152 204.719 91.77 206.342 91.6248 207.966C91.5443 208.867 91.4637 209.768 91.3592 210.665C91.3055 211.126 91.2531 211.587 91.2007 212.049L91.1997 212.058L91.1996 212.058C90.9678 214.098 90.7359 216.139 90.3958 218.16C90.0099 220.454 89.5916 222.742 89.1734 225.031L89.173 225.033C88.5657 228.355 87.9585 231.677 87.4504 235.015C87.1224 237.17 86.941 239.347 86.7596 241.524L86.7595 241.524L86.7595 241.525L86.7594 241.525L86.7594 241.525L86.7594 241.526L86.7593 241.526L86.7593 241.526L86.7592 241.527L86.7592 241.527L86.7591 241.527L86.7591 241.528L86.759 241.528L86.7589 241.529L86.7588 241.53L86.7587 241.531L86.7586 241.532L86.7585 241.533L86.7584 241.533L86.7584 241.534L86.7583 241.535L86.7582 241.536L86.7581 241.537C86.6344 243.021 86.5107 244.506 86.3402 245.985C85.8827 249.954 85.0243 253.782 82.0509 256.782C80.9539 257.889 80.8202 259.832 81.5946 261.145C82.4439 262.585 83.7827 263.076 85.616 262.658C85.9817 262.574 86.4342 262.474 86.7443 262.612C88.332 263.317 89.8552 263.882 91.3598 262.389C91.4818 262.268 92.1981 262.639 92.5655 262.889C95.0074 264.549 97.0989 262.907 97.2052 260.359C97.2435 259.44 97.0534 258.459 96.7411 257.588C95.4844 254.082 95.5102 250.496 95.8711 246.867C95.9545 246.029 96.0122 245.187 96.0698 244.346V244.345C96.172 242.854 96.2741 241.363 96.5193 239.895C97.5656 233.63 99.912 227.829 103.311 222.482C107.993 215.117 112.738 207.792 117.525 200.495C118.542 198.945 119.63 197.443 120.719 195.941C121.593 194.735 122.467 193.529 123.304 192.298C124.536 190.486 126.324 190.669 127.965 190.837C128.233 190.864 128.497 190.891 128.753 190.909C131.74 191.117 134.523 192.141 137.307 193.166L137.307 193.166L137.308 193.166L137.308 193.166L137.308 193.167L137.309 193.167L137.309 193.167L137.309 193.167L137.31 193.167L137.31 193.167L137.31 193.167L137.31 193.167C138.601 193.642 139.892 194.118 141.204 194.512C143.024 195.058 142.871 196.114 142.712 197.212C142.679 197.436 142.647 197.661 142.63 197.884C142.56 198.858 142.453 199.83 142.347 200.801L142.347 200.801L142.347 200.801L142.347 200.801L142.347 200.801L142.347 200.802L142.347 200.802L142.347 200.802L142.347 200.802L142.347 200.802L142.347 200.802L142.347 200.802C142.217 201.992 142.087 203.182 142.022 204.375L141.961 205.48C141.73 209.677 141.498 213.877 141.462 218.077C141.449 219.598 141.637 221.119 141.825 222.641L141.825 222.641C141.935 223.531 142.045 224.421 142.115 225.312C142.287 227.503 142.443 229.695 142.599 231.888L142.599 231.888L142.599 231.889C142.811 234.86 143.023 237.831 143.274 240.799C143.367 241.906 143.452 243.015 143.537 244.125C143.833 247.979 144.129 251.837 144.784 255.631C145.399 259.186 144.73 262.307 143.443 265.493C142.709 267.309 144.498 269.842 146.597 269.863C146.793 269.865 146.999 269.879 147.209 269.893C148.272 269.965 149.435 270.044 149.983 268.602C150.029 268.483 150.792 268.425 150.915 268.58C151.58 269.418 152.396 269.328 153.21 269.239C153.502 269.207 153.794 269.175 154.078 269.186C154.367 269.197 154.659 269.19 154.95 269.183H154.95C155.478 269.17 156.006 269.157 156.513 269.253C158.1 269.554 159.45 269.067 160.417 267.926C161.361 266.811 161.102 265.487 160.253 264.21C159.963 263.666 159.674 263.127 159.385 262.592C158.307 260.587 157.253 258.629 156.346 256.605ZM79.3474 168.388C79.4569 168.229 79.5574 168.041 79.6579 167.852C79.8792 167.436 80.1004 167.02 80.4178 166.925C81.4881 166.604 82.7116 166.328 83.7758 166.535C88.0653 167.369 92.3189 168.18 96.6228 166.668C96.9836 166.541 97.3458 166.417 97.708 166.293L97.709 166.293C100.57 165.313 103.428 164.334 105.595 162.012C105.679 161.921 105.82 161.884 105.961 161.846L105.961 161.846L105.961 161.846C106.027 161.828 106.093 161.811 106.152 161.788C106.159 161.883 106.176 161.984 106.194 162.085C106.233 162.303 106.272 162.521 106.192 162.68C105.352 164.359 104.495 166.033 103.561 167.661C103.32 168.081 102.836 168.48 102.377 168.638C101.726 168.861 101.075 169.093 100.424 169.325C98.2995 170.082 96.1712 170.84 93.9839 171.322C90.4978 172.089 86.9641 171.445 83.5716 170.548C83.2959 170.475 83.0044 170.418 82.7062 170.36C81.4867 170.122 80.1564 169.863 79.3474 168.388ZM207.859 106.517C210.183 107.668 212.557 108.285 214.993 107.777C215.769 107.616 216.706 106.613 216.949 105.808C217.563 103.77 217.951 101.66 218.337 99.5579L218.337 99.5578L218.337 99.5567L218.338 99.5555L218.338 99.5543C218.382 99.3141 218.426 99.074 218.471 98.8341C218.803 97.0419 217.719 95.9306 216.223 95.4703C213.011 94.4817 209.74 93.9916 206.564 95.7157C202.874 97.7188 203.268 103.142 205.628 104.824C206.2 105.231 206.755 105.662 207.354 106.126C207.519 106.254 207.687 106.384 207.859 106.517ZM207.175 98.1398C207.221 98.0889 207.266 98.025 207.312 97.9611C207.41 97.822 207.508 97.683 207.612 97.6789C208.07 97.6608 208.53 97.6892 208.991 97.7177C209.159 97.7281 209.328 97.7386 209.497 97.7467C209.431 97.8787 209.363 98.0096 209.295 98.1405L209.295 98.1408L209.294 98.141C209.142 98.4338 208.989 98.7266 208.865 99.0312C208.666 99.5212 208.491 100.021 208.316 100.52L208.316 100.521C208.259 100.684 208.202 100.847 208.144 101.009C208.074 101.204 208.009 101.401 207.945 101.598C207.916 101.687 207.887 101.776 207.857 101.865C207.77 101.818 207.677 101.777 207.585 101.735L207.585 101.735C207.385 101.645 207.185 101.555 207.035 101.412C205.968 100.397 206.387 99.3491 207.175 98.1398ZM161.667 208.151C161.694 207.782 161.721 207.41 161.749 207.035C161.799 206.848 161.866 206.714 161.924 206.599C161.972 206.505 162.013 206.423 162.031 206.337C162.172 205.684 162.305 205.029 162.438 204.375L162.438 204.374L162.438 204.374L162.439 204.373L162.439 204.373L162.439 204.373L162.439 204.372L162.439 204.372L162.439 204.371C162.73 202.942 163.021 201.513 163.388 200.103C163.408 200.025 163.424 199.93 163.44 199.829C163.526 199.303 163.642 198.585 164.653 198.921C165.688 199.265 165.596 199.766 165.43 200.676L165.405 200.812C164.777 204.291 164.338 207.809 163.955 211.326C163.663 214.018 163.515 216.729 163.391 219.435C163.345 220.421 163.281 221.409 163.216 222.399C163.033 225.207 162.849 228.02 163.1 230.79C163.412 234.229 165.528 236.958 168.571 238.786C171.462 240.524 174.214 242.351 175.36 245.811C176.067 247.947 175.377 249.464 173.401 249.521C173.037 249.532 172.667 249.362 172.297 249.192C172.127 249.114 171.958 249.036 171.788 248.975C171.916 248.834 172.036 248.671 172.155 248.509L172.155 248.509C172.421 248.148 172.686 247.787 173.036 247.661C173.981 247.319 174.049 247.089 173.67 246.102C172.889 244.069 171.692 242.535 169.816 241.451C166.827 239.724 164.191 237.546 162.563 234.462C160.57 230.684 159.637 226.645 160.25 222.322C160.619 219.722 160.891 217.107 161.151 214.493C161.357 212.416 161.508 210.334 161.667 208.151ZM149.5 147.885C150.422 142.619 151.32 137.51 152.295 132.416C152.958 128.951 155.394 126.826 158.097 124.868C158.415 124.637 158.737 124.407 159.059 124.177C160.891 122.869 162.749 121.543 164.196 119.882C166.71 116.994 170.894 110.098 170.69 106.5C170.554 104.102 169.713 101.312 169.713 101.312C169.713 101.312 170.119 106.272 169.713 107.786C168.284 113.115 164.38 117.339 160.78 120.169C159.952 120.82 159.094 121.44 158.237 122.06L158.237 122.06C156.548 123.282 154.861 124.502 153.402 125.954C151.989 127.361 150.85 129.209 150.556 131.458C150.387 132.745 150.179 134.018 149.971 135.296L149.971 135.296C149.549 137.877 149.125 140.475 149.016 143.237C148.89 146.407 147.181 151.02 146.367 153.218L146.367 153.218L146.367 153.219C146.106 153.922 145.937 154.378 145.941 154.46C146.237 154.35 148.422 150.539 149.218 148.744C149.32 148.514 149.412 148.28 149.5 147.885ZM176.161 77.8095C179.505 76.194 182.888 74.6576 186.422 73.0889C188.102 72.6738 189.69 72.2604 191.256 71.8527L191.256 71.8526L191.256 71.8526L191.257 71.8526L191.257 71.8526L191.257 71.8526L191.257 71.8526L191.257 71.8526L191.257 71.8526L191.257 71.8526L191.257 71.8525L191.257 71.8525L191.257 71.8525C191.777 71.7171 192.295 71.5823 192.813 71.4482C196.502 70.4937 200.221 70.5968 203.849 71.5725C205.511 72.0194 207.098 72.7513 208.68 73.4811C209.161 73.7027 209.641 73.9241 210.123 74.1373C210.282 74.2077 210.353 74.4781 210.423 74.7484L210.423 74.7484C210.456 74.8738 210.489 74.9991 210.531 75.1045C210.42 75.1272 210.309 75.1567 210.198 75.1862C209.94 75.2547 209.682 75.3232 209.429 75.3067C209.259 75.2956 209.098 75.1942 208.934 75.0911C208.83 75.0256 208.725 74.9595 208.616 74.9155C205.478 73.6477 202.211 72.8784 198.834 72.785C193.544 72.6386 188.526 73.9494 183.681 75.9734C182.556 76.4436 181.444 76.9453 180.332 77.447L180.332 77.4471L180.332 77.4471L180.331 77.4472L180.331 77.4472L180.331 77.4473L180.331 77.4474C179.201 77.9574 178.07 78.4674 176.926 78.9442C176.601 79.0795 176.214 79.0658 175.827 79.0521C175.649 79.0458 175.471 79.0395 175.299 79.0477C175.388 78.9137 175.468 78.7595 175.547 78.6053L175.547 78.6053L175.547 78.6052C175.719 78.2725 175.891 77.9398 176.161 77.8095ZM194.427 88.6792C194.759 87.4984 193.461 87.4816 192.355 87.6153C190.086 87.89 187.794 87.9799 185.503 88.0699L185.502 88.0699L185.502 88.0699L185.502 88.0699L185.502 88.0699L185.501 88.07C184.56 88.1069 183.619 88.1438 182.679 88.1936C182.463 88.205 182.158 88.1923 181.847 88.1792C181.161 88.1505 180.447 88.1205 180.599 88.3479C183.899 93.2842 193.132 93.2842 194.427 88.6792ZM214.925 110.358C215.433 113.316 214.726 115.211 211.489 115.949C210.336 116.212 208.908 115.494 208.102 115.045C206.852 114.348 205.646 113.572 204.44 112.796L204.439 112.796C204.035 112.536 203.631 112.276 203.225 112.018C203.264 112.398 202.158 114.969 201.415 115.432C200.902 115.062 200.696 114.695 200.48 114.308L200.479 114.308C200.41 114.185 200.34 114.06 200.258 113.932C200.137 113.741 200.085 113.507 200.033 113.272L200.033 113.272C200.006 113.152 199.98 113.032 199.944 112.917C199.824 112.536 199.789 112.113 199.754 111.69C199.663 110.597 199.572 109.503 198.024 109.115C197.96 109.099 197.88 109.088 197.794 109.077C197.411 109.028 196.909 108.964 197.106 108.288C197.347 107.461 198.025 107.682 198.334 107.794C199.654 108.274 200.945 108.858 202.195 109.505C203.662 110.264 205.119 111.045 206.576 111.826L206.576 111.826L206.576 111.826L206.576 111.826L206.576 111.826C207.935 112.555 209.293 113.283 210.661 113.994C212.023 114.702 213.049 113.799 213.937 112.688C214.582 111.881 214.43 110.408 214.339 109.525C214.304 109.186 214.278 108.933 214.31 108.839C214.631 109.157 214.862 109.995 214.925 110.358ZM203.154 111.973L203.225 112.018C203.223 112 203.219 111.986 203.211 111.979C203.199 111.967 203.179 111.966 203.154 111.973ZM203.154 111.973C202.84 111.775 202.524 111.578 202.207 111.384C201.903 111.198 201.548 111.094 201.193 110.99L201.193 110.99L201.193 110.99L201.193 110.99L201.193 110.99C201.03 110.942 200.867 110.894 200.709 110.839C200.795 111.082 200.849 111.428 200.907 111.798L200.907 111.798C201.007 112.431 201.117 113.132 201.415 113.499C201.477 113.575 201.858 113.187 202.254 112.782C202.62 112.409 202.999 112.021 203.154 111.973ZM156.701 235.213L156.701 235.212C156.68 234.584 156.661 234.012 156.571 233.452C156.533 233.216 156.353 233.003 156.173 232.79C156.091 232.693 156.009 232.597 155.941 232.498C155.872 232.596 155.783 232.695 155.694 232.794C155.503 233.006 155.312 233.219 155.32 233.423C155.496 237.872 155.715 242.384 157.835 246.377C158.664 247.938 160.416 249.144 161.993 250.11C162.677 250.528 164.234 250.26 164.95 249.717C166.104 248.842 166.208 247.293 165.5 246.025C165.006 245.14 164.153 244.414 163.337 243.774C163.152 243.628 162.787 243.713 162.422 243.797C162.255 243.836 162.088 243.875 161.938 243.891C162.006 243.995 162.071 244.101 162.136 244.208L162.136 244.208L162.136 244.208L162.136 244.208C162.28 244.443 162.424 244.678 162.6 244.886C162.774 245.093 162.97 245.286 163.166 245.48L163.166 245.48C163.533 245.843 163.899 246.205 164.112 246.643C164.342 247.114 164.333 248.071 164.022 248.343C163.639 248.678 162.708 248.776 162.226 248.542C159.229 247.085 158.217 244.308 157.663 241.277C157.354 239.589 157.05 237.901 156.735 236.05C156.719 235.759 156.71 235.481 156.701 235.213ZM214.937 90.8786C212.403 91.1867 207.749 87.9547 207.749 87.2581C207.749 86.5614 214.064 85.8433 216.585 85.6007C217.742 85.4893 218.424 85.8264 218.517 86.9924C218.651 88.6663 216.786 90.6538 214.937 90.8786ZM168.496 250.055C171.364 248.214 170.793 246.354 168.049 243.617C167.73 243.299 167.305 242.984 166.883 242.901C166.575 242.84 166.239 242.915 165.904 242.989C165.757 243.022 165.611 243.054 165.466 243.076C165.526 243.169 165.584 243.264 165.641 243.36C165.766 243.568 165.891 243.777 166.047 243.959C166.819 244.869 167.597 245.774 168.404 246.652C169.281 247.606 168.563 247.999 167.823 248.377C167.727 248.426 167.605 248.443 167.487 248.46C167.333 248.482 167.185 248.503 167.107 248.593C166.875 248.859 166.69 249.167 166.506 249.475C166.432 249.599 166.357 249.724 166.279 249.846C166.397 249.88 166.513 249.919 166.63 249.957C166.901 250.047 167.171 250.136 167.449 250.179C167.763 250.227 168.095 250.158 168.496 250.055ZM218.711 262.811C219.367 262.87 220.024 262.928 220.766 263.064C221.156 263.383 221.563 263.678 221.964 263.969C222.874 264.628 223.751 265.263 224.321 266.107C224.855 266.897 224.754 268.428 224.375 269.41C224.169 269.943 223.163 270.23 222.342 270.464C222.231 270.496 222.123 270.526 222.022 270.556C221.583 270.687 220.972 270.539 220.543 270.316C220.231 270.154 219.98 269.875 219.73 269.596C219.62 269.474 219.51 269.352 219.396 269.24C219.543 269.183 219.711 269.097 219.88 269.011C220.244 268.824 220.609 268.638 220.767 268.748C221.611 269.339 221.893 268.761 222.119 268.299C222.181 268.171 222.239 268.052 222.304 267.969C222.525 267.685 222.386 266.842 222.103 266.502C221.733 266.058 221.289 265.677 220.845 265.296C220.512 265.01 220.18 264.725 219.877 264.412C219.563 264.088 219.309 263.704 219.056 263.321C218.943 263.149 218.829 262.978 218.71 262.811L218.711 262.811Z",
                fill: "#00160A",
              }),
              Object(r.jsx)("defs", {
                children: Object(r.jsx)("linearGradient", {
                  id: "paint0_linear",
                  x1: "162",
                  y1: "38.448",
                  x2: "162",
                  y2: "295.488",
                  gradientUnits: "userSpaceOnUse",
                  children: Object(r.jsx)("stop", { stopColor: "#314043" }),
                }),
              }),
            ],
          });
        },
        QC = function (e) {
          var t = e.changeCard;
          return Object(r.jsxs)(L.a, {
            bg: "primary.200",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            children: [
              Object(r.jsx)(I, {
                headingType: C.auth,
                children: "Welcome Back!",
              }),
              Object(r.jsx)(ht.a, { children: "I've been waiting for you!" }),
              Object(r.jsx)(L.a, {
                mt: -5,
                width: "70%",
                children: Object(r.jsx)(qC, {}),
              }),
              Object(r.jsx)(ht.a, {
                mt: "1.2rem",
                children: "Woof-Woof! Are you a stranger?",
              }),
              Object(r.jsx)(wn, {
                px: 100,
                mt: 2,
                buttontype: _t.white,
                fontWeight: "normal",
                onClick: t,
                children: "Register",
              }),
            ],
          });
        },
        UC = function (e) {
          var t = Object.assign({}, e).match,
            n = Object(a.useState)("register" === t.params.type),
            C = Object(pt.a)(n, 2),
            i = C[0],
            o = C[1],
            c = function () {
              o(!i);
            };
          return Object(r.jsx)(r.Fragment, {
            children: Object(r.jsx)(L.a, {
              bg: "achromatic.200",
              w: "100%",
              h: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              children: Object(r.jsx)(Qt.a, {
                children: Object(r.jsxs)(L.a, {
                  display: "flex",
                  position: "relative",
                  height: 600,
                  width: 1e3,
                  children: [
                    Object(r.jsx)(L.a, {
                      position: "absolute",
                      left: i ? 0 : 500,
                      height: "100%",
                      width: "50%",
                      boxShadow: "lg",
                      transition: "left 1s, border-radius 1s",
                      borderRightRadius: i ? 0 : 15,
                      borderLeftRadius: i ? 15 : 0,
                      overflow: "hidden",
                      children: i
                        ? Object(r.jsx)(YC, {})
                        : Object(r.jsx)(WC, {}),
                    }),
                    Object(r.jsx)(L.a, {
                      height: "100%",
                      width: "50%",
                      position: "absolute",
                      right: i ? 0 : 500,
                      borderRightRadius: i ? 15 : 0,
                      borderLeftRadius: i ? 0 : 15,
                      overflow: "hidden",
                      transition: "right 1s, border-radius 1s",
                      boxShadow: "lg",
                      zIndex: "999",
                      children: i
                        ? Object(r.jsx)(NC, { changeCard: c })
                        : Object(r.jsx)(QC, { changeCard: c }),
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        HC = n(693),
        PC = function (e) {
          var t = e.taskData,
            n = e.mappedIndex;
          return t
            ? Object(r.jsx)(
                Qn.b,
                {
                  draggableId: t.id,
                  index: n,
                  children: function (e) {
                    return Object(r.jsxs)(r.Fragment, {
                      children: [
                        Object(r.jsxs)(
                          gt.a,
                          Object(p.a)(
                            Object(p.a)(
                              Object(p.a)(
                                { ref: e.innerRef },
                                e.dragHandleProps
                              ),
                              e.draggableProps
                            ),
                            {},
                            {
                              alignItems: "center",
                              p: 2,
                              children: [
                                Object(r.jsx)(L.a, {
                                  w: "80px",
                                  children: Object(r.jsx)(zt, {
                                    children: "No. ".concat(t.taskIndex),
                                  }),
                                }),
                                Object(r.jsx)(L.a, {
                                  w: "65%",
                                  children: Object(r.jsx)(ht.a, {
                                    fontSize: "base",
                                    children: t.title,
                                  }),
                                }),
                                Object(r.jsx)(L.a, {
                                  w: "20%",
                                  children: Object(r.jsx)(zt, {
                                    children: t.board ? t.board.title : void 0,
                                  }),
                                }),
                                Object(r.jsx)(L.a, {
                                  w: "10%",
                                  children: t.userTask
                                    ? t.userTask.length > 1
                                      ? Object(r.jsx)(Q, {
                                          max: 3,
                                          size: z.sm,
                                          avatars: t.userTask.map(function (e) {
                                            return e.user;
                                          }),
                                        })
                                      : Object(r.jsx)(J, {
                                          name: t.userTask[0].user.username,
                                          src: t.userTask[0].user.avatar
                                            ? t.userTask[0].user.avatar
                                            : void 0,
                                          size: "sm",
                                        })
                                    : void 0,
                                }),
                              ],
                            }
                          )
                        ),
                        Object(r.jsx)(ft.a, {}),
                      ],
                    });
                  },
                },
                t.id
              )
            : Object(r.jsx)(Tt, {});
        },
        KC = function (e) {
          var t = e.taskData,
            n = Object(a.useState)([]),
            C = Object(pt.a)(n, 2),
            i = C[0],
            o = C[1];
          return (
            i.length < 1 && t.length > 1 && o(t),
            Object(r.jsx)(Qn.a, {
              onDragEnd: function (e) {
                if (e.destination) {
                  var t = Array.from(i),
                    n = t.splice(e.source.index, 1),
                    C = Object(pt.a)(n, 1)[0];
                  t.splice(e.destination.index, 0, C), o(t);
                }
              },
              children: Object(r.jsx)(HC.e, {
                children: Object(r.jsx)(Qn.c, {
                  droppableId: "droppableTask",
                  children: function (e) {
                    return Object(r.jsxs)(
                      L.a,
                      Object(p.a)(
                        Object(p.a)({}, e.droppableProps),
                        {},
                        {
                          ref: e.innerRef,
                          children: [
                            i.map(function (e, t) {
                              return Object(r.jsx)(
                                PC,
                                { taskData: e, mappedIndex: t },
                                e.id
                              );
                            }),
                            e.placeholder,
                          ],
                        }
                      )
                    );
                  },
                }),
              }),
            })
          );
        },
        XC = function (e) {
          var t,
            n = e.sprintData,
            C = e.row,
            i = e.tasks,
            o = Object(u.h)(),
            c = Object(dn.a)(),
            l = o.pathname.split("/").pop() || "",
            d = Object(a.useState)(0 === C),
            j = Object(pt.a)(d, 1)[0],
            b = Object(Fn.a)(),
            m = b.isOpen,
            h = b.onOpen,
            x = b.onClose,
            O = _e(),
            g = Object(pt.a)(O, 2),
            f = g[0],
            M = (g[1].loading, s.useMutation(We, t)),
            v = Object(pt.a)(M, 2),
            Z = v[0],
            A =
              (v[1].loading,
              (function () {
                var e = Object(ln.a)(
                  sn.a.mark(function e(t) {
                    return sn.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              f({
                                variables: {
                                  projectId: l,
                                  options: {
                                    id: n.id,
                                    title: t.sprintName,
                                    description: t.description,
                                  },
                                },
                                update: (function () {
                                  var e = Object(ln.a)(
                                    sn.a.mark(function e(C) {
                                      var r, a;
                                      return sn.a.wrap(
                                        function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (
                                                  (e.prev = 0),
                                                  (e.next = 3),
                                                  C.readQuery({
                                                    query: lt,
                                                    variables: { projectId: l },
                                                  })
                                                );
                                              case 3:
                                                (r = e.sent),
                                                  (a = r.getSprints.sprints.map(
                                                    function (e) {
                                                      return e.id === n.id
                                                        ? Object(p.a)(
                                                            Object(p.a)({}, e),
                                                            {},
                                                            {
                                                              title:
                                                                t.sprintName,
                                                              description:
                                                                t.description,
                                                            }
                                                          )
                                                        : e;
                                                    }
                                                  )),
                                                  C.writeQuery({
                                                    query: lt,
                                                    data: {
                                                      getSprints: {
                                                        sprints: a,
                                                      },
                                                    },
                                                  }),
                                                  (e.next = 11);
                                                break;
                                              case 8:
                                                (e.prev = 8),
                                                  (e.t0 = e.catch(0)),
                                                  console.log(e.t0);
                                              case 11:
                                              case "end":
                                                return e.stop();
                                            }
                                        },
                                        e,
                                        null,
                                        [[0, 8]]
                                      );
                                    })
                                  );
                                  return function (t) {
                                    return e.apply(this, arguments);
                                  };
                                })(),
                              })
                            );
                          case 2:
                            x(),
                              c({
                                position: "bottom-right",
                                title: "Sprint Updated!",
                                description:
                                  "Sprint has been successfully updated",
                                status: "success",
                                duration: 2e3,
                                isClosable: !0,
                              });
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
            w = (function () {
              var e = Object(ln.a)(
                sn.a.mark(function e() {
                  return sn.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Z({
                              variables: { id: n.id, projectId: l },
                              update: (function () {
                                var e = Object(ln.a)(
                                  sn.a.mark(function e(t) {
                                    var C, r;
                                    return sn.a.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (e.prev = 0),
                                                (e.next = 3),
                                                t.readQuery({
                                                  query: lt,
                                                  variables: { projectId: l },
                                                })
                                              );
                                            case 3:
                                              (C = e.sent),
                                                (r = C.getSprints.sprints.filter(
                                                  function (e) {
                                                    return e.id !== n.id;
                                                  }
                                                )),
                                                t.writeQuery({
                                                  query: lt,
                                                  data: {
                                                    getSprints: { sprints: r },
                                                  },
                                                }),
                                                (e.next = 11);
                                              break;
                                            case 8:
                                              (e.prev = 8),
                                                (e.t0 = e.catch(0)),
                                                console.log(e.t0);
                                            case 11:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      null,
                                      [[0, 8]]
                                    );
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })(),
                            })
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return Object(r.jsx)(
            Qn.b,
            {
              draggableId: n.id,
              index: C,
              children: function (e) {
                return Object(r.jsx)(HC.a, {
                  allowToggle: !0,
                  children: Object(r.jsxs)(HC.d, {
                    children: [
                      Object(r.jsxs)(
                        gt.a,
                        Object(p.a)(
                          Object(p.a)(
                            Object(p.a)({ ref: e.innerRef }, e.dragHandleProps),
                            e.draggableProps
                          ),
                          {},
                          {
                            alignItems: "center",
                            p: 2,
                            children: [
                              Object(r.jsx)(Qt.a, {
                                w: "40px",
                                h: "40px",
                                overflow: "hidden",
                                children: Object(r.jsx)(HC.b, {
                                  p: "8px",
                                  w: "100%",
                                  h: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                  _hover: {
                                    bg: "primary.400",
                                    borderRadius: "9999px",
                                    transition: "ease 0.3s",
                                  },
                                  _focus: { outline: "none" },
                                  children: Object(r.jsx)(HC.c, {
                                    fontSize: "2rem",
                                  }),
                                }),
                              }),
                              Object(r.jsx)(L.a, {
                                flex: "1",
                                ml: 3,
                                textAlign: "left",
                                children: n.title,
                              }),
                              Object(r.jsx)(gt.a, {
                                justifyContent: "flex-end",
                                p: 3,
                                visibility: j ? "visible" : "hidden",
                                children: Object(r.jsxs)(S.a, {
                                  children: [
                                    Object(r.jsx)(S.b, {
                                      as: fn.a,
                                      p: 3,
                                      border: "none",
                                      backgroundColor: "transparent",
                                      outline: "none",
                                      _hover: {
                                        outline: "none",
                                        backgroundColor: "transparent",
                                      },
                                      _focus: {
                                        outline: "none",
                                        backgroundColor: "transparent",
                                      },
                                      color: "achromatic.600",
                                      fontSize: "xl",
                                      children: Object(r.jsx)(R.c, {}),
                                    }),
                                    Object(r.jsxs)(S.e, {
                                      children: [
                                        Object(r.jsx)(S.d, {
                                          onClick: h,
                                          children: "Update Sprint",
                                        }),
                                        Object(r.jsx)(Wn, {
                                          isOpen: m,
                                          onOpen: h,
                                          onClose: x,
                                          footer: !1,
                                          title: "Update Sprint",
                                          buttonText: "Update Sprint",
                                          bgColor: "primary.400",
                                          color: "achromatic.600",
                                          borderRadius: "9999px",
                                          display: "none",
                                          children: Object(r.jsx)(L.a, {
                                            mb: 3,
                                            children: Object(r.jsx)(kn, {
                                              initialValues: {
                                                sprintName: "",
                                                description: "",
                                              },
                                              buttonPosition: "right",
                                              isSubmitButton: !0,
                                              submitBtnName: "Update Sprint",
                                              onSubmit: A,
                                              children: Object(r.jsxs)(L.a, {
                                                lineHeight: 8,
                                                children: [
                                                  Object(r.jsx)(L.a, {
                                                    p: 2,
                                                    children: Object(r.jsx)(
                                                      On,
                                                      {
                                                        label: "Sprint Name",
                                                        name: "sprintName",
                                                        placeholder: n.title,
                                                      }
                                                    ),
                                                  }),
                                                  Object(r.jsx)(L.a, {
                                                    p: 2,
                                                    mb: 6,
                                                    children: Object(r.jsx)(
                                                      jC,
                                                      {
                                                        label:
                                                          "Sprint Description",
                                                        name: "description",
                                                        placeholder:
                                                          n.description,
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            }),
                                          }),
                                        }),
                                        Object(r.jsx)(S.d, {
                                          onClick: w,
                                          children: "Delete Sprint",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }
                        )
                      ),
                      Object(r.jsx)(KC, { taskData: i }),
                    ],
                  }),
                });
              },
            },
            n.id
          );
        },
        $C = function () {
          var e,
            t = Object(u.h)().pathname.split("/").pop() || "",
            n = Object(a.useState)([]),
            C = Object(pt.a)(n, 2),
            i = C[0],
            o = C[1],
            c =
              ((e = {
                variables: { projectId: t },
                fetchPolicy: "cache-and-network",
              }),
              s.useQuery(lt, e)),
            l = c.data,
            d = c.loading,
            j = (c.error, _e()),
            b = Object(pt.a)(j, 1)[0];
          if (
            (Object(a.useEffect)(
              function () {
                (null === l || void 0 === l ? void 0 : l.getSprints.sprints) &&
                  o(null === l || void 0 === l ? void 0 : l.getSprints.sprints),
                  console.log("howmany times am i rendering?");
              },
              [l]
            ),
            d)
          )
            return Object(r.jsx)(Tt, {});
          return Object(r.jsx)(Qn.a, {
            onDragEnd: function (e) {
              if (e.destination) {
                console.log("result", e),
                  b({
                    variables: {
                      projectId: t,
                      options: { id: e.draggableId, row: e.destination.index },
                    },
                    update: function (e, t) {
                      var n = t.data;
                      if ((console.log(n), n && n.updateSprint.sprint)) {
                        var C = e.identify(n.updateSprint.sprint);
                        C &&
                          e.modify({
                            fields: {
                              getSprints: function (e, t) {
                                var n = t.toReference;
                                return [].concat(Object(qn.a)(e.sprints), [
                                  n(C),
                                ]);
                              },
                            },
                          });
                      }
                    },
                  });
                var n = Array.from(i);
                o(n);
              }
            },
            children: Object(r.jsx)(L.a, {
              children: Object(r.jsx)(Qn.c, {
                droppableId: "droppableSprint",
                children: function (e) {
                  return Object(r.jsxs)(
                    L.a,
                    Object(p.a)(
                      Object(p.a)({}, e.droppableProps),
                      {},
                      {
                        ref: e.innerRef,
                        children: [
                          i.map(function (e) {
                            return Object(r.jsx)(
                              XC,
                              { sprintData: e, row: e.row, tasks: e.task },
                              e.id
                            );
                          }),
                          e.placeholder,
                        ],
                      }
                    )
                  );
                },
              }),
            }),
          });
        },
        _C = function (e) {
          var t,
            n = Object.assign({}, e),
            C = Object(u.h)(),
            a = Object(dn.a)(),
            i = C.pathname.split("/").pop() || "",
            o = Object(Fn.a)(),
            c = o.isOpen,
            l = o.onOpen,
            d = o.onClose,
            j = s.useMutation(Ee, t),
            b = Object(pt.a)(j, 1)[0],
            m = (function () {
              var e = Object(ln.a)(
                sn.a.mark(function e(t) {
                  return sn.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            b({
                              variables: {
                                projectId: i,
                                title: t.sprintName,
                                description: t.description,
                              },
                              update: (function () {
                                var e = Object(ln.a)(
                                  sn.a.mark(function e(t, n) {
                                    var C, r;
                                    return sn.a.wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            if ((C = n.data)) {
                                              e.next = 3;
                                              break;
                                            }
                                            return e.abrupt("return");
                                          case 3:
                                            if (C.createSprint.sprint) {
                                              e.next = 5;
                                              break;
                                            }
                                            return e.abrupt("return");
                                          case 5:
                                            if (
                                              (r = t.identify(
                                                C.createSprint.sprint
                                              ))
                                            ) {
                                              e.next = 8;
                                              break;
                                            }
                                            return e.abrupt("return");
                                          case 8:
                                            t.modify({
                                              fields: {
                                                getSprints: function (e, t) {
                                                  var n = t.toReference;
                                                  return [].concat(
                                                    Object(qn.a)(e.sprints),
                                                    [n(r)]
                                                  );
                                                },
                                              },
                                            });
                                          case 9:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                );
                                return function (t, n) {
                                  return e.apply(this, arguments);
                                };
                              })(),
                            })
                          );
                        case 2:
                          d(),
                            a({
                              position: "bottom-right",
                              title: "Sprint Created!",
                              description:
                                "Sprint has been successfully created",
                              status: "success",
                              duration: 2e3,
                              isClosable: !0,
                            });
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(r.jsxs)(r.Fragment, {
            children: [
              Object(r.jsx)(bt, Object(p.a)({}, n)),
              Object(r.jsx)(M, Object(p.a)({}, n)),
              Object(r.jsx)(L.a, {
                display: "flex",
                ml: 210,
                mt: 50,
                children: Object(r.jsxs)(L.a, {
                  w: "100%",
                  p: 9,
                  children: [
                    Object(r.jsx)(L.a, { children: Object(r.jsx)(Ot, {}) }),
                    Object(r.jsx)(L.a, {
                      mt: 9,
                      children: Object(r.jsx)($C, {}),
                    }),
                    Object(r.jsx)(gt.a, {
                      justifyContent: "flex-end",
                      mt: 12,
                      children: Object(r.jsx)(Wn, {
                        isOpen: c,
                        onOpen: l,
                        onClose: d,
                        footer: !1,
                        title: "CreateSprint",
                        buttonText: "Create Sprint",
                        bgColor: "primary.400",
                        color: "achromatic.600",
                        borderRadius: "9999px",
                        children: Object(r.jsx)(r.Fragment, {
                          children: Object(r.jsx)(kn, {
                            initialValues: { sprintName: "", description: "" },
                            buttonPosition: "right",
                            isSubmitButton: !0,
                            submitBtnName: "Create Sprint",
                            onSubmit: m,
                            children: Object(r.jsxs)(L.a, {
                              lineHeight: 8,
                              children: [
                                Object(r.jsx)(L.a, {
                                  p: 2,
                                  children: Object(r.jsx)(On, {
                                    label: "Sprint Name",
                                    name: "sprintName",
                                    placeholder: "Enter Name",
                                  }),
                                }),
                                Object(r.jsx)(L.a, {
                                  p: 2,
                                  mb: 6,
                                  children: Object(r.jsx)(jC, {
                                    label: "Sprint Description",
                                    name: "description",
                                    placeholder: "Enter Description",
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        er = n(117),
        tr = n(688),
        nr = n(383),
        Cr = n.n(nr),
        rr = {
          labels: ["Todo", "Start", "Progress", "Review", "Done"],
          datasets: [
            {
              label: "# of Jason",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: "rgb(255, 99, 132)",
            },
            {
              label: "# of Dean",
              data: [2, 3, 20, 5, 1, 4],
              backgroundColor: "rgb(54, 162, 235)",
            },
            {
              label: "# of Peter",
              data: [3, 10, 13, 15, 22, 30],
              backgroundColor: "rgb(75, 192, 192)",
            },
          ],
        },
        ar = {
          scales: {
            yAxes: [{ stacked: !0, ticks: { beginAtZero: !0 } }],
            xAxes: [{ stacked: !0 }],
          },
        };
      function ir() {
        var e = Object(U.a)([
          '\n  background-image: src("../../asset/img/shapes11.png");\n  width: 100%;\n  height: 50%;\n',
        ]);
        return (
          (ir = function () {
            return e;
          }),
          e
        );
      }
      function or() {
        var e = Object(U.a)([
          "\n  clip-path: polygon(100% 10%, 100% 100%, 30% 100%);\n  width: 100%;\n  height: 100%;\n  background-color: #31d5bf;\n  position: absolute;\n  top: 0;\n",
        ]);
        return (
          (or = function () {
            return e;
          }),
          e
        );
      }
      function cr() {
        var e = Object(U.a)([
          "\n  clip-path: polygon(50% 0%, 100% 0%, 100% 50%);\n  width: 100%;\n  height: 100%;\n  background-color: #67499e;\n  position: absolute;\n  top: 0;\n",
        ]);
        return (
          (cr = function () {
            return e;
          }),
          e
        );
      }
      var sr = At.a.div(cr()),
        lr = At.a.div(or()),
        dr =
          (At.a.div(ir()),
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAE2CAYAAAAQ60t2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTEyLTE0VDEzOjA4OjE2KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTEyLTE0VDEzOjA4OjE2KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMi0xNFQxMzowODoxNiswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpiMTcwZGZlNy04MTY2LWFmNDAtYWFjMi0wZTAyYjU1YjliMDMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjMmNhMGY2NS05N2M0LTZiNDYtOGQyNi1iMjZkMGQ4ZTg5ODIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5Y2U3YjQxYi0yYWE5LWUwNDItYTEzYy1mODBmM2FjZTVhNDgiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjljZTdiNDFiLTJhYTktZTA0Mi1hMTNjLWY4MGYzYWNlNWE0OCIgc3RFdnQ6d2hlbj0iMjAyMC0xMi0xNFQxMzowODoxNiswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiMTcwZGZlNy04MTY2LWFmNDAtYWFjMi0wZTAyYjU1YjliMDMiIHN0RXZ0OndoZW49IjIwMjAtMTItMTRUMTM6MDg6MTYrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7UbhbdAAAUpElEQVR4nO3de7AfZX3H8XcuhEkwEkCUmwEsBUSBqNCIiOjUG+JlVEYBR0ClRR20XFQUFEUQUusFxytaULGCVmmtClKtjkJBLqICRUER5U7l0kAgMSHJ6R/fE7mYc5Jzsvt8n919v2Z2MjrDPp9zfvt8zu+3u79np4yMjCBJQzQ1O4AkZbEAJQ2WBShpsCxASYNlAUoaLAtQ0mBZgJIGywKUNFgWoKTBsgAlDZYFKGmwLEBJg2UBShqs6W0PcPbdt7c9hKSBOWCT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"),
        ur = n.p + "static/media/shapes6.c21585ae.png",
        jr =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAA5CAYAAACceM1ZAAAE0ElEQVR4nOWba6hUVRTHf9uytxSolVDSEy5RaISWENXeIRgYFlEUBl3qQ4pFYQ+vJTez7CE9JEIo6CUVET2Q+mLR3hJBUvTC6GGWUoF9yCgsjKx2rMsaGW8zc+fcu2fOnnP/3+bMmb3X+bPmnPVf/3Uoiujt6YV/VCGYIpcSvT0F+Ar4EFhuXNg03gibUPD8VcABwDlAiN6+Fb2d1aHYskTbGRa9PQP4rMlvNgB3GBe+qDZdxTLsnhYELwA+j96uj96enCi2LNFWhkVv5S/4fpsXsBd4GrjbuLCzWnS1T5gHbMG1/wQeBx40Lvw8uvDyw4iERW8d8M4YIt8NPAI8bFzY3cNcDaEdwjYDZyfYaxdwP7DOuLAnwXqloCVh0dtLgNcTB7ZTy5OnjAt786JjZDQlLHo7QcuITlX238qDAXjBuPBvh/ZIjlZlxZUdJEsg5cd6YItkcvS2kOooCw2DjN4eqBKomzXVB8AK48LbpTIyAppl2HVdJkswGxCptUnrvizxvwyL3h4KbAWOKzngN4BB48KnJcexHxpl2KIMyBJcDHwcvX1JuyRZYL8Mi94eAewAJucSoOIf4FkpR4wL35cZyPAMuyVDstCWktxXt0Zv10Zvp5YVyL4Mi95O1troyLKCKYA/gLXAQ8aFX7u5cX2G3d4jZAkOB+4EtkdvB6K3h3Vr46EMi95OA74DDunWxonxE3Af8IRx4a9OblTLsBU9TJbgWOAx4Jvobb8W3h2Bid6eCHwNTCz3mpNCVMog8IpxIaZcWDLsGL3ZVwl9wMtax81LeV21e5ik8NXaPZheMfIE78lDwrjw7lgXGl64HgRcLw6Q3heqho3qp36ShLA64uSxfSOwDDiqgsS9qjq1sC04UsdVyLoVuFlrnypB5NbzwErjwo4khNURN1ULRRHmB1eMOGmTPwmsbscWLDpbMV0f1/2q76qEPVrLrTEu/JKEsDripN1yL3DFaNfIGL+JJQg8alz4PQlhdcTN1BGC+RUjTSDm82qVW/tswSTZoS3lB4DzU6yXGX7QpHjGuPB30r9T9Hau/lVnV4GpYRA1tLjofFhLqOMj2XYpULXRJzGF0mZYPdQIXgjcVYID1Ql448KFHX/CRW8nantZypFppVxqGswxLmzuWkmg9t0SYCBT36AVNhgXZM6k+zVU9HaSmi1LgUnd3n8UkH7aDOPCFsosOqO3U1Tc35B5t/dF48LC2ofSq3T1E+TBcG2GXV8R6H3GhW21A9nIGpVbg9rIzCUuqfIX1R/ITgdGb09TB2hByaHIjO6pxoUf6w9mK5z1hQnRcnNLCkHE99LhB7PvNERvL9DZ2G6OQImzfkKj6e+eac1Eb+erCJ7Zhe3kHYOVjb5IqiU7CePCm8BZwFXAtg5utUvnNhqiJ5t/agteo+XI8YmXX2ZcWNPsy57ulkZvxV9YLNYZcHSCJWVG46RW7xFUor2sg4A3AbeNcQJpiXFhXasTKtWPV1twQOVWUVtwu1b1Lad/qmZgDEHl1nK1BduVW/3GhedGOqmShNWgtuAqlVutbMEv5SWOdt5IqTRhNURv+5S4y5uccplx4bV21hoXhNUQvT1T5dZFdYc/Ama1O0c2rgirIXp7rhJ3HjDPuLAxj8gyR/R2TqEQgf8A6dhP59fT2RcAAAAASUVORK5CYII=",
        br =
          "data:image/png;base64,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",
        pr = n.p + "static/media/shapes10.b075f436.png",
        Lr = n.p + "static/media/shapes11.d56c65ea.png",
        mr =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADfCAYAAADvAd+ZAAAYnUlEQVR4nO2defBVxZXHj+OK4samIOKGC4oLSEAWQaBd2IQklVRNMslMUu1UYszUTCZTMT1JVVJJtdmmnBpTsSbpSjJJjZlJaqKgCGILiIIsgqIiKqAIgogiiqIRUabanEca/fF77517u2/3/Z1P1ftDpO899/K+r/t+b59zDoEaYpQ9HQDuAYA78LNMavF+Ha+VyZu6CvAfAeBm74+2AcAsALgdABZILd6pMDyG2U9dBXg/AIw9yP/eBQBzcGacI7V4PXJ4DLOf2gnQKNsLAF4CgL9q4a/vcTMiinGW1GJrhBAZZj91FOAXAOCXhKH7AGA5ivF2qcXTAcJjmAOoowBnAsC1JRzqKc/EWS612FfCMRnmAGolQKPsMQDwCgAcVfKhXwSAmShGZ+LsKfn4TBelbgL8BAD8X+DTOBNntmfivBH4fEyNqZsAfwMAn4t4SjcT3ueZONsinpupAbURoFH2MADYDgAnVhSCe0Zc2nhulFo8U1EcTEbUSYATAcAmEEqDJz0T52E2cZiOqJMAbwGAGxIIpSO2eCbOQqnFu+mFyFRBLQRolHXX8TwAnJpAOM14HU0cty1urtTizbTDZUJSFwFe6pZ5CYTSLu/gsrlh4mzPK3ymKHUR4PcA4FsJhFIE94y4xDNx1ud7KUyr1EWAjwPA4ARCKZM1uEx1glzFJk49yV6ARtmBALAugVBCstkzcRaxiVMf6iDArwPAjwlDVwPAlwFgBn7OCRBeCHZ6O3HuYRMnb+ogwAcBYDRh6HekFt/1jjMIAD6OYvxYuVEG408AcC+K8U6pxcuZxM0gWQvQKNsHs90p13GJ1GL1QY57CgBMRzGOB4DDikcbHFdyY7Fn4jybQcxdntwFeB0A/JwwdKPU4owWz3E8AExBMU4CgO6E81XB415u4yOZxNzlyF2A7lloMmHozVKLrxHOdyQACBSjyznsQzh3FWzytsU5E+e9TOKuPdkK0CjrZqIdAHAEYfg4qcWigud3JS9GeibOwCLHi4gzce70TJy3Mom7luQswE8BwO8JQ13C7sllzwJG2QtQiM7IubTMYwfEmTjz8H2jM3F2ZBJ3bchZgLcBwF8Thv5KavHFACHtxyh7qmfijMvIxHnAM3E2JhBT7clSgEbZw3EmO44wfLrUYlaAsDrEKHuiZ+JcAwDHxDp3QVZ7Ynw0k5izI1cBXoWVr9tlNwD0llq8XVHcR6GJ45ap01wsVcRBYKNn4jzIJk555CrAn+Eulnb5o9Tik9VG/2eMsocCwCjPxDkzhbhaYIdn4syr6sesLmQnQMz9cwmufQnDPy+1+G2AsApjlL3QE+PQFGPsgLe9HhzOxHk1uQgTJ0cBjsDaK+2yFwBOyuFLYpQd4InRldg/NIGwmuGWpYu858ZNaYebBjkK8CYAuJEwdL7UYmKAkIJilO0BAFNRjFcDwNGZhP6IJ8bHEognSXIU4FoAOI8w9KtSi58GCCkaRtluAHCltxOnZyahP+flNi5hE+cvZCVAo+y5WDKewgCpxeZqr6A80MQZ4y1VT88k9Jc9E8d2dRMnNwG6pedNhKErpRbDAoSUDEbZiz0xXpJJ2Ls9E2d2VzRxchOgM19GEIZ+W2rx/QAhJYlR9jRvW9zlLbZqq5q9aOK4perMOq1WOiMbARpl+wHAC8SYB0st1gQIK3mMsj3xpX/DxCm7cU0oVnomzhP1+lf5CzkJ8EsAcCth6HqpxdkBQsoONHGuRjE6UfbI5Bo2eDtxltSp339OApyLX552+YnU4l+qjT490MQZ6z03Dsgk9O3Y779h4mTd7z8LAWJWunPPDicMHyO1WBwgrFphlB3iifGiTK5tt9fv35k4ryUQU1vkIkCXdnQbYaj7texbpyVLDIyyZ3gmzuiMTJyF3nPjlgRiakouAvxfAPg0YegvpBZ/HyCkLoNRtrdn4lyZkYmzwhPjkwnE0yHJCxDrsLjl57GE4VOkFncHCKtLgi3AGybO1Ap7MbbLOs/EWZrSiigHAU7GQrTt4grW9sr9IT1VsCHqWFymTs+kM5XjJa/K+Pyqvx85CNCVHbyOMPQPUgvKspVpE0wRG+qZOLn06XjDM3Hullq8HjuApAWIlce2ujQiwvDPSC1+FyAspglG2bM8MY7KxMRx/TYWoBjdTpytMU6augBHYbXndnkXS09E/0VjDgSrl1+LYnTlOI7M5BYt80wcagJAU1IX4I8AgPIS3ZVKoLy0ZwKCtVyvQTG6QlUnZHK/n/ZMnOVlmjipC3AdseDt9VILyrY1JhJY2W4citGZOP0zufcvejtxnImzp8jBkhUgFrqlbMJ1jSz7x1rDM8VBE2eY99x4fia3dZczb1CMc6QWu9o9QMoC/FcAoKQQLZNaXBYgJCYSRtmzPTGOzGTDiJsJ53v9/l9sZVDKAlyBv4rt8k2pxQ+qjZ4pC6PsSWjiuPeNE4m9QGKzD02c29HEeeZg509SgFjanVpVa1BI14qpDqPssdgirmHiUCqjV8Faz8RZ4ff7T1WANwDALYShT0stKAWbmMxAE2e8Z+L0y+QKtno7cRak2jRkBnHcHSXHwSSK1OJd7Ow0zyj7FQAY7j03pvwj3A+rurvPj5ObAbGZyXZiR6HLpBbLAoTFZARWz2uIcUTCXsfYFGfAqUTxOddpeYB4mMyQWrgX5z90H6NsX28nzoSETByX4bMkRQFSl58z/YdbhoE/i9H9MP+n+2BlhYaJM6liE8f10ngvKQF6RYMo8PMf0ym4N/h/3AfzTBsmzrXEZj9FcK8okuvcKogNLHfhS1CGaQnMA3SFvuYaZa/3TBz3vvGcwHfR1bKxkKAAqcvP2eiKMUzb4Obqpfi50Sg7yDNxhge4o3OlFq4/fzoCxDJ504jDefnJlIbUYi2+PL8JC0I3+v2PJ1bm+zD7v68pzYCjiS2b92BWM8OUDm7qd5k1t6KJMxmXqc7E6U44n6vedlfjP1ISIHX56YqzvlFyLAzzEdDEcVUWfmeUdfuNv0G4Swv9+qUplQrg3S9MTnycGOsB39ckBGiUdZWYzyAM3YfJkQwTDTRpqE7pTP8/UpkBqb8mD0ktXio5FoZpBnW15jIhXvD/IBUBUi/o9pLjYJhWKO1xqXIBYjNJakdXfv5jooKvJajvBtMTYIFfkzVSi/Ulx8IwzaB+X9d11KMiBQGW4iYxTCRKfVyqVIDYPvly4nAWIBMVfBE/nnjODr+vVc+A04gxbMYe4gwTkynEzSvbsEjTR6hagJz7x+QE9XFp1sGqaVcmQKPs0Zz7x+QC5g9OIoZ70O9rlTPg1cRuqzsBYFGAeBimM4LkqlYpQM79Y3KC+n2d01kT0EoEWDD3j3e/MFHBPpXTiefs9HGpqhlwLLG/uMsividAPAzTGaNC5apWJUCqm3Sv1GJ3ybEwTDOoy88FzZrEViVAzv1jciJYskB0ARplXTP/UwlD3+fcPyY2RtnBAHAW4bQt5apWMQNSf00elFq8UnIsDNMM6uPSslZ6BFYhQN58zeRE0MelqAI0yrqpfDBxOAuQiYpRdgAADCWes6XXZbFnQOqvyWNSi+dKjoVhmkF997e2s664PrkIkF++M1UQ3K2PJkCjbB98oUmBl59MVIyyPQBgHPGc6QkQO9BQzve81OLRAPEwTGe4PpWHEu6Qq6S9otW/HFOA/PKdyQny97WdXNUoAjTKdsd0Dgr8/MdEJWafylgz4DUAcCRh3A73Aj5APAzTGVcBwNGEO+T2fS5sZ0AsAVKn8w/a+JYcC8M0I1quanABGmUPxwdaCvz8x0Qldq5qjBnwCgA4njDuLQCYFyAehumMMQDQk3CHGi2v2yKGAKnT+T1Si7dLjoVhmkHdq+z6VL7Z7qCgAjTKHhIqlZ9hAhH1dVnoGfBjAHAKYdx7fhtfhomBUdY1CTqNcCpyrmpoAVJ/TRZJLV4tORaGaQb1+7pEarGdMjBVAfLLd6YKou/WCiZAo6xr4TuIOHxmC3+HYUrDKOtapF9MPF56AizgJq2SWmwqORaGaQZ19ntCarGBendDCpA3XzM5Ucn3NYgAjbJ9AWAEcTgLkImKUbYXvoCnUMivCDUDuty/QwjjNkgtHg8QD8N0BjVXdbPUYlWROxtKgLz8ZHKisu9r6QLENr4TiMNZgExUjLKu5diVxHOmJ0BsYngEYdzL7oVmgHgYpjOK9Km8v+idDSHAIm2nO2zjyzABob4uKyVXtVQBhmrjyzAhwFzVKVV+X8ueAccDwHGEca7lmC05FoZpRuV9KssWIHU677SNL8MEokiu6ltlhFSaALGN77XE4bz8ZKKSSq5qmTOg2/lyMmHcXs79YyqgSJ/KO8sKt0wBBmvjyzABoD4uPSC12FFWOGUKkPv+MTmRRK5qKQI0yp4PAGcTh3PuHxMVo+xAALiAeM5SJ4yyZkDqr8lyqcWWkmJgmFahfl8flVo8X+ZdrlqAvPxkqiCZx6XCAjTK9sfqZxRYgExUjLInAcBI4jnTE2CBdynPSC3WlnB+hmkHaq7qc1KL1WXf6TIEyJXPmJxI6nGpkACNsidg7wcKvPxkomKUPbZAn8r0BIg7yQ8jjHvROaAFz80w7ULNVX0FABaHuNtFBUh1k2Zx7h9TAdTl56xQfSrJAjTKHoWdbynw8pOJSgq5fx1RZAZ0a+ljCON2AcD8AudlGApJ5qoWESB1Or9barGnwHkZhgL1cSlon0qSALGNL+f+MVmQcp9K6gw4CgB6E8a5mW8O8ZwMQ2U4APQljA2eq0oVIHX5OV9qsYs4lmGoUL+v90stdoa867EFyLtfmCpINle1bQEaZS8EgDMJ59pHbePLMFSMsucBwLnE4cFzVSkzIPXXZKnUYhtxLMNQoa7WVkotNoe+6xQBcu4fkxNJPy61JUCj7AAAGEI8Fz//MVExyvZDB5RClAmj3RmQ+mvypNRiHXEsw1CZTsz9Wy+1WBPjrscSIC8/mSpI/vvasgCNsj0AYBzxPCxAJirYp3I88ZzRHpfamQGnEU2bFwDgYcI4hinCZAA4nDD+JefYx7rz7QiqSN+/fcSxDEOlSO5ftFzVlgRolO2GnUQp8PKTiQr2qZxMPGfU72urM6ATXzfC8V8ro40vw7TJRADoTrhpbwDAfTFvdqsCpE7ns6UW7xLHMgwV6vc1ep/KpgLE3L9pxOPzy3cmKrn1qWxlBrwcAHoQjl1aG1+GaQNX9fokwg1zK7W7Y9/oVgRI3XxtpRZvEscyDJWs+lS2IkDe/cLkRFa5qp0K0CjrNl4PIBy31Da+DNMKRlnX828g4WZVlqvabAak/posllpsJ45lGCrUxyXXp3JrFXc9lAB5+clUQXbf14MK0Cjryk5cRDwuC5CJilH2VAC4lHjO9ARY4NfkcanFs8SxDEOFWvfzKanFU1Xd9RAC5JfvTBUkW/msMzoUoFHWFd0dTTwmLz+ZqGCu6ljiOdMTIG7loeT+bZJaPFIwJoZpl2z7VB5MZOx+MjlB/r5Wnav6EQEaZbun1saXYQ5G7rmqHc2A7mKOIhzrVQBYVEJMDNMORfpULqj6TnckQOp0fmeoNr4M0wlU9zOJXNUDBIhtfKcSj8XLTyYqdchV/fAM6MoOnkA81qvYCJFhYuFelfUinCuZPpUftm6py0/A2i9bjLJ34Gx4P5ejYAJD/b4mk6u6X4AF2/g2OAUAvoKf14yys1GMczk5lwlAlrtffPwZcBgA9C/x2G4p+1n8vGOUtXjhszhViSmKUfZiADidcJik+lT6Aiyy/GzGkbhbwX1+bpRdjGJ0L0I3BDwvU1+o39clUouXUrkrsQTo45a6Y/DzE6PsEw0xAsAqrqLNtEgtdmt94FoaZc8GgGeqDwc2Y1vghomzN4GYmMQwyrql53PEqM6WWqxP5YoaM2Cs2a8ZLqnyBvzsNMrehWK8R2qxO5EYmeqhfl/XpCQ+8ARIdZNCciIAfA4/fzLK3otidDtuXk4wXiYetclVPcQo60ToXhdMIKZ0xMZVXGuYOLdLLahLESZDjLI9AWA7MV1umNRiZUpXvX/nilH2BHQp3a/LJOIG1yp4zHNUORex5hhl/w4AfkW4SucvnJaaydfh1jFs7yRQjC45t0/80Ehs8hzVRbw5vH4YZWcSez/8VGrx1dRuSNO9m9jsYiQ+JzpBnhUntMLsxBeuDRPn7UziZg6CUfZoANhBTJcTUouorcdaoe3N00bZwSjEGQXKwMWm0SimYeLsyCRuxsMo6yaBPxLuifsx7pPia61C2QtYi3E6inFcRibOA56J83wCMTEtYJT9LwD4POFe/VZqQRkXnNLSh7AyVcPEuTojE+dRz8RZnUA8TAegW78dX0+1yyelFpSZMzhB8vewTkfDxHEJk73TuuyDstEzcR5kEycdjLITiO2j3eNHr1Q3cgRPoMWs5VEoRreGPyP0OUtiB3Z4ci9v72UTp1qMsv8BABQX0z3zUzvmBid6BrtR9iLPxBkS/5JJvOWZOHdJLV7NJO7aYJTdhFsV2+WLUgvKe8MoVFpCwig7wBOjq2x8aJXxtMh7WP2t8dy4KYOYs8Yo69z2hwnX4Ay3k6QWr6R6/cnUcEETZyouU52J0y2BsFphlSfGx9MPNz+Mst8DgG8RAnebMcalfMFJFlFCE+cqz8TpmUBYrfCsZ+IsYROnHIyy7odtMOFgX5Na3JziNTVIvooZmjhjvKUqpQxBFbyMJs4dWASITRwCRlm384qaQnSG1GJjpRfQhOzKCBplL/HEeHECIbWCs8DnohhdQdid6YecBkbZf3aVEwjBrJZaXJL69WVdxxMzoxtivJyYohKbvVjC0YlxptRicwYxV4ZR9gFcAbXLd6UW30n9+mpTSBfzxKZ5O3EoG3arYKW3LW5NJjFHwSjrsnC2Eb+nQ6QWj6Z+jbWsZI275q/2TBzK9qUqWO+ZOA9JLd7PJO4gGGUlAPyCcOyNUossNnzUvpQ8mjhjvaXqgATCaoXtXjqVM3HeST/kcsGaQFMIB/13qcU/pXxtDbpcLwej7BAvt/HCBEJqBWfi3O2ZOK+nH3IxsE/lK1hTtl2ukFrcn8N1dulmKkbZM72ZcXRGJs4Cz8TZkkBMpWOU/RQA/J5w3B24+yWLd7DczQgxyvb2TJwrMzJxVng7cZ5MIJ5SMMr+NwB8hnCsX0stvpDgJXUIC7ADjLIul/EaFOOUjEycZzwTZ1muJg72qXQbGY4nDJ8utUim90MzWIBNwC9Dw8SZTtyRXwXbPBNnfk4mjlHWrUDmEYa+hbl/2ew6YgG2AbZwG+o9N1L2J1bBG9iQ0uU2zkndxDHK/gwAvkwY6t6lfiJASMFgARbAKDvQE+OoTO7nHs/Eca3itiYQ037wR+4FAOhHGP63UovfBAotCCzAksBdG9eiGAXRPo+NK1K73DNxnkrgPg53z6+EoXvR/cwqWZoFGAB8h9UwcaYSzYQqeLqxLc4Js4oq0kZZDQDfJAx1z7kTA4QUFBZgYNDEucIzcU7JJPQXvVZxC6QWe2Kc1CjrXqUMIgz9B6nFLQFCCgoLMCL4fDPMe248P5PQd3k7cZyJsyvESYyy5wIAdRl8Wo7lQViAFYKNURvb4i7LyMS5zzNxtpV1YKPsNwDgB4ShrrNyLlXaD4AFmAhG2ZM9E8c9yxyRQdjuGXGpZ+IU6rJslH0If4ja5dtSi++XckWRYQEmiFH2WGwR19iJc1wmoa/1TJyH2zFxjLJ9AWAL8Tt5odTiCcK4ymEBJg6aOBM8E6dvJqFv8UychVKLdzv7y0bZLwHArYTzbJBaDKSHWS0swIxAE2e4Z+Kcl0n0r2MX5oaJ8+aH/4JRdi4mUbfLv0ktvh79ikqCBZgx6Bo2Sv4Pz8jEsbhMdSbOdqPs8ZiATHnuHSO1WBwgziiwAGuCUbafZ+KMz8jEWQIArs//3xDGO9H2zbl0BwuwhuCM0jBxJmVk4rSLkVpcl1fIB8ICrDnY7388LlPdDHlyja54qtRidgJxkGEBdiGw3/8Iz8Q5J+Ord3VyeuZerIoF2IUxyg7yxDg8szvxB6nFpxOIoxAsQOYD0MSZ4Zk4qff7/6zU4rYE4igEC5D5CGjiTPFMnO6J3aW9WHoi+/KMLECmU9DEmejtxOmTwB1zLcOvSiCOwrAAmZZBE2ekt1StagvY9VILyra15GABMmSMshd4YhwW8U6eklotGyosQKYUjLL9cYnq3jeOC2jiuFIZI+ryr8YCZErHKHuiZ+K42jjHlHgOJbW4qS7/aixAJihG2aOwStwM3InTu+D5BqVQva0sWIBMNNDEGe09N57Z5rmfllrkkoLVEixApjKMshd6YhzaQhw/lFrcWKd/MRYgkwRG2QFo4szAXhwdmTgjpRZL6/QvxgJkksMo2wMLGjf6/R+NdUr7161tNwuQSRqjbDfs13hCbn0fmgIA/w/hrzF1/vpb1AAAAABJRU5ErkJggg==",
        hr = n.p + "static/media/TaskImage.4856ef8a.png",
        xr = function () {
          return Object(r.jsxs)("svg", {
            width: "672",
            height: "443",
            viewBox: "0 0 672 443",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              Object(r.jsx)("path", {
                d:
                  "M607.696 188.527C630.729 144.091 654.586 78.2602 587.783 25.7421C520.976 -26.7804 455 12.7494 423.964 41.3308C406.057 57.8209 389.755 76.9517 375.48 93.7041C367.157 103.471 359.524 112.429 352.662 119.584C306.421 167.806 259.941 180.637 195.118 198.531C169.85 205.507 141.794 213.252 109.88 224.162C23.0318 253.854 10.5359 281.797 20.5929 307.766C23.814 306.415 27.1899 305.081 30.7149 303.766C89.3652 281.891 189.323 265.39 305.315 265.39C453.421 265.39 607.454 318.909 665.086 361.779C656.3 344.113 633.503 325.174 612.635 307.837C595.646 293.723 579.935 280.671 574.105 270.234C562.434 249.342 570.213 239.895 583.388 223.892C590.637 215.087 599.52 204.298 607.696 188.527Z",
                fill: "#57DFD3",
              }),
              Object(r.jsx)("path", {
                d:
                  "M608.553 430.253L607.767 430.274L604.312 430.346C489.114 432.572 256.077 417.861 108.243 398.773C108.241 398.773 108.238 398.772 108.236 398.771L108.217 398.77C108.226 398.771 108.234 398.772 108.243 398.773C167.58 422.713 251.791 438.869 338.216 439.116C409.718 439.32 458.832 440.471 493.971 441.295C567.749 443.024 579.916 443.31 608.338 430.352L608.553 430.253Z",
                fill: "#57DFD3",
              }),
              Object(r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d:
                  "M312.181 285.451L315.007 285.633L310.823 352.726L308.808 355.262L305.708 353.135L312.181 285.451Z",
                fill: "white",
              }),
              Object(r.jsx)("circle", {
                cx: "525.274",
                cy: "121.584",
                r: "78.2548",
                fill: "white",
              }),
              Object(r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d:
                  "M320.42 197.84C320.42 197.84 320.246 193.351 325.597 193.086C330.943 192.821 374.618 197.84 374.618 197.84C374.618 197.84 384.016 199.194 382.464 209.754C380.908 220.315 375.235 244.652 375.235 244.652C375.235 244.652 375.901 248.815 369.077 247.71C362.253 246.605 341.992 241.337 320.42 244.681C320.42 244.681 316.857 245.099 316.96 260.249L315.007 259.889C315.007 259.889 317.858 202.09 320.42 197.84Z",
                fill: "white",
              }),
              Object(r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d:
                  "M352.475 162.107C352.897 161.656 352.475 162.107 352.475 162.107C350.761 163.945 349.305 165.579 348.365 166.759C343.884 172.395 337.879 177.737 335.454 181.822C335.454 181.822 324.72 186.713 320.42 181.627C320.42 181.627 330.281 168.695 338.102 162.918C338.102 162.918 345.7 159.177 352.475 162.107ZM360.809 153.483L352.872 151.178C352.872 151.178 360.921 146.163 365.382 144.263L369.077 145.265C369.077 145.265 365.257 148.997 360.809 153.483C360.697 153.603 360.809 153.483 360.809 153.483Z",
                fill: "white",
              }),
              Object(r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d:
                  "M229.027 368.608C229.027 368.608 215.065 365.513 211.742 349.547C211.742 349.547 214.287 344.942 224.264 334.277C224.264 334.277 236.878 326.179 234.8 313.342C234.8 313.342 221.041 309.775 225.642 288.869L228.576 283.51C228.576 283.51 225.328 260.299 228.08 246.556C228.08 246.556 225.535 229.026 236.137 227.768C236.137 227.768 240.598 227.114 241.09 225.368C241.09 225.368 234.56 207.28 253.679 198.511C272.793 189.746 287.666 204.847 287.066 220.94C287.066 220.94 285.411 231.956 278.665 236.885C278.665 236.885 293.153 245.947 301.219 257.861C301.219 257.861 310.236 267.214 314.2 265.637C314.2 265.637 326.288 265.372 324.641 269.597C322.998 273.818 321.839 279.868 304.14 280.787C304.14 280.787 287.029 278.594 282.568 278.469L279.431 277.373C279.431 277.373 283.292 285.562 279.092 293.371C274.891 301.176 271.837 303.878 272.288 305.393L281.591 348.894C281.591 348.894 280.921 356.239 289.143 354.952C297.366 353.661 295.185 358.68 293.546 359.885C291.908 361.093 278.359 372.68 266.987 357.902C255.616 343.121 253.944 340.083 253.944 340.083L231.204 356.003C231.204 356.003 229.437 357.72 230.724 361.718C230.724 361.718 233.182 367.636 229.027 368.608Z",
                fill: "white",
              }),
              Object(r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d:
                  "M437.047 127.922C432.993 36.87 526.715 41.301 526.915 41.3306C638.815 57.8835 612.181 199.839 525.462 204.331C525.402 204.334 440.545 206.492 437.047 127.922ZM440.261 127.814C437.82 72.9712 473.963 54.9597 500.212 49.1003C500.3 49.1935 500.416 49.2935 500.551 49.4005C502.355 50.8365 504.142 52.1582 506.568 52.625C507.99 52.8986 509.367 53.3964 510.745 53.8947L510.745 53.8949C511.808 54.2792 512.872 54.6638 513.958 54.9462C515.397 55.3199 516.893 55.4869 518.384 55.6534C518.815 55.7014 519.245 55.7494 519.673 55.8024C520.069 55.8512 520.471 55.8537 520.874 55.8562C521.38 55.8593 521.886 55.8624 522.375 55.9584C523.022 56.0853 523.659 56.2673 524.295 56.4491C525.084 56.6744 525.871 56.8994 526.675 57.019C527.246 57.104 527.838 57.0747 528.428 57.0455C529.134 57.0106 529.836 56.9759 530.495 57.1373C532.224 57.5616 533.903 58.2132 535.575 58.8624C535.811 58.9542 536.048 59.0459 536.284 59.1369L536.661 59.2822L536.661 59.2824C538.433 59.9652 540.215 60.6521 541.9 61.5168C543.518 62.3474 545.028 62.1847 545.889 60.7322C547.201 58.5232 548.579 56.4641 551.5 56.1951C552.066 56.1428 552.616 55.9018 553.165 55.6612C553.415 55.5516 553.666 55.4421 553.917 55.3505L553.621 55.234C552.896 54.949 552.172 54.6642 551.451 54.3714C551.437 54.3662 551.44 54.3302 551.443 54.2907C551.446 54.2455 551.45 54.1955 551.43 54.1818C549.688 52.9089 546.799 53.9509 545.823 55.8247C545.223 56.9784 544.064 58.1231 542.88 58.625C541.67 59.1377 540.651 58.5017 539.574 57.8291L539.573 57.8288C539.128 57.5513 538.674 57.2677 538.192 57.0558C536.127 56.4388 534.265 55.8284 532.411 55.2023C531.828 55.006 531.25 54.796 530.672 54.586L530.67 54.5854L530.669 54.5852C529.436 54.1373 528.203 53.6897 526.936 53.3757C526.301 53.218 525.628 53.2293 524.952 53.2407C524.425 53.2496 523.896 53.2585 523.381 53.1874C522.367 53.0467 521.358 52.8594 520.349 52.6721L520.348 52.672C519.229 52.4643 518.11 52.2566 516.983 52.1123C516.236 52.0168 515.471 51.9957 514.709 51.9747C513.469 51.9406 512.235 51.9066 511.095 51.5532C510.677 51.4237 510.273 51.2746 509.87 51.1262C508.816 50.7373 507.772 50.3526 506.539 50.335C505.446 50.3192 504.171 49.5677 503.327 48.7744C503.219 48.6723 503.114 48.5855 503.012 48.5123C516.303 45.8958 526.423 46.3453 526.486 46.3551C627.661 62.0178 606.834 196.058 525.462 200.273C525.406 200.275 443.544 201.539 440.261 127.814ZM212.011 354.725L212.097 354.974C212.623 356.513 213.519 357.925 214.442 359.38C214.803 359.947 215.167 360.521 215.515 361.111C215.739 361.385 215.942 361.654 216.138 361.913L216.139 361.914L216.139 361.914L216.139 361.915L216.14 361.915L216.14 361.915L216.14 361.916C216.493 362.383 216.823 362.819 217.21 363.197C219.676 365.601 222.37 367.707 225.573 369.048C225.788 369.139 226.064 369.086 226.339 369.032C226.616 368.979 226.892 368.926 227.104 369.019C229.979 370.289 232.833 368.659 232.718 365.489C232.679 364.4 232.353 363.323 232.025 362.242C231.796 361.487 231.566 360.73 231.433 359.965C231.295 359.17 231.436 358.152 231.845 357.473C232.919 355.694 234.624 354.61 236.421 353.555C237.269 353.057 237.99 352.351 238.714 351.641L238.714 351.641L238.714 351.641L238.714 351.641L238.714 351.641L238.715 351.64L238.715 351.64L238.716 351.64C239.279 351.087 239.845 350.533 240.474 350.074C241.472 349.348 242.534 348.71 243.596 348.072C244.373 347.604 245.15 347.137 245.902 346.635C246.421 346.289 246.907 345.903 247.393 345.517C248.537 344.609 249.68 343.702 251.232 343.312C253.196 342.824 255.246 343.445 256.416 345.274C256.917 346.058 257.512 346.78 258.107 347.503C258.559 348.051 259.011 348.6 259.423 349.176C260.42 350.571 261.361 352.015 262.239 353.488C262.592 354.079 262.899 354.704 263.206 355.329L263.206 355.329C263.738 356.413 264.268 357.493 265.03 358.38C266.068 359.587 267.262 360.659 268.458 361.733C269.27 362.463 270.083 363.193 270.848 363.966C273.004 366.143 275.783 366.714 278.595 366.954C280.038 367.074 281.499 366.79 282.926 366.513L282.926 366.513C283.821 366.34 284.703 366.169 285.557 366.102C286.687 366.014 287.588 365.568 288.472 365.13C289.295 364.722 290.105 364.321 291.072 364.223C291.978 364.131 292.815 363.364 293.652 362.597C294.026 362.254 294.4 361.911 294.78 361.628C297.179 359.845 297.258 356.534 294.858 354.85C294.613 354.679 294.25 354.666 293.891 354.653C293.517 354.639 293.147 354.626 292.915 354.436C291.069 352.926 289.092 353.327 287.072 353.766C285.285 354.15 283.112 352.172 283.137 350.356C283.147 349.616 282.95 348.869 282.755 348.132L282.755 348.132C282.704 347.941 282.654 347.751 282.608 347.562C282.494 347.097 282.352 346.635 282.209 346.174L282.209 346.173C281.952 345.345 281.697 344.519 281.613 343.677C281.541 342.937 281.361 342.224 281.181 341.511C280.944 340.575 280.708 339.638 280.713 338.64C280.715 338.042 280.484 337.449 280.25 336.85C280.078 336.41 279.905 335.967 279.823 335.516C279.705 334.865 279.658 334.202 279.611 333.539V333.539V333.539C279.561 332.849 279.512 332.16 279.383 331.485C279.21 330.574 278.981 329.674 278.753 328.774L278.753 328.773L278.752 328.772C278.493 327.752 278.235 326.733 278.057 325.7C277.924 324.935 277.924 324.148 277.924 323.359C277.923 322.848 277.923 322.335 277.887 321.827C277.865 321.528 277.864 321.205 277.863 320.878C277.86 319.958 277.857 319.01 277.395 318.487C276.827 317.848 276.851 317.182 276.875 316.503C276.896 315.938 276.917 315.363 276.596 314.788C275.984 313.686 275.948 312.255 275.913 310.835V310.834C275.899 310.303 275.886 309.773 275.843 309.263C275.813 308.911 275.855 308.516 275.897 308.127V308.126V308.126V308.126V308.126V308.125V308.125V308.125V308.125V308.124V308.124V308.124V308.123V308.123V308.123V308.123V308.122V308.122V308.122C275.968 307.457 276.037 306.811 275.742 306.433C274.657 305.052 275.282 303.681 275.744 302.666C275.771 302.608 275.797 302.551 275.822 302.494C276.577 300.816 277.475 299.202 278.372 297.589L278.373 297.588C279.335 295.858 280.296 294.13 281.081 292.324C281.812 290.642 282.045 288.722 282.274 286.838C282.32 286.461 282.366 286.084 282.415 285.712C282.504 285.039 282.479 284.35 282.454 283.661V283.661V283.66V283.66V283.66V283.66V283.66V283.659V283.659V283.659V283.659V283.658V283.658V283.658V283.658V283.658V283.657V283.657V283.657V283.657V283.656V283.656C282.426 282.89 282.399 282.125 282.529 281.386C282.622 280.862 283.342 280.412 283.952 280.03C284.044 279.973 284.133 279.917 284.218 279.863C284.279 279.823 284.419 279.945 284.587 280.092C284.781 280.263 285.015 280.467 285.21 280.492C285.764 280.563 286.37 280.557 286.971 280.551C288.143 280.54 289.299 280.528 290.034 281.086C291.35 282.086 292.733 282.033 294.052 281.982C294.597 281.962 295.131 281.941 295.646 281.996C298.532 282.303 301.47 282.121 304.408 281.94L304.408 281.94L304.409 281.94L304.41 281.94L304.41 281.94L304.411 281.94L304.411 281.94L304.412 281.94L304.413 281.94L304.413 281.94L304.414 281.94L304.415 281.94L304.415 281.94L304.416 281.94L304.417 281.94L304.417 281.939L304.418 281.939L304.418 281.939L304.419 281.939C305.57 281.868 306.721 281.797 307.868 281.756C308.628 281.729 309.393 281.699 310.141 281.578C313.865 280.977 317.526 280.108 320.472 277.59C321.382 276.813 322.145 275.864 322.908 274.915C323.228 274.518 323.547 274.121 323.877 273.737C324.756 272.714 325.085 271.549 325.46 270.217C326.153 267.752 324.613 264.66 321.946 264.859C320.85 264.941 320.108 264.597 319.228 264.175C318.702 263.921 317.992 263.918 317.386 263.985C316.966 264.033 316.543 264.113 316.12 264.194C314.409 264.52 312.715 264.843 311.341 262.921C311.054 262.52 310.488 262.302 309.943 262.093C309.783 262.032 309.625 261.971 309.477 261.907C309.17 261.774 308.836 261.676 308.504 261.579C307.91 261.406 307.321 261.234 306.901 260.864C305.174 259.345 303.566 257.679 302.011 255.98C301.216 255.112 300.463 254.205 299.71 253.298L299.709 253.298L299.709 253.297L299.709 253.297L299.709 253.297L299.709 253.297L299.708 253.297L299.708 253.296L299.708 253.296L299.708 253.296L299.708 253.296L299.708 253.296L299.707 253.296L299.707 253.295L299.707 253.295L299.707 253.295L299.707 253.295L299.706 253.295L299.706 253.294L299.706 253.294L299.706 253.294L299.706 253.294C298.927 252.357 298.149 251.419 297.325 250.525C295.698 248.76 293.995 247.058 292.23 245.432C290.78 244.097 289.235 242.854 287.651 241.68C286.499 240.828 285.259 240.09 284.023 239.354L283.67 239.145C282.033 238.168 281.898 236.45 281.862 234.909C281.854 234.548 282.496 234.172 283.138 233.796C283.434 233.623 283.73 233.449 283.964 233.277C284.018 233.236 284.077 233.188 284.108 233.131C284.381 232.635 284.655 232.141 284.929 231.646C285.738 230.188 286.547 228.73 287.313 227.249C287.511 226.865 287.59 226.417 287.668 225.971V225.971L287.668 225.971L287.668 225.97C287.697 225.806 287.725 225.641 287.76 225.481C287.882 224.914 288.024 224.347 288.166 223.781C288.539 222.295 288.911 220.809 288.927 219.32C288.934 218.588 288.785 217.597 288.641 216.736C288.368 215.104 288.08 213.464 287.633 211.875C287.472 211.304 287.196 210.768 286.918 210.231C286.707 209.822 286.495 209.412 286.334 208.985C286.136 208.463 285.994 207.9 285.852 207.34L285.852 207.339C285.588 206.293 285.326 205.254 284.708 204.497C284.148 203.809 283.679 203.04 283.208 202.27L283.208 202.269L283.208 202.269C282.114 200.476 281.014 198.674 278.743 197.865C277.827 197.538 276.958 197.036 276.095 196.536C274.941 195.868 273.795 195.206 272.558 194.976C269.366 194.382 266.024 194.436 262.751 194.491C260.172 194.535 257.493 194.646 255.061 195.39C253.308 195.926 251.537 196.791 249.859 197.916C249.553 198.121 249.241 198.325 248.928 198.529C247.326 199.575 245.689 200.644 244.641 202.05C244.237 202.592 243.771 203.111 243.3 203.635C241.88 205.215 240.422 206.838 240.519 209.27C238.923 210.179 238.878 211.741 238.836 213.19C238.823 213.643 238.81 214.085 238.75 214.492L238.743 214.54C238.495 216.232 238.228 218.045 238.616 220.043C239.091 222.492 239.629 224.689 240.907 226.791C241.663 228.035 242.287 229.357 240.191 230.048C239.898 230.145 239.537 230.399 239.438 230.665C238.94 232.023 238.265 233.253 236.828 233.738C235.508 234.182 235.607 235.106 235.704 236.013C235.729 236.246 235.754 236.477 235.754 236.698C235.755 236.816 236.859 237.197 237.127 237.005C237.945 236.418 238.736 235.792 239.527 235.166L239.527 235.166L239.528 235.166L239.528 235.165L239.529 235.165L239.529 235.164L239.529 235.164L239.53 235.164C240.614 234.305 241.698 233.447 242.851 232.692C243.546 232.237 244.773 232.173 245.6 232.432C246.497 232.713 247.339 233.161 248.183 233.61L248.183 233.61C248.696 233.883 249.211 234.156 249.738 234.393C251.096 235.002 252.469 235.58 253.841 236.158L253.841 236.158C254.559 236.461 255.276 236.763 255.991 237.07C256.925 237.47 257.096 237.995 256.226 238.671C255.779 239.019 255.33 239.365 254.881 239.711L254.872 239.718L254.872 239.718L254.871 239.719L254.871 239.719L254.871 239.719L254.87 239.72L254.87 239.72L254.869 239.72L254.869 239.721L254.869 239.721L254.868 239.721L254.868 239.722L254.867 239.722L254.867 239.722L254.866 239.723L254.866 239.723L254.866 239.723L254.865 239.724L254.865 239.724L254.864 239.724L254.864 239.725C253.696 240.626 252.529 241.527 251.38 242.452C248.19 245.024 246.585 248.593 246.145 252.46C245.842 255.131 246.138 258.071 246.992 260.614C247.666 262.622 249.046 264.428 250.39 266.187L250.39 266.187L250.393 266.19C250.633 266.505 250.872 266.818 251.106 267.13C252.851 269.462 255.335 270.844 257.806 272.219C258.513 272.612 259.218 273.005 259.905 273.419C261.494 274.376 263.338 274.965 265.128 275.521C266.008 275.794 266.92 275.962 267.833 276.13L267.833 276.13C268.563 276.264 269.293 276.398 270.007 276.586C270.661 276.758 271.296 276.999 271.931 277.239C272.522 277.463 273.114 277.688 273.721 277.856C274.813 278.16 275.921 278.409 277.029 278.658L277.03 278.658L277.031 278.659L277.033 278.659L277.034 278.66L277.036 278.66L277.038 278.66L277.039 278.661L277.041 278.661C277.589 278.784 278.137 278.907 278.684 279.037C278.691 279.039 278.694 279.05 278.697 279.066C278.699 279.077 278.7 279.091 278.701 279.106L278.701 279.108C278.704 279.15 278.708 279.199 278.729 279.216C279.466 279.8 280.504 284.2 280.219 285.051C279.701 286.595 279.261 288.166 278.822 289.736L278.821 289.738L278.732 290.057C278.637 290.396 278.577 290.753 278.517 291.109L278.517 291.109C278.409 291.751 278.301 292.389 277.992 292.911L277.698 293.409C276.343 295.702 274.974 298.017 273.291 300.058C271.617 302.087 269.661 303.999 267.168 305.065C266.681 305.273 266.262 305.594 265.84 305.917C264.973 306.582 264.091 307.259 262.565 306.991C261.745 306.848 260.742 307.74 259.743 308.629C259.302 309.021 258.862 309.413 258.438 309.714C258.335 309.786 258.257 309.896 258.18 310.006C258.145 310.055 258.111 310.103 258.074 310.149C258.091 310.154 258.107 310.159 258.123 310.164L258.149 310.173L258.169 310.18L258.187 310.187L258.207 310.194L258.253 310.212C258.377 310.259 258.501 310.306 258.625 310.306C259.055 310.312 259.486 310.3 259.918 310.288C260.803 310.263 261.686 310.239 262.549 310.364C263.387 310.484 264.884 311.183 264.846 311.448C264.646 312.832 264.566 314.221 264.484 315.615V315.615C264.355 317.848 264.224 320.09 263.603 322.328C263.211 323.735 262.575 325 261.943 326.257C261.463 327.21 260.986 328.159 260.618 329.164C259.651 331.808 257.289 334.13 255.091 336.095C253.21 337.779 251.126 339.235 249.042 340.69C248.002 341.417 246.961 342.144 245.946 342.899C244.74 343.799 243.558 344.73 242.376 345.662C241.689 346.204 241.001 346.745 240.309 347.281L240.102 347.44C239.043 348.257 237.982 349.074 236.896 349.859C236.456 350.177 236.022 350.512 235.587 350.847C234.451 351.723 233.313 352.601 232.043 353.19C230.002 354.134 228.744 355.682 228.76 357.651C228.772 359.092 229.163 360.527 229.555 361.965L229.555 361.965C229.751 362.683 229.947 363.403 230.096 364.124C230.185 364.555 230.192 365.004 230.198 365.453C230.2 365.659 230.203 365.864 230.214 366.069C229.8 366.056 229.373 366.075 228.947 366.094C227.984 366.138 227.021 366.181 226.203 365.857C225.221 365.471 224.333 364.858 223.441 364.242C222.817 363.811 222.191 363.379 221.53 363.023C219.15 361.74 217.841 359.563 216.587 357.358C215.69 355.778 214.943 354.108 214.2 352.449L214.099 352.222C214.073 352.164 214.045 352.103 214.017 352.041C213.723 351.393 213.347 350.565 213.575 350.12C214.324 348.663 215.308 347.302 216.352 346.027C218.423 343.496 220.559 341.018 222.695 338.54L223.432 337.685C223.738 337.33 224.037 336.965 224.336 336.599C225.201 335.541 226.07 334.48 227.117 333.65C229.988 331.378 232.289 328.7 234.304 325.659C235.873 323.288 236.489 320.904 235.903 318.156C235.866 317.982 235.981 317.776 236.097 317.57C236.151 317.473 236.205 317.377 236.244 317.283C235.751 317.158 235.258 317.033 234.765 316.907L234.745 316.902L234.724 316.897C234.233 316.771 233.741 316.646 233.249 316.522C233.201 316.725 233.134 316.931 233.068 317.137C232.923 317.583 232.778 318.031 232.823 318.458C233.173 321.802 232.107 324.302 229.574 326.731C226.327 329.845 223.347 333.242 220.368 336.637L220.366 336.64C219.376 337.768 218.386 338.896 217.386 340.014C216.854 340.609 216.294 341.169 215.735 341.728C213.82 343.642 211.928 345.535 211.272 348.7C210.772 351.116 211.38 352.887 212.011 354.725ZM305.369 278.299L305.367 278.299L305.366 278.299L305.364 278.299L305.363 278.299L305.361 278.3C304.522 278.363 303.681 278.426 302.834 278.475C290.034 279.216 275.532 275.426 274.509 274.953C273.392 274.435 272.171 274.142 270.95 273.849C270.465 273.733 269.98 273.617 269.502 273.487C269.089 273.374 268.673 273.271 268.257 273.168C267.605 273.006 266.954 272.845 266.314 272.648C264.591 272.117 262.878 271.551 261.177 270.955C260.567 270.741 259.976 270.44 259.424 270.101C259.019 269.852 258.604 269.613 258.188 269.374L258.188 269.373L258.188 269.373C257.032 268.707 255.874 268.04 254.916 267.158C253.965 266.281 253.275 265.097 252.601 263.938L252.6 263.937L252.6 263.937L252.54 263.833C252.436 263.656 252.333 263.478 252.229 263.303C251.486 262.056 250.811 260.741 250.269 259.405C247.99 253.787 250.845 247.718 252.043 245.769C253.558 243.302 256.382 241.946 258.685 241.53C260.66 241.173 263.268 241.092 265.661 241.917C267.307 242.485 268.74 243.345 270.166 244.201C271.013 244.709 271.858 245.216 272.743 245.659C275.717 247.148 278.38 249.08 281.019 250.994L281.33 251.219C282.854 252.324 284.162 253.718 285.474 255.115C286.279 255.974 287.086 256.833 287.945 257.627C289.277 258.859 290.713 259.978 292.148 261.096C292.488 261.361 292.827 261.625 293.165 261.891C293.52 262.17 293.871 262.459 294.222 262.749L294.223 262.75C295.285 263.626 296.351 264.506 297.549 265.118C299.069 265.894 300.703 266.449 302.335 267.003L302.335 267.003L302.336 267.003L302.336 267.004L302.337 267.004L302.338 267.004L302.338 267.004L302.339 267.004L302.339 267.005L302.34 267.005L302.34 267.005L302.341 267.005L302.341 267.005L302.342 267.005L302.342 267.006C302.864 267.183 303.386 267.36 303.903 267.544C305.16 267.992 306.432 268.417 307.726 268.735C307.87 268.77 308.015 268.807 308.161 268.844L308.162 268.844L308.163 268.844C309.176 269.101 310.222 269.366 311.223 269.284C314.137 269.046 314.271 268.944 316.698 267.099L316.698 267.098C316.828 267 316.964 266.896 317.107 266.787C317.401 266.565 317.889 266.403 318.232 266.475C320.24 266.894 322.301 267.4 323.603 269.073C323.885 269.436 323.21 270.909 322.616 271.521C322.505 271.636 322.394 271.75 322.284 271.864C320.513 273.697 318.78 275.49 316.208 276.547C313.976 277.464 311.863 277.987 309.519 278.052C308.132 278.091 306.754 278.195 305.37 278.299L305.369 278.299ZM241.949 223.1C241.936 222.891 241.924 222.682 241.9 222.48C241.792 221.578 241.696 220.674 241.601 219.771L241.601 219.768C241.561 219.397 241.522 219.025 241.482 218.653C241.71 216.77 241.91 215.296 242.173 213.834C242.22 213.572 242.26 213.305 242.3 213.037C242.428 212.175 242.557 211.303 242.939 210.57C243.375 209.733 243.92 208.954 244.466 208.174C244.989 207.427 245.512 206.679 245.939 205.88C247.392 203.16 249.913 201.814 252.399 200.488C253.066 200.132 253.731 199.777 254.372 199.397C255.745 198.583 257.458 198.316 259.149 198.051C259.692 197.966 260.233 197.882 260.759 197.779C262.147 197.51 263.584 197.345 264.995 197.372C267.252 197.415 269.429 197.935 271.639 198.49C274.648 199.244 277.064 200.791 279.275 202.76C279.728 203.163 279.991 203.778 280.254 204.395L280.254 204.396C280.383 204.697 280.511 204.998 280.662 205.275C280.973 205.846 281.289 206.415 281.605 206.984L281.606 206.985L281.608 206.989L281.611 206.993L281.611 206.993L281.611 206.994L281.611 206.994L281.611 206.994L281.611 206.995L281.612 206.995L281.612 206.995L281.612 206.995L281.612 206.996L281.612 206.996L281.613 206.996L281.613 206.997L281.613 206.997L281.613 206.997L281.613 206.998L281.613 206.998L281.614 206.998L281.614 206.999L281.614 206.999L281.614 206.999C282.146 207.956 282.678 208.913 283.187 209.882C283.899 211.236 282.713 212.759 281.148 212.842C280.053 212.9 271.956 213.585 269.03 216.149C266.536 218.334 265.93 219.174 264.954 220.527C264.785 220.761 264.605 221.01 264.403 221.284C263.685 222.256 263.076 226.714 263.466 227.902C263.807 228.941 264.274 229.938 264.742 230.935L264.743 230.935L264.743 230.935L264.743 230.936L264.743 230.936L264.743 230.936L264.743 230.936L264.743 230.936L264.743 230.937L264.743 230.937L264.743 230.937L264.743 230.937L264.744 230.938L264.744 230.938L264.744 230.938L264.744 230.938L264.744 230.939L264.744 230.939L264.744 230.939L264.744 230.939L264.744 230.939L264.745 230.94C265.119 231.737 265.493 232.535 265.803 233.356C266.025 233.943 266.079 234.594 266.132 235.245C266.156 235.54 266.18 235.835 266.22 236.125C265.934 236.116 265.646 236.12 265.357 236.123C264.703 236.13 264.048 236.138 263.421 236.011C262.724 235.869 262.051 235.605 261.378 235.342L261.377 235.341C261.077 235.224 260.777 235.106 260.475 234.999C259.171 234.539 257.867 234.078 256.563 233.618L254.612 232.93C254.191 232.781 253.764 232.644 253.338 232.506C252.399 232.203 251.46 231.899 250.576 231.479C247.244 229.897 244.127 227.983 242.256 224.636C242.014 224.203 241.981 223.649 241.949 223.1ZM276.33 331.673C276.536 332.526 276.741 333.378 276.931 334.233C276.961 334.375 276.868 334.541 276.775 334.707C276.731 334.785 276.688 334.862 276.657 334.937C276.933 336.501 277.194 337.656 277.487 338.802C277.696 339.614 277.911 340.426 278.126 341.238L278.126 341.241C278.537 342.793 278.948 344.345 279.313 345.907C279.516 346.776 279.613 347.716 279.528 348.597C279.299 350.972 282.04 356.124 284.227 356.48C285.715 356.723 287.244 356.701 288.776 356.678C289.725 356.664 290.675 356.651 291.618 356.7C292.358 356.737 293.162 357.084 293.755 357.531C293.94 357.672 293.703 358.76 293.357 359.137C292.549 360.018 291.62 360.825 290.627 361.492C287.111 363.859 283.097 363.821 279.098 363.685C275.562 363.565 272.338 362.754 270.192 359.534C269.184 358.023 268.119 356.549 267.053 355.075C266.395 354.164 265.737 353.254 265.092 352.334C264.552 351.562 264.026 350.781 263.501 349.999C262.858 349.043 262.215 348.087 261.545 347.149C261.04 346.442 260.503 345.753 259.967 345.064C258.812 343.58 257.658 342.098 256.824 340.453C256.389 339.596 257.263 337.685 258.066 336.671C258.92 335.591 259.887 334.599 260.854 333.607C261.958 332.474 263.061 331.343 263.993 330.083C264.442 329.475 264.598 328.642 264.753 327.814C264.916 326.943 265.078 326.079 265.578 325.489C266.85 323.992 266.867 322.324 266.884 320.685C266.892 319.978 266.899 319.275 267.007 318.595C267.165 317.607 267.311 316.613 267.457 315.618L267.457 315.616C267.764 313.534 268.071 311.447 268.482 309.392C268.634 308.637 269.44 308 270.216 307.386C270.475 307.181 270.731 306.979 270.958 306.776C271.059 306.685 271.852 307.049 271.956 307.335C272.303 308.295 272.569 309.305 272.711 310.319C272.881 311.527 273.023 312.739 273.165 313.952L273.165 313.953L273.165 313.953L273.165 313.953L273.165 313.954L273.165 313.954L273.165 313.955L273.165 313.955L273.165 313.956L273.165 313.956L273.166 313.957L273.166 313.957L273.166 313.958L273.166 313.958L273.166 313.959L273.166 313.959L273.166 313.959L273.166 313.96L273.166 313.961C273.353 315.55 273.539 317.138 273.786 318.715C273.914 319.532 274.141 320.333 274.367 321.135L274.367 321.135L274.367 321.136L274.367 321.136L274.367 321.137L274.368 321.137L274.368 321.138L274.368 321.138L274.368 321.139L274.368 321.139L274.368 321.14L274.368 321.14L274.368 321.141L274.368 321.141L274.368 321.141L274.368 321.142L274.369 321.142L274.369 321.143L274.369 321.143L274.369 321.144L274.369 321.144L274.369 321.146L274.369 321.146L274.37 321.146L274.37 321.147L274.37 321.147L274.37 321.148L274.37 321.148L274.37 321.149L274.37 321.149L274.37 321.15L274.37 321.15L274.37 321.151L274.37 321.151L274.371 321.152L274.371 321.152L274.371 321.152L274.371 321.153L274.371 321.153L274.371 321.154C274.57 321.857 274.768 322.561 274.901 323.275C275.034 323.992 275.097 324.722 275.161 325.451L275.161 325.452V325.453C275.227 326.213 275.293 326.974 275.438 327.72C275.694 329.04 276.01 330.349 276.326 331.658L276.326 331.659L276.326 331.66L276.327 331.66L276.327 331.661L276.327 331.662L276.327 331.663L276.327 331.663L276.327 331.664L276.328 331.665L276.328 331.666L276.328 331.666L276.328 331.667L276.328 331.668L276.329 331.669L276.329 331.669L276.329 331.67L276.329 331.671L276.329 331.671L276.329 331.672L276.33 331.673ZM274.003 236.08C273.227 236.309 271.954 235.681 271.233 235.063C270.592 234.514 270.113 233.777 269.633 233.04C269.427 232.722 269.22 232.405 269.001 232.102C268.805 231.809 268.611 231.531 268.424 231.262C267.817 230.39 267.28 229.619 266.979 228.765C266.795 228.246 266.795 227.667 266.795 227.084C266.795 226.618 266.795 226.149 266.701 225.706C266.266 223.651 267.376 222.367 268.522 221.042L268.522 221.041C268.69 220.847 268.859 220.653 269.023 220.454C270.35 218.855 271.981 217.668 273.783 216.766C274.816 216.249 276.067 216.033 277.238 215.957C277.992 215.908 278.757 215.942 279.52 215.975C280.622 216.024 281.719 216.072 282.773 215.87C283.951 215.645 284.321 216.203 284.711 216.831C285.073 217.416 285.298 218.175 285.318 218.865C285.37 220.689 285.309 222.518 285.212 224.341C285.205 224.485 285.047 224.616 284.887 224.749C284.73 224.88 284.569 225.014 284.545 225.164C283.978 228.654 281.839 231.282 279.424 233.523C278.017 234.828 275.912 235.517 274.003 236.08ZM298.906 262.196C298.867 262.238 298.828 262.28 298.796 262.311C298.492 262.049 298.198 261.792 297.91 261.542C296.725 260.512 295.654 259.581 294.533 258.716C294.249 258.497 293.904 258.355 293.561 258.212C293.186 258.057 292.813 257.902 292.521 257.651C291.536 256.799 290.583 255.911 289.629 255.023C288.822 254.27 288.015 253.518 287.188 252.788C285.495 251.294 283.758 249.85 282.004 248.428C281.636 248.13 281.271 247.826 280.906 247.522C279.663 246.487 278.416 245.449 277.044 244.626C275.744 243.845 274.359 243.207 272.974 242.569L272.972 242.569C272.135 242.183 271.297 241.797 270.477 241.379C269.569 240.916 268.715 240.344 267.865 239.774C267.737 239.689 267.61 239.603 267.482 239.518C267.461 239.504 267.741 238.779 267.926 238.757C268.593 238.676 269.27 238.556 269.948 238.436L269.949 238.436C271.697 238.127 273.452 237.817 275.066 238.161C277.348 238.647 279.655 239.469 281.817 240.957C285.382 243.411 288.532 246.219 291.525 249.263C294.814 252.611 298.06 256.003 301.305 259.395L302.49 260.633C303.927 262.135 305.322 263.676 306.716 265.217C306.842 265.357 306.931 265.717 306.845 265.829C306.563 266.201 306.074 266.845 305.878 266.777C305.232 266.549 304.646 266.123 304.077 265.709L304.076 265.709L303.973 265.634C303.116 265.012 302.264 264.381 301.413 263.751C300.636 263.176 299.859 262.601 299.078 262.033C299.067 262.024 298.987 262.11 298.906 262.196ZM671.839 363.093C671.469 363.107 671.079 363.163 670.687 363.218C669.827 363.34 668.965 363.463 668.322 363.147C668.283 363.128 668.177 363.074 668.006 362.988L667.964 362.967L667.956 362.963C661.502 359.707 574.508 315.819 485.765 288.816C408.837 265.408 328.041 258.78 324.585 258.496L324.485 258.488C324.117 258.457 406.592 256.413 486.979 280.519C579.393 308.232 671.454 362.628 671.839 363.093ZM383.528 209.613L383.528 209.611C383.626 208.705 383.725 207.788 383.836 206.859C383.776 206.613 383.719 206.373 383.662 206.137C383.401 205.047 383.165 204.061 382.796 203.128C382.761 203.042 382.727 202.954 382.693 202.867L382.645 202.741C382.079 201.278 381.513 199.813 379.614 199.357C379.196 199.257 378.839 198.935 378.476 198.609C378.177 198.34 377.875 198.067 377.531 197.913C376.528 197.46 375.435 197.146 374.349 196.955C373.8 196.859 373.236 196.845 372.673 196.831C372.118 196.817 371.563 196.803 371.022 196.711C370.051 196.545 369.085 196.336 368.119 196.127C366.635 195.807 365.152 195.486 363.65 195.321C363.072 195.258 362.495 195.203 361.918 195.149L361.916 195.149C360.304 194.996 358.696 194.844 357.089 194.503C355.601 194.188 354.053 194.144 352.509 194.1H352.508H352.508H352.508H352.507C352.014 194.086 351.521 194.072 351.03 194.049C350.806 194.039 350.573 194.113 350.343 194.187C350.087 194.269 349.834 194.351 349.595 194.315C347.891 194.057 346.195 193.748 344.498 193.438C344.066 193.359 343.633 193.28 343.2 193.202C342.446 193.065 341.696 193.077 340.937 193.089C340.089 193.102 339.23 193.115 338.343 192.923C336.818 192.593 335.23 192.581 333.629 192.568C332.552 192.56 331.469 192.552 330.397 192.447C328.183 192.23 325.941 192.281 323.701 192.333C322.784 192.354 321.868 192.375 320.953 192.378C319.602 192.383 317.922 193.939 317.825 195.263C317.798 195.638 317.819 196.048 317.84 196.458V196.459V196.459V196.46V196.46V196.46V196.461V196.461V196.462V196.462V196.462V196.463V196.463V196.464V196.464V196.465V196.465V196.465C317.884 197.331 317.927 198.193 317.523 198.705C316.5 199.999 316.639 201.391 316.779 202.789C316.894 203.935 317.009 205.086 316.483 206.19C315.962 207.284 316.028 208.598 316.094 209.911C316.126 210.552 316.158 211.193 316.122 211.808C316.061 212.843 315.968 213.878 315.875 214.913C315.693 216.94 315.511 218.971 315.569 221.008C315.577 221.283 315.65 221.562 315.722 221.839L315.722 221.839C315.813 222.188 315.903 222.534 315.862 222.868C315.686 224.295 315.47 225.716 315.255 227.137L315.255 227.138C315.076 228.325 314.896 229.512 314.739 230.702C314.625 231.559 314.631 232.415 314.636 233.276V233.277C314.643 234.38 314.65 235.491 314.407 236.619C314.126 237.928 314.12 239.282 314.115 240.649C314.11 241.68 314.106 242.718 313.983 243.749C313.825 245.075 313.851 246.413 313.877 247.756V247.757C313.913 249.568 313.948 251.389 313.533 253.2C313.276 254.321 313.208 255.483 313.14 256.647C313.096 257.393 313.052 258.14 312.959 258.878C312.924 259.15 312.751 259.455 312.589 259.738L312.589 259.739C312.397 260.076 312.223 260.382 312.324 260.563C312.646 261.138 313.405 261.578 314.072 261.825C315.892 262.498 318.341 261.613 318.445 260.321C318.491 259.744 318.557 259.163 318.624 258.582L318.624 258.58L318.624 258.578C318.798 257.057 318.973 255.532 318.787 254.055C318.613 252.68 318.926 251.403 319.237 250.135L319.237 250.134C319.501 249.059 319.763 247.989 319.727 246.869C319.716 246.525 320.133 245.87 320.373 245.859C323.478 245.727 326.587 245.65 329.695 245.632C330.803 245.626 331.912 245.658 333.02 245.69C334.237 245.725 335.455 245.759 336.672 245.744C337.949 245.727 339.226 245.673 340.503 245.619C342.565 245.532 344.626 245.444 346.682 245.516C347.974 245.561 349.255 245.822 350.539 246.084C351.434 246.266 352.329 246.448 353.23 246.558C353.788 246.626 354.348 246.639 354.91 246.651C355.822 246.672 356.739 246.693 357.656 246.95C358.195 247.102 358.78 247.083 359.367 247.065C359.911 247.047 360.457 247.03 360.969 247.148C361.807 247.342 362.621 247.637 363.436 247.933L363.436 247.933C364.135 248.186 364.835 248.44 365.551 248.63C366.368 248.846 367.213 248.96 368.058 249.073C368.483 249.13 368.909 249.187 369.332 249.257C369.707 249.32 370.099 249.43 370.492 249.541C371.34 249.78 372.186 250.018 372.845 249.764C374.141 249.264 375.413 248.141 376.169 246.95C376.937 245.741 377.25 244.199 377.546 242.742L377.59 242.525C377.681 242.081 377.632 241.585 377.584 241.097C377.522 240.46 377.461 239.838 377.716 239.37C378.486 237.952 378.689 236.442 378.892 234.935C378.991 234.195 379.091 233.455 379.257 232.728C379.337 232.381 379.295 231.973 379.255 231.578C379.202 231.055 379.151 230.554 379.385 230.243C380.432 228.853 380.582 227.267 380.733 225.68L380.733 225.679C380.828 224.679 380.922 223.679 381.241 222.726C381.682 221.412 381.934 219.996 382.186 218.581L382.187 218.58C382.296 217.966 382.406 217.351 382.53 216.746C383.009 214.425 383.264 212.059 383.528 209.614L383.528 209.613ZM375.934 234.3C375.653 235.742 375.373 237.177 374.732 238.516C374.699 238.819 374.678 239.098 374.659 239.356L374.659 239.358V239.358C374.606 240.051 374.566 240.59 374.337 241.032C373.981 241.721 373.935 242.519 373.888 243.315C373.813 244.615 373.737 245.909 372.316 246.711C372.255 246.746 372.192 246.782 372.128 246.819C371.675 247.082 371.152 247.384 370.751 247.295C370.341 247.204 369.958 246.99 369.575 246.775C369.174 246.551 368.774 246.326 368.345 246.246C367.59 246.105 366.818 246.045 366.047 245.985C365.162 245.917 364.278 245.848 363.421 245.656C362.69 245.493 361.988 245.2 361.286 244.906C360.572 244.607 359.858 244.308 359.114 244.147C358.166 243.942 357.19 243.871 356.213 243.799C355.453 243.744 354.692 243.688 353.943 243.569C347.527 242.551 341.085 242.704 334.644 242.857C330.784 242.949 326.923 243.041 323.068 242.881C321.734 242.825 320.612 242.752 320.515 241.047C320.48 240.434 320.37 239.792 320.26 239.153C320.034 237.836 319.81 236.525 320.244 235.485C321.159 233.292 321.051 231.126 320.943 228.97C320.898 228.064 320.852 227.16 320.883 226.257C321.172 217.749 321.248 209.233 321.315 200.719C321.316 200.595 321.317 200.471 321.317 200.348V200.347C321.32 198.954 321.323 197.663 322.349 196.502C322.939 195.835 323.461 195.586 324.374 195.652C325.447 195.729 326.524 195.744 327.602 195.759C328.823 195.776 330.044 195.794 331.257 195.901C332.473 196.009 333.683 196.199 334.892 196.389C336.165 196.588 337.437 196.788 338.717 196.892C339.539 196.959 340.392 196.899 341.239 196.839H341.239H341.239H341.239H341.24H341.24H341.24H341.24H341.241H341.241H341.241H341.242H341.242H341.242H341.242H341.243H341.243H341.243H341.243C342.56 196.747 343.864 196.655 345.022 197.04C347.365 197.82 349.729 197.876 352.089 197.933C353.312 197.962 354.534 197.992 355.751 198.122C356.696 198.223 357.69 198.147 358.675 198.073C360.157 197.96 361.618 197.85 362.861 198.343C364.906 199.154 366.948 199.169 368.961 199.184C369.76 199.19 370.553 199.196 371.341 199.251C374.66 199.485 377.544 200.432 379.384 202.863C380.453 204.275 381.483 206.612 380.137 208.807C380.019 209 380.05 209.279 380.082 209.563C380.099 209.722 380.117 209.884 380.109 210.032C380.069 210.737 380.077 211.461 380.085 212.185C380.103 213.845 380.121 215.507 379.563 216.945C379.027 218.325 378.77 219.742 378.515 221.155L378.515 221.156C378.3 222.341 378.087 223.523 377.709 224.678C377.445 225.485 377.45 226.392 377.456 227.293C377.462 228.312 377.469 229.322 377.085 230.167C376.48 231.499 376.207 232.903 375.934 234.3ZM316.536 243.225C316.48 243.17 316.425 243.114 316.384 243.068C317.15 243.145 318.016 243.302 318.199 243.742C318.398 244.222 318.369 244.798 318.34 245.373C318.327 245.617 318.315 245.861 318.32 246.098C318.262 246.099 318.196 246.107 318.131 246.116C317.987 246.134 317.844 246.152 317.781 246.089C317.691 246.001 317.628 245.867 317.568 245.737L317.568 245.737C317.49 245.571 317.415 245.413 317.293 245.369C315.865 244.858 315.827 244.765 316.758 243.488C316.774 243.466 316.655 243.346 316.536 243.226L316.536 243.225ZM473.806 399.555L473.808 399.556C474.304 399.809 474.794 400.06 475.287 400.304C475.657 400.488 476.044 400.643 476.431 400.798L476.432 400.799C477.07 401.054 477.705 401.309 478.254 401.69C478.934 402.159 479.504 402.791 480.071 403.42L480.156 403.515L480.22 403.585L480.297 403.67C480.34 403.718 480.384 403.766 480.427 403.813C480.464 403.853 480.502 403.894 480.539 403.934L480.608 404.008C480.691 404.099 480.633 404.512 480.567 404.533C480.406 404.582 480.236 404.647 480.063 404.713C479.591 404.894 479.103 405.08 478.742 404.947C478.147 404.724 477.535 404.544 476.922 404.365C475.102 403.831 473.283 403.297 471.927 401.628C470.826 400.271 469.303 399.145 467.759 398.301C467.064 397.924 465.794 398.479 465.508 399.634C464.785 402.543 456.875 414.084 445.032 414.084C433.19 414.084 414.557 412.864 409.605 406.918C402.646 398.563 405.327 382.607 405.585 381.071L405.599 380.987C405.682 380.465 405.297 379.807 404.97 379.319C404.87 379.17 404.164 379.257 403.866 379.443C402.953 380.02 402.065 380.634 401.177 381.249L401.176 381.249L401.176 381.249L401.176 381.249L401.175 381.249L401.167 381.255L401.125 381.284C400.991 381.377 400.857 381.47 400.723 381.562C400.512 381.707 400.302 381.852 400.09 381.996C399.879 382.14 399.668 382.285 399.458 382.431L399.334 382.517L399.164 382.636L398.878 382.837L398.866 382.845C397.761 383.619 396.655 384.394 395.478 385.038C395.118 385.236 394.524 385.043 393.969 384.862L393.969 384.862C393.804 384.809 393.642 384.756 393.491 384.715C393.176 384.627 392.879 384.474 392.582 384.321C392.447 384.252 392.312 384.183 392.176 384.119C392.419 383.903 392.655 383.678 392.891 383.452L392.891 383.452L392.892 383.451L392.892 383.451L392.892 383.451L392.893 383.451L392.893 383.45C393.416 382.95 393.939 382.45 394.532 382.054C395.336 381.52 396.179 381.043 397.022 380.566L397.023 380.565C397.637 380.218 398.251 379.871 398.85 379.501C400.402 378.541 401.931 377.54 403.442 376.517C403.625 376.394 403.811 376.271 403.998 376.149L403.998 376.148L403.999 376.148L404 376.147C404.773 375.64 405.555 375.127 406.158 374.461C408.719 371.63 411.6 369.23 414.587 366.842C415.976 365.736 417.498 364.976 419.013 364.221C420.075 363.691 421.133 363.163 422.14 362.518C422.847 362.067 423.74 361.917 424.639 361.766L424.639 361.766C425.133 361.684 425.629 361.6 426.096 361.467C426.998 361.208 427.892 360.922 428.786 360.636L428.786 360.636C429.45 360.423 430.114 360.211 430.78 360.01C430.97 359.954 431.181 359.961 431.388 359.968C431.456 359.971 431.525 359.973 431.591 359.973C432.415 359.973 433.242 359.951 434.069 359.929C436.01 359.877 437.951 359.825 439.855 360.06C441.049 360.208 442.189 360.767 443.331 361.326L443.332 361.326C443.845 361.577 444.357 361.828 444.875 362.042C444.847 362.088 444.823 362.144 444.799 362.2C444.75 362.311 444.703 362.421 444.631 362.443C441.883 363.205 439.202 363.656 436.388 362.361C435.519 361.961 434.357 362.107 433.27 362.243C433.053 362.27 432.838 362.297 432.63 362.319C431.617 362.427 430.617 362.676 429.622 362.924C429.398 362.979 429.175 363.035 428.951 363.089C428.82 363.12 428.687 363.151 428.555 363.18C428.479 363.198 428.402 363.215 428.326 363.232C427.555 363.403 426.78 363.576 426.083 363.904C423.567 365.088 421.076 366.342 418.626 367.666C417.815 368.104 417.039 368.605 416.263 369.106L416.263 369.106L416.262 369.106L416.262 369.106L416.262 369.106L416.261 369.106L416.261 369.107L416.261 369.107L416.261 369.107L416.26 369.107L416.26 369.107L416.26 369.108L416.26 369.108L416.259 369.108L416.259 369.108C415.556 369.562 414.853 370.015 414.124 370.422C413.722 370.646 413.288 370.821 412.855 370.996L412.854 370.996C411.73 371.449 410.611 371.9 410.064 373.211C410.021 373.311 409.893 373.378 409.765 373.444C409.738 373.458 409.71 373.473 409.684 373.487C409.656 373.502 409.63 373.518 409.605 373.534C409.892 373.541 410.184 373.57 410.475 373.598C411.131 373.661 411.785 373.723 412.378 373.555C413.377 373.274 414.329 372.818 415.28 372.362C415.394 372.308 415.508 372.253 415.623 372.199L415.728 372.149C415.903 372.066 416.079 371.983 416.255 371.903C416.727 371.689 417.192 371.458 417.658 371.227C418.562 370.779 419.465 370.33 420.41 370.008C420.97 369.817 421.579 369.78 422.19 369.743H422.191C422.627 369.716 423.065 369.689 423.489 369.607C424.278 369.455 425.057 369.246 425.838 369.036L425.838 369.036L425.839 369.036L425.839 369.036L425.84 369.036L425.84 369.035C426.234 368.93 426.628 368.824 427.023 368.725C427.213 368.68 427.42 368.667 427.619 368.667C428.463 368.666 429.318 368.709 430.173 368.751C432.219 368.853 434.263 368.955 436.152 368.456C436.915 368.256 437.599 368.321 438.27 368.385C438.818 368.438 439.358 368.489 439.926 368.394C441.016 368.213 442.252 368.719 443.431 369.202L443.638 369.287C443.717 369.319 443.796 369.351 443.875 369.383C443.949 369.413 444.023 369.442 444.097 369.471C444.147 369.49 444.197 369.509 444.246 369.528C445.537 370.016 446.894 370.542 447.958 371.382C449.206 372.374 450.347 373.497 451.489 374.62L451.49 374.62C451.972 375.094 452.454 375.569 452.945 376.033C452.853 376.129 452.748 376.256 452.644 376.383C452.42 376.656 452.195 376.929 452.096 376.89C451.62 376.7 422.157 373.022 410.648 379.319C406.473 381.603 410.314 398.193 410.636 399.582L410.648 399.634C412.378 407.14 439.349 411.467 449.612 409.751C461.965 407.686 462.707 394.772 462.947 390.585C462.989 389.85 463.016 389.384 463.087 389.292C463.749 388.444 464.805 387.989 465.744 388.775C466.191 389.147 466.489 389.871 466.563 390.467C466.633 391.032 466.809 391.57 466.981 392.092L466.981 392.092C467.118 392.508 467.251 392.913 467.325 393.314C467.554 394.582 468.37 395.378 469.195 396.181C469.772 396.743 470.354 397.31 470.739 398.044C471.833 398.546 472.832 399.057 473.806 399.555ZM170.98 320.731L170.979 320.731C170.592 320.644 170.206 320.558 169.949 320.701C169.049 321.204 130.787 338.323 104.072 323.677C103.744 323.497 103.274 323.254 102.711 322.963C99.3668 321.234 92.7404 317.809 93.1374 315.868C94.2187 310.582 109.338 303.32 111.304 302.376C111.431 302.314 111.503 302.28 111.513 302.274C111.428 302.14 111.351 301.98 111.273 301.82C111.102 301.467 110.931 301.114 110.677 301.039C109.946 300.822 109.094 300.794 108.34 300.938C107.459 301.105 97.8707 303.242 96.191 304.307C94.4252 305.427 89.5926 311.316 89.6812 313.215C89.7195 314.027 89.4489 314.851 89.1769 315.68C89.0343 316.114 88.8913 316.55 88.7923 316.985C88.7342 317.24 88.7228 317.518 88.7116 317.793C88.6938 318.23 88.6762 318.66 88.4732 318.98C88.2517 319.329 87.9905 319.89 87.6741 320.569C87.0523 321.903 86.2171 323.695 85.0501 325.244C84.1749 326.405 82.9852 327.382 82.0809 328.124L82.0805 328.124L82.0795 328.125C81.5397 328.568 81.1017 328.927 80.8933 329.193C80.7678 329.352 80.6024 329.512 80.4332 329.676C79.9662 330.128 79.4709 330.607 79.7106 331.179C80.0347 331.953 81.1763 331.574 81.79 331.37L81.8033 331.365C82.6971 331.072 83.5471 330.501 84.2771 329.884C85.2996 329.019 86.2634 328.063 87.1258 327.041C88.0093 325.99 88.8722 324.881 89.5036 323.677C90.2009 322.34 91.7429 321.787 93.1374 322.746C132.366 349.721 169.383 324.008 171.112 322.472C171.349 322.263 171.391 321.834 171.433 321.403C171.452 321.205 171.472 321.007 171.51 320.83C171.342 320.812 171.161 320.772 170.98 320.731ZM348.144 169.098C347.372 169.873 346.601 170.634 345.837 171.388L345.836 171.389C343.914 173.287 342.029 175.147 340.249 177.103C339.623 177.79 339.232 178.694 338.842 179.596C338.673 179.985 338.505 180.375 338.318 180.746C337.31 182.746 335.822 183.496 333.205 184.632C331.692 185.288 330.108 185.915 328.709 185.641C327.726 185.448 326.74 185.463 325.768 185.478C324.69 185.494 323.63 185.51 322.612 185.243C321.373 184.918 320.016 183.853 319.391 182.739C318.85 181.774 319.456 180.521 320.534 179.484C321.724 178.34 322.748 177.027 323.774 175.713L323.775 175.712C324.367 174.953 324.961 174.192 325.586 173.464C326.254 172.686 326.917 171.902 327.58 171.118L327.584 171.113C329.78 168.517 331.976 165.919 334.378 163.529C336.363 161.554 338.833 160.281 341.744 159.462C344.392 158.717 346.415 158.901 348.784 159.914C349.667 160.291 350.686 160.345 351.707 160.399L351.707 160.399C352.206 160.425 352.705 160.451 353.188 160.515C354.732 160.719 355.647 162.174 354.653 162.881C353.774 163.508 352.134 164.123 351.4 163.717C347.368 161.481 343.35 162.009 339.402 163.51C338.35 163.91 337.478 164.826 336.623 165.724C336.349 166.011 336.077 166.297 335.802 166.563C333.689 168.605 331.583 170.66 329.578 172.807C328.802 173.639 328.138 174.575 327.474 175.511C327.229 175.857 326.983 176.203 326.732 176.544C326.565 176.77 326.398 176.996 326.23 177.222C325.385 178.364 324.539 179.506 323.752 180.686C323.167 181.564 323.243 181.73 324.158 182.022C326.443 182.75 328.672 182.607 330.944 181.781C333.717 180.772 335.312 178.657 336.969 176.461L336.973 176.455C337.174 176.189 337.376 175.921 337.582 175.654C338.932 173.895 340.571 172.357 342.211 170.819L342.211 170.818L342.211 170.818C342.926 170.147 343.641 169.477 344.331 168.788C344.453 168.667 344.577 168.55 344.702 168.432C344.923 168.223 345.145 168.014 345.347 167.787C346.353 166.658 347.366 165.572 349.076 165.663C349.155 165.667 349.232 165.57 349.315 165.465C349.378 165.385 349.445 165.301 349.519 165.254C349.627 165.185 349.757 165.149 349.888 165.113L349.888 165.113C349.945 165.097 350.002 165.082 350.057 165.063C350.049 165.12 350.045 165.18 350.041 165.239L350.041 165.24C350.032 165.37 350.023 165.5 349.969 165.607C349.406 166.742 348.824 167.866 348.144 169.098ZM363.352 153.023C366.199 150.331 369.067 147.62 371.008 143.958C370.539 143.802 370.067 143.766 369.6 143.731C369.379 143.714 369.159 143.698 368.94 143.669C368.576 143.62 368.21 143.528 367.844 143.436C367.205 143.275 366.57 143.116 365.962 143.194C364.835 143.338 363.671 143.8 362.693 144.401C361.259 145.282 359.733 145.983 358.203 146.685C355.948 147.721 353.686 148.759 351.702 150.385C351.157 150.831 350.889 151.33 350.633 151.806C350.428 152.189 350.23 152.557 349.903 152.871C350.066 152.903 350.229 152.933 350.392 152.962L350.393 152.962C350.755 153.028 351.117 153.094 351.471 153.188C352.315 153.413 353.156 153.646 353.998 153.88C354.714 154.079 355.431 154.278 356.148 154.471C356.341 154.523 356.534 154.578 356.727 154.634C357.345 154.812 357.965 154.99 358.596 155.057C358.766 155.076 358.95 155.101 359.141 155.127C359.969 155.242 360.912 155.372 361.296 154.994C361.971 154.33 362.661 153.677 363.352 153.023ZM363.473 147.032C363.503 147.044 363.532 147.054 363.559 147.062C364.024 146.717 364.7 146.627 364.901 146.894C365.168 147.249 365.301 148.173 365.082 148.35C363.671 149.498 362.2 150.596 360.636 151.521C360.037 151.875 359.14 151.821 358.39 151.771C358.157 151.755 357.708 151.034 357.798 150.819C357.833 150.735 357.87 150.645 357.908 150.552L357.908 150.551L357.911 150.544C358.218 149.794 358.614 148.823 359.075 148.764C360.506 148.579 361.571 147.862 362.665 147.125C362.772 147.053 362.879 146.981 362.987 146.909C363.061 146.86 363.21 146.923 363.359 146.986L363.413 147.008C363.433 147.017 363.453 147.025 363.473 147.032ZM429.667 284.347C425.233 283.821 420.849 283.821 416.48 283.82H416.476C415.129 283.82 413.784 283.82 412.44 283.805C411.612 283.795 410.669 283.626 410.002 283.191C409.605 282.935 409.452 281.969 409.564 281.398C409.638 281.034 410.404 280.552 410.851 280.561C411.712 280.578 413.165 280.509 414.915 280.426C419.078 280.229 424.92 279.953 428.465 280.561C436.603 281.956 440.82 287.151 440.575 287.129C440.199 287.095 439.816 287.079 439.433 287.062C438.457 287.02 437.479 286.977 436.603 286.659C435.929 286.414 435.273 286.119 434.614 285.824C433.067 285.13 431.504 284.429 429.667 284.347ZM383.279 137.717C384.855 137.09 384.918 136.158 383.423 135.268C382.996 135.385 382.618 135.519 382.262 135.645C381.85 135.79 381.468 135.925 381.075 136.012C380.223 136.202 379.367 136.372 378.512 136.542L378.511 136.542C377.212 136.799 375.912 137.057 374.631 137.383C374.174 137.499 373.511 138.257 373.567 138.625C373.664 139.267 374.096 139.874 374.501 140.444C374.544 140.504 374.587 140.564 374.628 140.624C374.703 140.73 375.25 140.569 375.542 140.446C375.911 140.289 376.273 140.115 376.636 139.941C377.221 139.659 377.806 139.378 378.418 139.173C379.097 138.945 379.793 138.761 380.488 138.576C381.433 138.326 382.377 138.076 383.279 137.717ZM387.975 132.785C387.998 131.465 388.006 131.464 389.909 131.14L390.107 131.106C390.51 131.037 390.895 130.87 391.281 130.702C391.599 130.564 391.917 130.425 392.248 130.341C392.416 130.298 392.941 130.807 392.9 130.944C392.876 131.029 392.85 131.121 392.823 131.217C392.649 131.842 392.428 132.634 392.092 132.704C391.719 132.782 391.346 132.97 390.972 133.16C390.008 133.648 389.03 134.144 387.975 132.785ZM399.002 127.76C399.157 127.743 399.311 127.726 399.458 127.716C400.606 127.508 400.637 126.791 400.668 126.098C400.681 125.791 400.694 125.49 400.803 125.238C400.634 125.269 400.463 125.292 400.292 125.316L400.291 125.316L400.291 125.316L400.291 125.316L400.29 125.316C399.904 125.369 399.517 125.422 399.161 125.557C399.086 125.586 399.006 125.615 398.923 125.646C398.358 125.852 397.666 126.105 397.557 126.482C397.125 127.971 398.075 127.865 399.002 127.76ZM412.117 122.826L412.048 122.857C411.705 123.013 411.41 123.148 411.153 123.094C410.789 123.017 410.444 122.851 410.099 122.685C409.953 122.614 409.807 122.543 409.659 122.48C409.744 122.455 409.829 122.43 409.913 122.404C410.027 122.369 410.141 122.334 410.255 122.298L410.259 122.297L410.26 122.297L410.26 122.297L410.261 122.297C410.72 122.154 411.18 122.011 411.649 121.916C412.34 121.777 412.502 121.973 412.287 122.75C412.229 122.775 412.172 122.8 412.117 122.826ZM480.796 67.096L480.796 67.0968C480.888 67.4666 480.981 67.8443 481.084 68.229C481.195 68.6042 481.32 68.9133 481.434 69.1973C481.529 69.4328 481.617 69.6511 481.684 69.8756C482.504 72.5865 482.839 75.3525 482.777 78.1934C482.763 78.8131 482.912 79.4332 483.061 80.056C483.175 80.5298 483.289 81.0051 483.331 81.4829C483.385 82.0739 483.372 82.6849 483.359 83.2934C483.337 84.3767 483.314 85.4523 483.667 86.3945C484.219 87.8793 484.089 89.3097 483.962 90.7013C483.937 90.9662 483.913 91.2297 483.894 91.4919C483.725 93.7473 482.856 95.7009 480.472 96.9622C479.789 97.3239 479.107 97.4228 478.434 97.5203C477.835 97.6072 477.244 97.6929 476.665 97.962C475.875 98.3293 475.02 98.4556 474.15 98.5839C473.046 98.7468 471.919 98.913 470.88 99.5805C470.268 99.9735 469.455 100.044 468.637 100.114C467.85 100.182 467.059 100.251 466.443 100.608C465.049 101.417 464.072 101.339 462.938 100.502C462.419 100.119 461.909 99.7233 461.399 99.3268L461.399 99.3266C460.928 98.9612 460.458 98.5955 459.979 98.2397C459.421 97.8234 458.846 97.4245 458.25 97.0645C457.617 96.6813 456.849 96.4745 456.126 96.28C455.444 96.0967 454.804 95.9242 454.356 95.6252C453.118 94.8013 452.121 95.1139 451.147 95.4191C450.689 95.5627 450.237 95.7047 449.766 95.7258C449.388 95.7425 449.033 96.3168 448.678 96.8901C448.517 97.1502 448.357 97.4102 448.194 97.6177C448.445 97.7458 448.708 97.9199 448.971 98.0939C449.552 98.479 450.133 98.8637 450.586 98.7483C450.722 98.7137 450.855 98.6778 450.986 98.6425C452.006 98.3671 452.893 98.1278 453.946 98.8203C454.42 99.1329 454.964 99.339 455.509 99.5454C455.995 99.7296 456.482 99.9142 456.921 100.175C457.072 100.265 457.224 100.354 457.377 100.444C458.583 101.153 459.818 101.878 460.762 102.86C462.231 104.383 463.816 104.942 465.926 104.31C467.4 103.868 468.89 103.476 470.38 103.085C471.53 102.782 472.679 102.48 473.822 102.155C474.435 101.98 475.052 101.82 475.668 101.661C478.295 100.981 480.908 100.304 483.174 98.4843C486.642 95.6947 486.754 91.914 486.332 88.2116C486.256 87.5528 486.168 86.8942 486.08 86.2346L486.079 86.2311L486.079 86.2274C485.884 84.7678 485.688 83.3028 485.62 81.8193C485.566 80.6384 485.598 79.4517 485.629 78.2648V78.2646V78.2643V78.2641V78.2638V78.2636V78.2634V78.2631V78.2629V78.2625C485.707 75.3222 485.784 72.3806 484.573 69.5218C484.219 68.6847 484.019 67.7828 483.82 66.8802C483.627 66.0106 483.435 65.1404 483.104 64.3271C482.504 62.8444 481.564 61.4721 480.625 60.1611L480.511 60.0019C479.886 59.1276 479.093 58.0188 478.27 57.9186C477.558 57.8315 476.783 58.2605 476.007 58.6899L476.007 58.6901C475.67 58.8765 475.333 59.063 475.001 59.2073C475.174 59.3216 475.347 59.4351 475.521 59.5487L475.522 59.5493L475.523 59.5498C475.935 59.8196 476.347 60.0896 476.752 60.3709C476.971 60.5257 477.182 60.7115 477.356 60.9176C477.594 61.1985 477.848 61.4718 478.103 61.7453L478.103 61.7454L478.103 61.7458C478.723 62.4121 479.343 63.0795 479.739 63.8599C480.236 64.835 480.506 65.9252 480.796 67.096ZM446.651 106.852L446.634 106.818C446.494 106.758 446.353 106.745 446.256 106.737C446.187 106.731 446.14 106.727 446.133 106.709C445.984 106.294 445.856 105.871 445.729 105.448L445.728 105.448C445.697 105.342 445.665 105.236 445.632 105.131C445.574 105.321 445.498 105.513 445.422 105.705C445.253 106.13 445.084 106.556 445.115 106.966C445.326 109.784 445.583 112.509 446.965 115.185C447.586 116.39 447.826 117.782 448.067 119.18C448.27 120.362 448.474 121.548 448.91 122.631C448.966 122.771 449.022 122.912 449.079 123.052L449.079 123.052C449.872 125.026 450.659 126.984 451.045 129.069C451.19 129.85 451.02 130.768 450.747 131.534C450.427 132.428 449.783 133.145 449.137 133.864C448.161 134.95 447.181 136.04 447.308 137.753C447.32 137.907 447.175 138.073 447.03 138.239C446.992 138.282 446.954 138.326 446.919 138.369C446.891 138.404 446.864 138.439 446.841 138.474C446.94 138.436 447.044 138.404 447.148 138.372C447.389 138.297 447.631 138.222 447.821 138.081C447.938 137.997 448.008 137.853 448.078 137.708C448.144 137.571 448.211 137.433 448.318 137.348C448.625 137.104 448.934 136.869 449.241 136.635L449.242 136.634C451.074 135.237 452.834 133.896 453.656 131.271C454.376 128.977 454.128 127.189 453.329 125.291C452.877 124.22 452.326 123.174 451.776 122.131C450.792 120.263 449.811 118.404 449.411 116.419C448.881 113.79 448.264 111.219 447.461 108.675C447.274 108.084 446.991 107.524 446.651 106.852ZM503.921 193.08L503.92 193.08L503.919 193.08C503.498 192.981 503.086 192.885 502.673 192.793C502.411 192.734 502.149 192.675 501.887 192.615L501.886 192.615C500.812 192.37 499.738 192.125 498.651 191.963C498.063 191.875 497.464 191.857 496.864 191.839C496.421 191.826 495.978 191.813 495.539 191.772C494.877 191.71 494.178 191.641 493.582 191.383C493.05 191.155 492.56 190.831 492.071 190.508C491.997 190.459 491.923 190.41 491.849 190.361C491.791 190.323 491.733 190.285 491.674 190.248C491.594 190.196 491.514 190.146 491.434 190.096C491.561 190.091 491.687 190.087 491.814 190.083C491.965 190.078 492.116 190.074 492.267 190.07C492.914 190.053 493.562 190.037 494.203 189.962C494.518 189.925 494.83 189.832 495.142 189.74C495.554 189.618 495.965 189.496 496.375 189.506L496.812 189.517C499.597 189.584 502.388 189.652 505.156 189.93C506.953 190.111 508.733 190.494 510.508 190.876C510.928 190.966 511.349 191.057 511.769 191.145C513.328 191.469 514.873 191.859 516.417 192.248L516.938 192.379C518.312 192.725 519.677 193.094 521.043 193.464L521.049 193.465L521.622 193.621C521.82 193.674 522.01 193.749 522.2 193.825C522.289 193.86 522.377 193.895 522.466 193.928C522.396 194.026 522.326 194.149 522.256 194.273L522.255 194.274C522.101 194.545 521.945 194.818 521.792 194.816C521.056 194.812 520.319 194.945 519.582 195.078C518.044 195.357 516.5 195.636 514.939 194.666C514.66 194.493 514.339 194.528 513.973 194.568C513.506 194.619 512.965 194.678 512.344 194.327C511.242 193.706 509.798 193.694 508.283 193.681C507.637 193.675 506.978 193.67 506.327 193.617C505.459 193.44 504.676 193.257 503.921 193.08ZM179.777 263.745C203.152 260.808 222.642 258.359 222.593 257.725C222.59 257.686 222.622 257.581 222.669 257.429C222.97 256.44 223.884 253.447 219.853 253.396C202.551 253.177 152.318 259.069 105.111 269.189C38.1336 282.922 -0.454049 302.062 0.0040328 303.364C0.212252 303.956 16.8667 299.071 37.3065 293.076L37.307 293.076C61.8346 285.882 91.8131 277.09 105.365 274.243L106.875 273.93C119.8 271.282 152.444 267.18 179.777 263.745ZM122.748 305.179C126.997 305.179 133.13 305.64 140.977 308.301L142.947 308.975C144.447 309.493 147.235 310.257 151.275 311.256C152.213 311.487 152.786 312.436 152.554 313.374C152.322 314.313 140.355 311.786 140.355 311.786C132.265 309.028 129.036 308.274 125.255 308.441C121.574 308.603 113.797 311.459 107.89 313.629L107.89 313.629C103.719 315.161 100.481 316.35 100.277 316.006C99.7849 315.175 100.368 314.119 100.891 313.609C106.193 308.441 109.13 306.982 122.748 305.179ZM411.49 275.095C411.777 274.844 411.995 274.509 412.102 274.114C412.391 273.048 404.139 271.446 398.581 273.524C397.454 273.945 396.454 274.6 395.36 275.555C395.177 275.716 394.77 276.275 394.267 276.967C393.442 278.103 392.357 279.597 391.568 280.276C390.296 281.369 388.14 282.533 386.66 283.278C386.061 283.58 383.785 284.084 381.218 284.652C377.107 285.562 372.253 286.637 372.363 287.308C372.542 288.398 374.549 288.233 375.639 288.054C377.533 287.744 379.168 287.506 380.59 287.299L380.593 287.299L380.594 287.299L380.595 287.299L380.595 287.299C384.237 286.77 386.486 286.443 388.131 285.614C389.92 284.713 391.465 283.651 392.97 282.356C393.209 282.151 393.546 281.841 393.926 281.486L395.134 280.338C394.944 281.874 395.46 283.352 396.76 284.401L397.254 284.795C412.749 297.047 429.509 298.901 447.196 290.343L447.472 290.207L447.602 290.91C448.061 293.245 448.717 295.189 449.586 296.749C450.873 299.059 453.068 301.327 456.158 303.594L458.524 300.37L458.131 300.077C455.682 298.228 454.003 296.459 453.081 294.803C452.104 293.049 451.415 290.418 451.061 286.929L450.756 283.939L448.116 285.374L447.591 285.656C430.284 294.863 414.309 293.413 399.271 281.287C399.182 281.215 399.092 280.01 399.271 279.488C399.585 278.571 400.303 276.739 402.146 276.105C403.348 275.692 411.49 275.095 411.49 275.095ZM536.624 169.849L535.792 168.344C535.166 167.223 534.355 165.785 533.953 165.124L533.823 164.915C532.19 162.386 531.892 159.18 532.311 153.991L532.485 152.072L532.645 150.402C533.115 145.261 532.997 143.301 532.056 142.289L531.913 142.143C530.976 141.238 529.881 141.25 525.927 142.128L524.963 142.346C520.396 143.393 517.375 143.648 513.885 142.817L510.866 142.067C510.46 141.967 510.056 141.869 509.684 141.778C509.349 141.696 509.04 141.621 508.78 141.558C508.364 141.456 508.073 141.385 508.001 141.367L507.184 141.158C499.985 139.272 496.955 137.246 495.822 132.34C495.551 131.168 495.661 129.957 496.087 128.447L496.183 128.119C496.459 127.208 497.8 123.593 497.8 123.594C498.102 122.738 498.356 121.956 498.582 121.17L498.871 120.149C499.115 119.276 499.367 118.349 499.629 117.358L502.361 106.661C502.852 104.775 503.271 103.21 503.441 102.682L504.218 100.402L504.544 99.4774C504.757 98.8869 504.962 98.3428 505.174 97.8129C506.882 93.5339 508.695 90.8918 511.25 90.1622C513.605 89.4899 515.339 89.5817 517.236 90.3384C517.631 90.4962 518.658 90.9861 519.437 91.3575C519.856 91.5572 520.203 91.7226 520.341 91.7838C522.242 92.6245 524.19 93.159 526.83 93.4241L527.333 93.4707C528.605 93.5787 529.653 93.4393 532.759 92.7602L534.988 92.2666C537.356 91.7524 538.908 91.498 540.607 91.3922C542.149 91.2962 543.584 91.3635 544.949 91.6217C547.198 92.0469 550.646 93.447 555.381 95.8311C556.121 96.2036 556.419 97.1055 556.046 97.8454C555.674 98.5853 554.772 98.8831 554.032 98.5106L553.149 98.0701C549.106 96.0737 546.163 94.9043 544.392 94.5694C543.288 94.3608 542.1 94.3051 540.794 94.3864C539.186 94.4865 537.671 94.7452 535.194 95.2925L533.33 95.7064C530.021 96.4298 528.828 96.5916 527.24 96.4727L527.079 96.4599C523.841 96.185 521.445 95.5522 519.128 94.5275L516.538 93.307C516.359 93.2251 516.214 93.1609 516.124 93.1249C514.841 92.6133 513.788 92.5575 512.074 93.047C510.749 93.4252 509.33 95.4929 507.96 98.9252C507.712 99.5472 507.47 100.197 507.21 100.932L506.302 103.585C505.897 104.761 502.951 116.487 502.853 116.891L502.37 118.723C502.056 119.898 501.756 120.984 501.465 121.998C501.27 122.677 501.057 123.348 500.815 124.056L500.628 124.594C500.386 125.281 500.17 125.891 499.978 126.433C498.626 130.249 498.462 130.713 498.567 131.105C498.581 131.159 498.601 131.212 498.623 131.272C498.656 131.36 498.695 131.464 498.732 131.611L498.745 131.664C499.569 135.231 501.852 136.703 508.35 138.361L514.246 139.816C517.211 140.582 519.79 140.422 523.821 139.528L526.376 138.949C528.078 138.572 528.509 138.524 529.489 138.485C531.453 138.406 533.026 138.926 534.254 140.247C536.049 142.179 536.216 144.38 535.638 150.626L535.339 153.773L535.269 154.654C534.963 158.803 535.205 161.375 536.234 163.111L536.556 163.632C536.863 164.143 537.328 164.956 537.786 165.767L539.247 168.391L539.441 168.728C541.391 172.087 543.001 173.97 544.711 174.621L544.894 174.686C547.082 175.403 549.786 173.98 553.275 169.447L553.728 168.859C554.256 168.205 554.795 167.794 557.277 166.257L561.108 163.902L561.57 163.612C563.964 162.094 565.372 160.965 565.685 160.326C569.35 152.846 571.686 141.168 570.981 127.894C570.892 126.23 570.007 123.68 568.308 120.321L568.105 119.924L568.012 119.871C564 117.591 561.082 115.425 559.245 113.336L559.03 113.086C557.148 110.846 555.255 107.192 553.305 102.09C553.009 101.316 553.397 100.449 554.171 100.153C554.945 99.8573 555.812 100.245 556.107 101.019C557.948 105.835 559.704 109.225 561.326 111.155C562.821 112.934 565.404 114.9 569.063 117.015L569.962 117.526L570.352 117.744L570.559 118.14C572.707 122.242 573.853 125.409 573.977 127.735C574.708 141.516 572.27 153.703 568.379 161.646C567.719 162.993 566.098 164.292 563.177 166.145L562.449 166.601L559.348 168.506C556.771 170.098 556.255 170.482 555.904 170.947C551.617 176.63 547.686 178.758 543.96 177.536C541.167 176.621 539.099 174.19 536.624 169.849ZM581.984 79.8746C581.232 79.5275 580.341 79.8559 579.994 80.6081C579.244 82.2328 578.073 83.2529 576.396 83.7479C575.193 84.1029 573.847 84.3077 572.2 84.4152C571.624 84.4528 571.131 84.4752 570.393 84.4963L567.86 84.561C563.801 84.6932 562.033 85.0364 560.26 86.3133C557.909 88.0068 556.923 93.4194 557.748 96.537L557.792 96.7075C557.821 96.825 557.851 96.9506 557.883 97.088L557.983 97.5398C557.99 97.5695 558.013 97.6776 558.044 97.8276C558.115 98.1598 558.228 98.6971 558.302 99.0414L558.443 99.6717C558.57 100.216 558.695 100.701 558.834 101.175C559.391 103.066 560.127 104.598 561.209 105.86C561.359 106.034 561.777 106.79 562.237 107.656L563.812 110.665C565.086 112.909 566.41 114.541 568.084 115.632C568.79 116.092 569.435 116.282 570.647 116.5L571.185 116.599C572.168 116.782 572.633 116.898 573.217 117.127L573.672 117.311C574.129 117.486 574.667 117.615 575.446 117.75L576.002 117.842C576.005 117.843 577.324 118.043 578.07 118.162L578.877 118.3C579.647 118.44 580.331 118.59 580.981 118.766C581.616 118.937 582.204 119.131 582.75 119.351L583.096 119.487C583.65 119.695 584.111 119.825 584.926 120.016L585.68 120.191C586.026 120.272 586.272 120.336 586.492 120.405L586.749 120.491C587.716 120.837 588.534 121.444 589.561 122.715C590.92 124.398 590.92 125.187 589.874 125.91C589.193 126.381 589.023 127.315 589.494 127.997C589.965 128.678 590.899 128.849 591.581 128.377C594.246 126.534 594.246 123.742 591.894 120.83C590.534 119.146 589.267 118.207 587.761 117.667C587.46 117.559 587.184 117.475 586.84 117.386L586.389 117.276L585.453 117.058C584.869 116.918 584.527 116.818 584.139 116.673L583.47 116.413C582.927 116.211 582.36 116.031 581.764 115.87C580.88 115.631 579.962 115.439 578.906 115.259L576.03 114.806C575.347 114.689 574.929 114.589 574.689 114.487C573.759 114.095 573.19 113.929 572.021 113.704L570.98 113.511C570.286 113.38 569.967 113.279 569.722 113.119C568.527 112.34 562.122 101.72 561.713 100.328C561.56 99.8103 561.423 99.262 561.277 98.6023L560.859 96.6449C560.821 96.4781 560.786 96.3247 560.751 96.1803L560.648 95.7694C560.107 93.7246 560.863 89.5765 562.014 88.7475C563.175 87.9109 564.683 87.6524 568.385 87.5467L570.5 87.4945C571.262 87.4726 571.781 87.449 572.395 87.4089L572.942 87.3691C574.556 87.2388 575.945 87.0089 577.245 86.6251C579.755 85.8843 581.607 84.2711 582.718 81.8651C583.065 81.1129 582.737 80.2218 581.984 79.8746Z",
                fill: "#00160A",
              }),
              Object(r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d:
                  "M231.55 235.827C232.102 234.745 232.572 233.802 233.228 233.014C233.892 232.216 234.731 231.562 235.522 230.877C235.6 230.809 236.036 230.979 236.034 231.024C236.021 231.263 235.994 231.573 235.84 231.72C234.665 232.838 234.567 234.322 234.208 235.784C233.813 237.386 234.213 238.641 234.943 239.976C235.43 240.866 235.785 241.844 236.089 242.817C236.73 244.867 237.364 246.924 237.876 249.008C238.222 250.414 238.541 251.87 238.554 253.306C238.622 260.547 238.583 267.788 238.586 275.03C238.588 278.729 238.536 282.431 238.644 286.127C238.68 287.333 239.333 288.523 239.354 289.726C239.37 290.699 238.882 291.687 238.561 292.65C238.515 292.787 238.02 292.947 237.948 292.877C237.439 292.376 236.588 291.824 236.579 291.277C236.514 287.022 236.677 282.765 236.634 278.511C236.615 276.591 236.173 274.678 236.125 272.757C236.013 268.281 236.516 263.725 235.827 259.35C235.288 255.932 235.419 252.677 235.472 249.316C235.484 248.561 233.379 247.62 232.123 247.038C230.491 246.281 229.454 247.293 228.68 248.65C228.61 248.773 228.317 248.833 228.317 248.923C228.279 256.829 228.229 264.735 228.26 272.641C228.269 274.929 228.532 277.216 228.645 279.505C228.687 280.362 228.596 280.807 229.913 280.607C232.138 280.268 235.061 283.556 234.416 285.434C233.92 286.88 233.022 288.187 232.524 289.632C231.399 292.895 228.942 296.049 230.025 299.592C230.849 302.283 232.631 304.798 234.45 307.012C235.175 307.894 237.159 307.707 238.545 308.096C239.013 308.229 239.558 308.556 239.771 308.953C239.908 309.214 239.609 309.892 239.308 310.124C239.126 310.265 238.565 309.901 238.171 309.772C237.525 309.561 236.889 309.251 236.226 309.172C233.108 308.812 232.935 308.622 231.518 305.15C231.01 303.905 230.058 302.845 229.518 301.61C229.009 300.443 228.721 299.17 228.438 297.92C228.166 296.715 227.804 295.466 227.883 294.263C227.976 292.847 228.389 291.417 228.874 290.069C229.307 288.866 230.05 287.777 230.59 286.607C230.652 286.472 230.332 286.081 230.108 285.922C229.987 285.836 229.655 285.928 229.487 286.042C227.873 287.143 227.105 288.919 226.084 290.476C225.748 290.988 225.851 291.789 225.757 292.458C225.617 293.459 225.349 294.463 225.371 295.461C225.414 297.305 225.208 299.313 225.859 300.954C227.213 304.364 228.524 307.964 231.287 310.501C232.303 311.436 233.992 311.883 235.686 312.11C237.919 312.408 240.034 311.763 242.223 312.011C243.223 312.127 244.311 311.254 245.358 311.258C246.634 311.262 247.633 310.563 248.762 310.381C250.053 310.17 251.118 309.615 252.243 309.081C254.078 308.212 256.07 307.591 257.745 306.487C259.234 305.502 260.371 303.99 261.688 302.737C263.719 300.801 265.433 298.663 266.798 296.172C267.399 295.075 268.351 294.242 267.959 292.853C267.897 292.637 267.743 292.292 267.613 292.283C267.323 292.263 266.928 292.325 266.739 292.516C262.434 296.86 258.236 301.315 253.808 305.531C252.613 306.664 250.747 307.107 249.167 307.823C248.286 308.22 247.345 308.477 246.46 308.866C244.535 309.71 243.007 308.535 241.366 307.922C241.443 307.753 241.487 307.467 241.601 307.434C244.274 306.722 246.985 306.131 249.623 305.308C250.843 304.926 251.983 304.189 253.052 303.458C254.089 302.75 254.946 301.786 255.955 301.032C259.727 298.21 262.814 294.89 264.291 290.278C264.69 289.03 267.376 288.238 268.921 288.699C269.851 288.977 270.915 288.953 271.733 289.403C272.257 289.692 272.82 290.667 272.717 291.212C272.168 294.121 270.344 296.277 268.309 298.347C266.957 299.722 266.122 301.624 264.716 302.923C262.335 305.125 259.849 307.302 257.104 308.998C254.329 310.716 251.249 311.994 248.185 313.157C245.99 313.989 243.627 314.606 241.296 314.8C237.317 315.135 233.401 314.817 229.872 312.454C227.661 310.972 226.17 308.92 225.02 306.702C224.374 305.46 224.994 303.59 224.429 302.264C223.309 299.636 223.102 296.939 223.338 294.23C223.498 292.381 224.644 290.586 224.65 288.765C224.658 286.72 226.162 285.715 226.819 284.171C226.951 283.86 226.598 283.374 226.596 282.969C226.578 278.348 226.587 273.727 226.583 269.106C226.582 266.78 226.727 264.438 226.501 262.134C226.369 260.794 225.539 259.537 225.209 258.197C225.042 257.515 225.327 256.733 225.335 255.995C225.358 253.903 225.153 251.788 225.391 249.723C225.69 247.124 226.414 244.577 226.806 241.985C227.026 240.536 226.947 239.043 226.998 237.57C227.098 234.672 227.691 231.81 229.71 229.726C231.285 228.1 233.17 226.563 235.784 226.556C236.426 226.554 237.303 225.393 237.659 225.575C238.471 225.988 239.259 226.815 239.578 227.655C239.719 228.029 238.81 228.998 238.19 229.42C237.086 230.169 235.796 230.143 234.448 230.085C232.234 229.989 230.214 232.887 229.36 235.431C228.659 237.517 229.731 239.376 229.254 241.364C229.112 241.955 230.279 242.876 230.89 243.609C230.954 243.686 231.52 243.51 231.521 243.447C231.535 242.193 231.621 240.921 231.441 239.689C231.271 238.523 230.485 237.352 231.942 236.469C231.811 236.324 231.681 236.179 231.55 235.827Z",
                fill: "#FFB61D",
              }),
              Object(r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d:
                  "M313.487 330.592C313.097 332.706 312.684 334.61 312.342 336.522C312.286 336.84 312.633 337.209 312.646 337.56C312.75 340.569 312.2 343.544 312.104 346.553C312.057 347.997 312.185 349.578 311.789 350.997C311.297 352.756 312.007 355.065 309.756 356.099C308.888 356.497 307.612 357.25 307.105 356.927C306.123 356.302 304.492 355.959 304.749 354.03C304.976 352.334 304.501 350.521 304.862 348.878C305.48 346.068 304.824 343.234 305.308 340.503C305.603 338.847 305.284 337.196 305.668 335.632C306.288 333.108 306.195 330.538 306.529 328.009C306.846 325.605 307.037 323.192 307.352 320.801C307.677 318.326 307.865 315.843 308.201 313.389C308.501 311.192 308.45 308.866 309.083 306.834C309.644 305.032 308.329 302.956 310.085 301.401C310.326 301.187 309.696 300.173 309.793 299.583C310.592 294.676 309.966 289.739 310.217 284.825C310.235 284.478 310.783 283.98 311.176 283.863C312.413 283.497 313.687 283.219 314.965 283.046C315.262 283.005 315.93 283.518 315.925 283.767C315.849 287.985 315.606 292.202 315.586 296.419C315.571 299.464 315.906 302.509 315.937 305.555C315.953 307.037 315.593 308.522 315.468 310.012C315.338 311.56 315.821 313.033 314.91 314.684C314.223 315.926 314.826 317.846 314.711 319.451C314.496 322.456 314.314 325.477 313.79 328.431C313.68 329.056 313.445 329.702 313.487 330.592ZM307.693 352.317C308.373 353.343 308.337 353.314 308.963 352.532C309.702 351.61 309.142 350.534 309.383 349.598C310.031 347.082 309.87 344.504 310.176 341.967C310.422 339.931 310.772 337.9 310.882 335.859C311.023 333.223 310.751 330.55 311.071 327.943C311.346 325.704 311.26 323.457 312.053 321.181C312.857 318.872 312.512 316.162 312.654 313.625C312.689 313.004 312.425 312.239 312.702 311.788C313.643 310.252 312.8 308.651 313.032 307.103C313.063 306.896 312.537 306.611 312.269 306.358C312.115 306.652 311.866 306.929 311.821 307.24C311.524 309.263 311.189 311.283 311.024 313.319C310.804 316.021 310.727 318.74 310.591 321.45C310.581 321.657 310.676 321.93 310.577 322.063C309.455 323.565 310.325 325.357 309.817 327.041C309.174 329.168 309.462 331.576 309.349 333.865C309.346 333.935 309.361 334.006 309.347 334.072C309.008 335.673 308.582 337.266 308.352 338.885C308.168 340.184 308.928 341.372 307.876 342.882C307.077 344.032 307.777 346.176 307.665 347.864C307.598 348.887 307.192 349.884 307.075 350.91C307.041 351.212 307.474 351.572 307.693 352.317ZM313.073 295.624C313.117 294.476 313.164 293.328 313.202 292.181C313.207 292.018 313.168 291.714 313.147 291.714C312.886 291.711 312.408 291.713 312.394 291.789C312.184 292.936 311.992 294.092 311.92 295.253C311.909 295.425 312.535 295.637 313.073 295.624Z",
                fill: "#00160A",
              }),
              Object(r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d:
                  "M232.275 301.314C232.183 300.52 232.194 299.831 232.205 299.141C232.77 299.303 233.401 299.355 233.889 299.647C236.454 301.183 238.971 302.8 241.535 304.337C241.983 304.605 242.573 304.667 243.109 304.744C243.521 304.803 243.951 304.734 244.373 304.722C243.969 305.069 243.486 305.775 243.174 305.704C241.219 305.273 238.892 306.863 237.266 304.664C237.234 304.621 237.054 304.634 236.985 304.682C236.254 305.193 235.435 306.197 234.618 305.226C233.684 304.114 233.109 302.7 232.275 301.314Z",
                fill: "#00160A",
              }),
            ],
          });
        },
        Or = n.p + "static/media/TaskBoard.2760d8ba.png",
        gr = function () {
          var e,
            t = s.useMutation(Te, e),
            n = Object(pt.a)(t, 1)[0],
            C = Object(dn.a)(),
            a = GC().routeToProject,
            i = (function () {
              var e = Object(ln.a)(
                sn.a.mark(function e() {
                  var t, r;
                  return sn.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), n();
                        case 2:
                          (r = e.sent),
                            (
                              null === (t = r.data) || void 0 === t
                                ? void 0
                                : t.createGuest.error
                            )
                              ? C({
                                  title: "Guest Creation Failed\ud83d\ude02",
                                  description: "".concat(
                                    r.data.createGuest.error.message
                                  ),
                                  duration: 5e3,
                                  status: "error",
                                })
                              : a();
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return Object(r.jsxs)(L.a, {
            width: "100%",
            children: [
              Object(r.jsxs)(L.a, {
                position: "relative",
                width: "100%",
                height: "50rem",
                overflow: "hidden",
                backgroundImage:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.03) 0%, rgba(255, 255, 255, 0) 86.41%)",
                children: [
                  Object(r.jsxs)(L.a, {
                    width: "60rem",
                    height: "100%",
                    position: "absolute",
                    top: "0",
                    right: "0",
                    children: [
                      Object(r.jsx)(sr, {}),
                      Object(r.jsx)(lr, {
                        children: Object(r.jsx)(tr.a, {
                          src: Lr,
                          alt: "background_shape_image",
                          size: "45rem",
                          position: "absolute",
                          right: "-25rem",
                          bottom: "0",
                          transform: "rotate(-2deg)",
                        }),
                      }),
                      Object(r.jsx)(tr.a, {
                        src: jr,
                        alt: "background_shape_image",
                        position: "absolute",
                        right: "3rem",
                        top: "9rem",
                        boxSize: "4rem",
                        objectFit: "contain",
                      }),
                      Object(r.jsx)(tr.a, {
                        src: br,
                        alt: "background_shape_image",
                        position: "absolute",
                        right: "14rem",
                        bottom: "-4.5rem",
                        boxSize: "12rem",
                        objectFit: "contain",
                      }),
                      Object(r.jsx)(tr.a, {
                        src: br,
                        alt: "background_shape_image",
                        position: "absolute",
                        right: "9rem",
                        bottom: "-3rem",
                        boxSize: "12rem",
                        objectFit: "contain",
                      }),
                    ],
                  }),
                  Object(r.jsxs)(L.a, {
                    display: "flex",
                    flexDir: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    py: 8,
                    px: 20,
                    children: [
                      Object(r.jsx)(A.a, {
                        fontFamily: "title",
                        fontSize: "4xl",
                        fontWeight: "normal",
                        color: "achromatic.700",
                        children: "Retrievo",
                      }),
                      Object(r.jsx)(l.b, {
                        to: "/auth/sign-in",
                        children: Object(r.jsx)(fn.a, {
                          border: "2px solid white",
                          bgColor: "white",
                          color: "#7499E",
                          borderRadius: 5,
                          w: 170,
                          py: 5,
                          mr: 3,
                          children: "SignIn",
                        }),
                      }),
                    ],
                  }),
                  Object(r.jsxs)(L.a, {
                    mt: 150,
                    width: "80%",
                    maxWidth: 1200,
                    display: "flex",
                    justifyContent: "center",
                    marginX: "auto",
                    position: "relative",
                    children: [
                      Object(r.jsx)(tr.a, {
                        src:
                          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAAC6CAYAAADcfM1gAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTEyLTE0VDAzOjI4OjE0KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTEyLTE0VDAzOjI5OjMyKzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMi0xNFQwMzoyOTozMiswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5ODlkNmY3NS03MWRmLTk3NGQtODNkNi0wNDIxNWIxMTE0YWUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1ZGFiN2M5ZC0zNzg2LWQ3NDUtYTA1Zi1lYTVmNzQ3YzE0YjQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiZDQwNTUzNC00NjI1LWU5NGMtYTk2Ni02MzA2NjMyMGUxODYiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmJkNDA1NTM0LTQ2MjUtZTk0Yy1hOTY2LTYzMDY2MzIwZTE4NiIgc3RFdnQ6d2hlbj0iMjAyMC0xMi0xNFQwMzoyODoxNCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5ODlkNmY3NS03MWRmLTk3NGQtODNkNi0wNDIxNWIxMTE0YWUiIHN0RXZ0OndoZW49IjIwMjAtMTItMTRUMDM6Mjk6MzIrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz528WIhAAAKlklEQVR4nO3dW6wdVR3H8e+qBbwharhYkEusWqI2IaBWUjRddqVgbalQejXGmGg0JoYHjZoYow9GTYwJDyb1QY0PtrSnhdKk3Mo0UwMFq4FGJViClAjSShtBC2hp6xkf1mzPbu2BM/usmTVr5vdJ+kLOXv/18Mti9vxn/tsURYFISmbE3oBIVQqtJEehleQotJIchVaSo9BKchRaSY5CK8lRaCU5Cq0kR6GV5Ci0khyFVpKj0EpyFFpJjkIryVFoJTkKrSRHoZXk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",
                        alt: "background_shape_image",
                        width: "12rem",
                        position: "absolute",
                        left: "-16rem",
                        bottom: "-7rem",
                        objectFit: "contain",
                        transform: "rotate(13deg)",
                      }),
                      Object(r.jsx)(tr.a, {
                        src: ur,
                        alt: "background_shape_image",
                        boxSize: "18rem",
                        position: "absolute",
                        left: "13rem",
                        top: "-13rem",
                        objectFit: "contain",
                      }),
                      Object(r.jsxs)(L.a, {
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        width: "100%",
                        maxW: "80vw",
                        children: [
                          Object(r.jsx)(er.a, {
                            direction: "down",
                            duration: 1e3,
                            children: Object(r.jsxs)(L.a, {
                              mr: "3rem",
                              children: [
                                Object(r.jsxs)(gt.a, {
                                  flexDir: "row",
                                  children: [
                                    Object(r.jsx)(A.a, {
                                      fontSize: "5xl",
                                      color: "achromatic.800",
                                      fontWeigh: "bold",
                                      mr: 3,
                                      zIndex: 99,
                                      children: "Powerhouse",
                                    }),
                                    Object(r.jsx)(A.a, {
                                      fontSize: "5xl",
                                      color: "achromatic.800",
                                      fontWeight: "normal",
                                      zIndex: 99,
                                      children: "for",
                                    }),
                                  ],
                                }),
                                Object(r.jsx)(A.a, {
                                  fontSize: "5xl",
                                  color: "achromatic.800",
                                  fontWeight: "normal",
                                  zIndex: 99,
                                  children: "your work flow",
                                }),
                                Object(r.jsx)(A.a, {
                                  fontSize: "5xl",
                                  color: "achromatic.800",
                                  fontWeight: "normal",
                                  zIndex: 99,
                                  children: "management",
                                }),
                                Object(r.jsx)(xt, {
                                  mt: 5,
                                  mb: 7,
                                  children:
                                    "Let Retrievo handle legworks so you can focus on actual Project",
                                }),
                                Object(r.jsx)(fn.a, {
                                  border: "2px solid #67499E",
                                  bgColor: "white",
                                  color: "#67499E",
                                  borderRadius: 5,
                                  w: 170,
                                  py: 5,
                                  mr: 3,
                                  onClick: i,
                                  children: "Take tour",
                                }),
                                Object(r.jsx)(l.b, {
                                  to: "/auth/register",
                                  children: Object(r.jsx)(fn.a, {
                                    border: "2px solid #31D5BF",
                                    bgColor: "primary.200",
                                    color: "white",
                                    borderRadius: 5,
                                    w: 170,
                                    py: 5,
                                    children: "Register",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          Object(r.jsx)(L.a, {
                            zIndex: "999",
                            borderRadius: "1rem",
                            overflow: "hidden",
                            mt: "-3rem",
                            boxShadow: "xl",
                            children: Object(r.jsx)(Cr.a, {
                              url:
                                "https://retrievo-api-graphqi.s3.ap-northeast-2.amazonaws.com/board.mp4",
                              playing: !0,
                              loop: !0,
                              width: "630",
                              height: "450",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(r.jsxs)(L.a, {
                backgroundImage:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.03) 0%, rgba(255, 255, 255, 0) 86.41%)",
                pt: 150,
                position: "relative",
                children: [
                  Object(r.jsx)(tr.a, {
                    src: jr,
                    alt: "Task_example_image",
                    width: "4rem",
                    position: "absolute",
                    top: "4rem",
                    right: "30%",
                    objectFit: "contain",
                  }),
                  Object(r.jsxs)(L.a, {
                    maxWidth: 1200,
                    width: "80%",
                    height: 700,
                    marginX: "auto",
                    display: "flex",
                    justifyContent: "space-between",
                    children: [
                      Object(r.jsxs)(L.a, {
                        mr: 50,
                        position: "relative",
                        children: [
                          Object(r.jsxs)(L.a, {
                            position: "absolute",
                            top: "rem",
                            left: "-10rem",
                            zIndex: "-1",
                            children: [
                              Object(r.jsx)(tr.a, {
                                src: dr,
                                alt: "Task_example_image",
                                width: "12rem",
                                transform: "rotate(120deg)",
                                objectFit: "contain",
                              }),
                              Object(r.jsx)(tr.a, {
                                src:
                                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAAtCAYAAADIprc/AAAEL0lEQVR4nO2c+6sVVRTHP5rdzEp6YmQGllQYl15EsdoVEVJQEUZRFBUV0YPK3v0L0VPsYYFF9AIxKgKlQKHHZvUAJazoQQZ2C1FKKtNKy2LJOnHOuXfsnHPnseee8/nlMHPumf2d756Z795rZi5ZBJGZmV8OyIVJY20kiMwCvgO2AO8Dj0fVtwaW50uW+QuBBW2rtwOfAM8Bz0bVv2q2r8mRZf564IjdiN0JfAMsAx6Nqpv7w658GWV+EJkG/JbVMRlsAFYAD0bVr2uz9xUzlvn3Aw+MQ9YvnhMLo+qquhpTBmOZvxYYzqntP4E1wBLghUFOtNJifhCZ7MG6RwFtWU58BSwFHouqvxbQRq1oN/8K4OWSduAHYLnnxLp629gb7ea/C5xZgY6fgXf8jHivgvYrod38bcDeFWv6A1gNPGNnYVTdWbGewvjP/CASfJSSEn8DXwKvAE9MtJxoNv81YH61cnbLP8D3wJvAQ1F1fcJaO6LZfJulHpC23BY2e05YR3yYkK6O2WV+EDnKywV15XfgY8+JpXXJiYb5i4GbqpeTC5YTXwAveTV2W6pCG+aPAIdXLyd3LCdGPCdsPjGSkrhJQWSKn7ZTEtBTND8Bq7wS+1HVYhpHvlUybwauAo7rk46wA8464KmouqwKAVn1/Eu9M04FppUvq3Ss4Pc58CKwuKyc+N+afRCxDrgLOAc4qHRbysdywuYQr/swdkNRCrq5YdK4t3svcBEwq9vf15QfgZXAw1F1dZ670LN5nhO3AVcCcwsqQ6fGVuAD4Mmo+sZ4teVy5Pp9gMuBG4FTEijOlYHlxKfA88DTUXV7t20WctkIIgLcDZxds5JFr1hOfAtYfeyRqLqxk+0Ufs0OIrM9Jy4EZvZJTmwC3vacWJv1R6UaEUSm+/NAdok6pk9ywp4EUWBRVF3e/EVlR6HnhE3qbgBOBqZWpaVEdviDZ5YTS5K5BASRs4A7AfvcPwFJRXNSktdfL3HfB1wAHJaApLzZGlX3TT78goidBXcAlwFHA5MTkDVeVkbVebUaeXgF9lrgOuBEYK8EZPXCfJuk1XrYF0TmAbf74y7TE5DUCTui6hATacwdRI71+YRN7GYnICmLNVHVRncTc8ITRA70SqyVxucklhMLouoi+mG26TlxvWeF5cRQhXKsDDG1UQfqh6l+C0HkPK/GngHsV3Lz66LqnMZCP9wubMHfLdv1flkQmevzCeuQGSU0/2rzQt8d+VkEkYO9EnsJcGRBOTEjqm5qLAzMH4MgMuT3Jq4Gjgf2zGGzG6Pqoc0rBuZ3QBCxcvitwOnAPj1uxt7MuaZ5xcD8LgkiJ/jl6VzgkC5+PRxVP2teMTB/HAQRC+l7gIt9Ypfl55aoOmoGPjA/JzwnbvGcGG4bSa6Ique3tzQwvyCCiI2a7OHj02wENerfJwD/AiY7HbwM77p5AAAAAElFTkSuQmCC",
                                alt: "Task_example_image",
                                width: "6rem",
                                position: "absolute",
                                right: "0",
                                top: "0",
                                transform: "rotate(120deg)",
                                objectFit: "contain",
                              }),
                            ],
                          }),
                          Object(r.jsx)(tr.a, {
                            src:
                              "data:image/png;base64,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",
                            alt: "Task_example_image",
                            width: "10rem",
                            position: "absolute",
                            bottom: "4rem",
                            right: "-6rem",
                            zIndex: "-1",
                            objectFit: "contain",
                          }),
                          Object(r.jsx)(tr.a, {
                            src: hr,
                            alt: "Task_example_image",
                            width: "25rem",
                            objectFit: "contain",
                            borderRadius: "md",
                            boxShadow: "2xl",
                          }),
                          Object(r.jsx)(L.a, {
                            top: "5rem",
                            right: "-3rem",
                            position: "absolute",
                            children: Object(r.jsxs)(er.a, {
                              direction: "down",
                              duration: 1e3,
                              children: [
                                Object(r.jsx)(Y.a, {
                                  display: "block",
                                  marginX: "auto",
                                  size: "xl",
                                  src:
                                    "https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
                                }),
                                Object(r.jsx)(xt, {
                                  display: "inline-block",
                                  px: 6,
                                  py: ".1rem",
                                  mt: 2,
                                  color: "achromatic.100",
                                  borderRadius: "full",
                                  bgColor: "primary.200",
                                  children: "Paul Kim",
                                }),
                              ],
                            }),
                          }),
                          Object(r.jsx)(L.a, {
                            bottom: "8rem",
                            left: "-6rem",
                            position: "absolute",
                            children: Object(r.jsxs)(er.a, {
                              direction: "down",
                              duration: 1e3,
                              children: [
                                Object(r.jsx)(Y.a, {
                                  display: "block",
                                  marginX: "auto",
                                  size: "xl",
                                  src:
                                    "https://i.ibb.co/bKXpVR6/gnome-shell-screenshot-832-MV0.png",
                                }),
                                Object(r.jsx)(xt, {
                                  display: "inline-block",
                                  px: 6,
                                  py: ".1rem",
                                  mt: 2,
                                  color: "achromatic.100",
                                  borderRadius: "full",
                                  bgColor: "#67499E",
                                  children: "Hailey Song",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      Object(r.jsxs)(L.a, {
                        height: "6rem",
                        width: 500,
                        position: "relative",
                        mt: "10rem",
                        children: [
                          Object(r.jsxs)(L.a, {
                            position: "absolute",
                            bottom: "0",
                            width: "100%",
                            children: [
                              Object(r.jsx)(L.a, {
                                bgColor: "primary.200",
                                w: 450,
                                h: 6,
                                position: "absolute",
                                bottom: "0",
                                left: "3rem",
                              }),
                              Object(r.jsx)(tr.a, {
                                src: mr,
                                alt: "Task_example_image",
                                width: "8rem",
                                objectFit: "contain",
                                right: "0",
                                position: "absolute",
                                top: "-2rem",
                              }),
                            ],
                          }),
                          Object(r.jsx)(er.a, {
                            direction: "down",
                            duration: 1e3,
                            children: Object(r.jsxs)(L.a, {
                              width: "100%",
                              children: [
                                Object(r.jsx)(A.a, {
                                  fontSize: "4xl",
                                  fontWeight: "bold",
                                  children: "Manage your tasks",
                                }),
                                Object(r.jsx)(A.a, {
                                  fontSize: "4xl",
                                  fontWeight: "bold",
                                  children: "with intuitive UI",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(r.jsx)(L.a, {
                backgroundImage:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.03) 0%, rgba(255, 255, 255, 0) 86.41%)",
                h: 800,
                overflow: "hidden",
                children: Object(r.jsxs)(L.a, {
                  maxW: 1200,
                  w: "80%",
                  mx: "auto",
                  pt: 230,
                  display: "flex",
                  justifyContent: "space-between",
                  position: "relative",
                  children: [
                    Object(r.jsx)(tr.a, {
                      src: mr,
                      alt: "Task_example_image",
                      width: "12rem",
                      position: "absolute",
                      top: 120,
                      left: "-10rem",
                      zIndex: "-1",
                      transform: "rotate(35deg)",
                      objectFit: "contain",
                    }),
                    Object(r.jsx)(tr.a, {
                      src:
                        "data:image/png;base64,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",
                      alt: "Task_example_image",
                      width: "10rem",
                      position: "absolute",
                      right: "50%",
                      bottom: "-6rem",
                      objectFit: "contain",
                    }),
                    Object(r.jsx)(tr.a, {
                      src: dr,
                      alt: "Task_example_image",
                      width: "10rem",
                      position: "absolute",
                      top: "-2rem",
                      right: "-10rem",
                      transform: "rotate(20deg)",
                      objectFit: "contain",
                    }),
                    Object(r.jsx)(L.a, {
                      height: 30,
                      width: "100%",
                      mt: 100,
                      mr: 20,
                      children: Object(r.jsxs)(er.a, {
                        direction: "down",
                        duration: 1e3,
                        children: [
                          Object(r.jsxs)(L.a, {
                            position: "relative",
                            children: [
                              Object(r.jsx)(L.a, {
                                bgColor: "primary.200",
                                w: 450,
                                h: 6,
                                position: "absolute",
                                bottom: "-.5rem",
                                right: "0",
                              }),
                              Object(r.jsx)(L.a, {
                                width: "100%",
                                textAlign: "right",
                                position: "absolute",
                                bottom: "0",
                                children: Object(r.jsxs)(er.a, {
                                  direction: "down",
                                  duration: 1e3,
                                  children: [
                                    Object(r.jsx)(A.a, {
                                      fontSize: "4xl",
                                      fontWeight: "bold",
                                      children: "Manage your tasks",
                                    }),
                                    Object(r.jsx)(A.a, {
                                      fontSize: "4xl",
                                      fontWeight: "bold",
                                      children: "with intuitive UI",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          Object(r.jsx)(xt, {
                            textAlign: "right",
                            mt: 8,
                            children:
                              "Data is crucial to every business\u2019s success. Reading data, however, could be a straneous task. Visualize your important data with our powerful, yet human-friendly data report system.",
                          }),
                        ],
                      }),
                    }),
                    Object(r.jsx)(L.a, {
                      children: Object(r.jsx)(Pt.Bar, {
                        data: rr,
                        options: ar,
                        width: 500,
                        height: 400,
                      }),
                    }),
                  ],
                }),
              }),
              Object(r.jsxs)(L.a, {
                width: "full",
                height: 900,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                bg: "#f7f7f7",
                position: "relative",
                overflow: "hidden",
                children: [
                  Object(r.jsx)(tr.a, {
                    src: ur,
                    alt: "background_shape_image",
                    size: "45rem",
                    position: "absolute",
                    bottom: "-5rem",
                    right: "0",
                    transform: "rotate(-10deg)",
                  }),
                  Object(r.jsxs)(gt.a, {
                    flexDir: "column",
                    mt: 180,
                    position: "relative",
                    children: [
                      Object(r.jsxs)(gt.a, {
                        justifyContent: "flex-end",
                        alignItems: "center",
                        bgColor: "#DCE0E0",
                        width: "50rem",
                        py: 2,
                        px: 3,
                        borderTopRadius: "xl",
                        children: [
                          Object(r.jsx)(T.a, {
                            "aria-label": "decoration button",
                            bgColor: "yellow.300",
                            size: "xs",
                            borderRadius: "full",
                            mr: 2,
                          }),
                          Object(r.jsx)(T.a, {
                            "aria-label": "decoration button",
                            bgColor: "red.500",
                            size: "xs",
                            borderRadius: "full",
                          }),
                        ],
                      }),
                      Object(r.jsx)(tr.a, {
                        src: pr,
                        alt: "background_shape_image",
                        size: "45rem",
                        position: "absolute",
                        left: "-40rem",
                        bottom: "-20rem",
                      }),
                      Object(r.jsx)(tr.a, {
                        src: Or,
                        alt: "Board_example_image",
                        width: "50rem",
                        h: "35rem",
                        objectFit: "contain",
                        borderBottomRadius: "xl",
                        boxShadow: "2xl",
                        bgColor: "white",
                        zIndex: 999,
                      }),
                      Object(r.jsx)(tr.a, {
                        src:
                          "data:image/png;base64,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",
                        alt: "background_shape_image",
                        size: "45rem",
                        position: "absolute",
                        right: "-6rem",
                        bottom: "4rem",
                      }),
                    ],
                  }),
                  Object(r.jsx)(gt.a, {
                    flexDir: "column",
                    ml: 20,
                    mt: 300,
                    children: Object(r.jsxs)(L.a, {
                      position: "relative",
                      children: [
                        Object(r.jsx)(tr.a, {
                          src: jr,
                          alt: "background_shape_image",
                          size: "45rem",
                          position: "absolute",
                          right: "-6rem",
                          bottom: "4rem",
                        }),
                        Object(r.jsxs)(L.a, {
                          position: "relative",
                          w: 500,
                          children: [
                            Object(r.jsx)(L.a, {
                              w: 450,
                              h: 8,
                              bg: "primary.200",
                              color: "transparent",
                              position: "absolute",
                              top: 6,
                              children: "dummy",
                            }),
                            Object(r.jsxs)(er.a, {
                              direction: "down",
                              duration: 1e3,
                              children: [
                                Object(r.jsx)(A.a, {
                                  fontSize: "4xl",
                                  fontWeight: "bold",
                                  children: "Intuitive Task Management",
                                }),
                                Object(r.jsx)(xt, {
                                  mt: 10,
                                  children:
                                    "Manage your tasks however you want",
                                }),
                                Object(r.jsx)(xt, {
                                  children:
                                    "with our flexible, intuitive boards.",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              Object(r.jsx)(L.a, {
                width: "full",
                height: 700,
                display: "flex",
                bg: "white",
                zIndex: 999,
                position: "relative",
                children: Object(r.jsxs)(gt.a, {
                  flexDir: "column",
                  mt: "10rem",
                  position: "relative",
                  width: "80%",
                  maxW: 1200,
                  mx: "auto",
                  children: [
                    Object(r.jsxs)(er.a, {
                      direction: "down",
                      duration: 1e3,
                      children: [
                        Object(r.jsx)(A.a, {
                          fontSize: "5xl",
                          color: "achromatic.800",
                          fontWeight: "normal",
                          zIndex: 99,
                          children: "Don\u2019t EVER pay upfront.",
                        }),
                        Object(r.jsx)(xt, {
                          mt: 3,
                          mb: 12,
                          fontSize: "3xl",
                          children:
                            "Make informed decision with our product tour",
                        }),
                        Object(r.jsx)(fn.a, {
                          border: "2px solid #31D5BF",
                          bgColor: "white",
                          color: "#31D5BF",
                          borderRadius: 5,
                          w: 170,
                          py: 5,
                          onClick: i,
                          children: "Take tour",
                        }),
                      ],
                    }),
                    Object(r.jsx)(L.a, {
                      position: "absolute",
                      top: "-2rem",
                      left: "30rem",
                      children: Object(r.jsx)(xr, {}),
                    }),
                  ],
                }),
              }),
              Object(r.jsxs)(L.a, {
                width: "full",
                height: 100,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                bg: "achromatic.300",
                px: "10rem",
                children: [
                  Object(r.jsx)(xt, { children: "RPQ Team" }),
                  Object(r.jsx)(A.a, {
                    fontFamily: "title",
                    fontSize: "4xl",
                    fontWeight: "normal",
                    color: "achromatic.700",
                    children: "Retrievo",
                  }),
                ],
              }),
            ],
          });
        },
        fr = function () {
          return Object(r.jsx)(gt.a, {
            w: "100%",
            h: "100vh",
            bgColor: "achromatic.200",
            flexDir: "column",
            justifyContent: "center",
            alignItems: "center",
            children: Object(r.jsxs)(L.a, {
              borderTopRadius: 10,
              borderBottomRadius: 20,
              boxShadow: "xl",
              children: [
                Object(r.jsxs)(gt.a, {
                  justifyContent: "flex-end",
                  alignItems: "center",
                  bgColor: "primary.200",
                  w: "45rem",
                  py: 2,
                  px: 3,
                  borderTopRadius: 10,
                  children: [
                    Object(r.jsx)(Sn, {
                      "aria-label": "decoration button",
                      buttonColor: Mn.yellow,
                      size: "xs",
                      mr: 2,
                    }),
                    Object(r.jsx)(Sn, {
                      "aria-label": "decoration button",
                      buttonColor: Mn.red,
                      size: "xs",
                    }),
                  ],
                }),
                Object(r.jsxs)(gt.a, {
                  bgColor: "white",
                  w: "45rem",
                  h: "32rem",
                  flexDir: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomRadius: 20,
                  children: [
                    Object(r.jsx)(xt, { children: "Woof Woof!" }),
                    Object(r.jsx)(I, {
                      headingType: C.auth,
                      children: "Page Not Found",
                    }),
                    Object(r.jsx)(qC, {}),
                    Object(r.jsx)(l.b, {
                      to: "/",
                      children: Object(r.jsx)(wn, {
                        px: 20,
                        buttontype: _t.primary,
                        children: "Back to Home",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        Mr = function () {
          return Object(r.jsx)(gt.a, {
            w: "100%",
            h: "100vh",
            bgColor: "achromatic.200",
            flexDir: "column",
            justifyContent: "center",
            alignItems: "center",
            children: Object(r.jsxs)(L.a, {
              borderTopRadius: 10,
              borderBottomRadius: 20,
              boxShadow: "xl",
              children: [
                Object(r.jsxs)(gt.a, {
                  justifyContent: "flex-end",
                  alignItems: "center",
                  bgColor: "primary.200",
                  w: "45rem",
                  py: 2,
                  px: 3,
                  borderTopRadius: 10,
                  children: [
                    Object(r.jsx)(Sn, {
                      "aria-label": "decoration button",
                      buttonColor: Mn.yellow,
                      size: "xs",
                      mr: 2,
                    }),
                    Object(r.jsx)(Sn, {
                      "aria-label": "decoration button",
                      buttonColor: Mn.red,
                      size: "xs",
                    }),
                  ],
                }),
                Object(r.jsxs)(gt.a, {
                  bgColor: "white",
                  w: "45rem",
                  h: "32rem",
                  flexDir: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomRadius: 20,
                  children: [
                    Object(r.jsx)(xt, { children: "Woof Woof!" }),
                    Object(r.jsx)(I, {
                      headingType: C.auth,
                      children: "Comming Soon",
                    }),
                    Object(r.jsx)(qC, {}),
                  ],
                }),
              ],
            }),
          });
        },
        vr = function (e) {
          var t = Object.assign({}, e);
          return Object(r.jsxs)(r.Fragment, {
            children: [
              Object(r.jsx)(bt, Object(p.a)({}, t)),
              Object(r.jsx)(M, Object(p.a)({}, t)),
              Object(r.jsx)(L.a, {
                display: "flex",
                ml: 210,
                mt: 50,
                children: Object(r.jsx)(Mr, {}),
              }),
            ],
          });
        },
        Zr = function (e) {
          var t = Object.assign({}, e);
          return Object(r.jsxs)(r.Fragment, {
            children: [
              Object(r.jsx)(bt, Object(p.a)({}, t)),
              Object(r.jsx)(M, Object(p.a)({}, t)),
              Object(r.jsx)(L.a, {
                display: "flex",
                ml: 210,
                mt: 50,
                children: Object(r.jsx)(Mr, {}),
              }),
            ],
          });
        },
        Ar = function () {
          return Object(r.jsx)(r.Fragment, {
            children: Object(r.jsx)(d.a, {
              theme: b,
              children: Object(r.jsxs)(u.d, {
                children: [
                  Object(r.jsx)(u.b, { exact: !0, path: "/", component: gr }),
                  Object(r.jsx)(u.b, { path: "/auth/:type", component: UC }),
                  Object(r.jsx)(u.b, {
                    path: "/project/dashboard/:projectId",
                    component: an,
                  }),
                  Object(r.jsx)(u.b, {
                    path: "/project/board/:projectId",
                    component: VC,
                  }),
                  Object(r.jsx)(u.b, {
                    path: "/project/sprint/:projectId",
                    component: _C,
                  }),
                  Object(r.jsx)(u.b, {
                    path: "/project/timeline/:projectId",
                    component: vr,
                  }),
                  Object(r.jsx)(u.b, {
                    path: "/project/calendar/:projectId",
                    component: Zr,
                  }),
                  Object(r.jsx)(u.b, {
                    path: "/project/setting/:projectId",
                    component: Nn,
                  }),
                  Object(r.jsx)(u.b, { path: "/new-project", component: Rn }),
                  Object(r.jsx)(u.b, { path: "/my-profile", component: Tn }),
                  Object(r.jsx)(u.b, { path: "/not-found", component: fr }),
                  Object(r.jsx)(u.a, { path: "*", to: "/not-found" }),
                ],
              }),
            }),
          });
        },
        wr = new s.ApolloClient({
          uri: "https://retrievo.io/graphql",
          cache: new s.InMemoryCache(),
          credentials: "include",
        });
      c.a.render(
        Object(r.jsx)(a.StrictMode, {
          children: Object(r.jsx)(s.ApolloProvider, {
            client: wr,
            children: Object(r.jsx)(l.a, { children: Object(r.jsx)(Ar, {}) }),
          }),
        }),
        document.getElementById("root")
      );
    },
  },
  [[634, 13, 14]],
]);
//# sourceMappingURL=main.6c26d2d7.chunk.js.map
