export type LeaderboardType = 'ranking' | 'rules';

export type Leaderboard = {
    year: number;
	name: string;
    url: string;
    type: LeaderboardType;
};

export type LeaderboardTitle = {
    year: number;
    title: string;
};

export const leaderboardTitles: LeaderboardTitle[] = [
    {
        year: 2026,
        title: "2026 Cornish Tri Leaderboards (after 6 of 7 events):",
    },
    {
        year: 2025,
        title: "2025 Cornish Tri Leaderboards (after 7 of 7 events):",
    },
    {
        year: 2024,
        title: "2024 Cornish Tri Leaderboards (after 7 of 7 events):",
    },
    {
        year: 2023,
        title: "2023 Cornish Tri Leaderboards (after 6 of 6 events):",
    },
    {
        year: 2022,
        title: "2022 Cornish Tri Leaderboards (after 6 of 6 events):",
    },
    {
        year: 2021,
        title: "2021 Cornish Tri Leaderboards (after 5 of 5 events):",
    },
];

export const leaderboards: Leaderboard[] = [
    // {
    //     year: 2026,
    //     name: "Cornish Tri Series - Mini",
    //     url: "",
    //     type: "ranking",
    // },
    // {
    //     year: 2026,
    //     name: "Cornish Tri Series - Super Sprint",
    //     url: "",
    //     type: "ranking",
    // },
    // {
    //     year: 2026,
    //     name: "Cornish Tri Series - Sprint/Olympic",
    //     url: "",
    //     type: "ranking",
    // },
    {
        year: 2026,
        name: "Ranking System - Junior",
        url: "/documents/leaderboards/2026/ranking-junior.pdf",
        type: "rules",
    },
    {
        year: 2026,
        name: "Ranking System - Senior",
        url: "/documents/leaderboards/2026/ranking-senior.pdf",
        type: "rules",
    },
    {
        year: 2025,
        name: "Cornish Tri Series – Mini",
        url: "/documents/leaderboards/2025/mini.pdf",
        type: "ranking",
    },
    {
        year: 2025,
        name: "Cornish Tri Series – Super Sprint",
        url: "/documents/leaderboards/2025/super-sprint.pdf",
        type: "ranking",
    },
    {
        year: 2025,
        name: "Cornish Tri Series – Sprint/Olympic",
        url: "/documents/leaderboards/2025/sprint.pdf",
        type: "ranking",
    },
    {
        year: 2025,
        name: "Ranking System - Junior",
        url: "/documents/leaderboards/2025/ranking-junior.pdf",
        type: "rules",
    },
    {
        year: 2025,
        name: "Ranking System - Senior",
        url: "/documents/leaderboards/2025/ranking-senior.pdf",
        type: "rules",
    },
    {
        year: 2024,
        name: "Cornish Tri Series – Mini",
        url: "/documents/leaderboards/2024/mini.pdf",
        type: "ranking",
    },
    {
        year: 2024,
        name: "Cornish Tri Series – Super Sprint",
        url: "/documents/leaderboards/2024/super-sprint.pdf",
        type: "ranking",
    },
    {
        year: 2024,
        name: "Cornish Tri Series – Sprint/Olympic",
        url: "/documents/leaderboards/2024/sprint.pdf",
        type: "ranking",
    },
    {
        year: 2024,
        name: "Ranking System - Junior",
        url: "/documents/leaderboards/2024/ranking-junior.pdf",
        type: "rules",
    },
    {
        year: 2024,
        name: "Ranking System - Senior",
        url: "/documents/leaderboards/2024/ranking-senior.pdf",
        type: "rules",
    },
    {
        year: 2023,
        name: "Cornish Tri Series – Mini",
        url: "/documents/leaderboards/2023/mini.pdf",
        type: "ranking",
    },
    {
        year: 2023,
        name: "Cornish Tri Series – Super Sprint",
        url: "/documents/leaderboards/2023/super-sprint.pdf",
        type: "ranking",
    },
    {
        year: 2023,
        name: "Cornish Tri Series – Sprint/Olympic",
        url: "/documents/leaderboards/2023/sprint.pdf",
        type: "ranking",
    },
    {
        year: 2023,
        name: "Ranking System - Junior",
        url: "/documents/leaderboards/2023/ranking-junior.pdf",
        type: "rules",
    },
    {
        year: 2023,
        name: "Ranking System - Senior",
        url: "/documents/leaderboards/2023/ranking-senior.pdf",
        type: "rules",
    },
    {
        year: 2022,
        name: "Cornish Tri Series – Mini",
        url: "/documents/leaderboards/2022/mini.pdf",
        type: "ranking",
    },
    {
        year: 2022,
        name: "Cornish Tri Series – Super Sprint",
        url: "/documents/leaderboards/2022/super-sprint.pdf",
        type: "ranking",
    },
    {
        year: 2022,
        name: "Cornish Tri Series – Sprint/Olympic",
        url: "/documents/leaderboards/2022/sprint.pdf",
        type: "ranking",
    },
    {
        year: 2022,
        name: "Ranking System - Junior",
        url: "/documents/leaderboards/2022/ranking-junior.pdf",
        type: "rules",
    },
    {
        year: 2022,
        name: "Ranking System - Senior",
        url: "/documents/leaderboards/2022/ranking-senior.pdf",
        type: "rules",
    },
    {
        year: 2021,
        name: "Cornish Tri Series – Mini",
        url: "/documents/leaderboards/2021/mini.pdf",
        type: "ranking",
    },
    {
        year: 2021,
        name: "Cornish Tri Series – Schools",
        url: "/documents/leaderboards/2021/schools.pdf",
        type: "ranking",
    },
    {
        year: 2021,
        name: "Cornish Tri Series – Super Sprint",
        url: "/documents/leaderboards/2021/super-sprint.pdf",
        type: "ranking",
    },
    {
        year: 2021,
        name: "Cornish Tri Series – Sprint/Olympic",
        url: "/documents/leaderboards/2021/sprint.pdf",
        type: "ranking",
    },
    {
        year: 2021,
        name: "Ranking System",
        url: "/documents/leaderboards/2021/ranking-system.pdf",
        type: "rules",
    },
];