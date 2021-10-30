export const allCourses = [
    {
        id: 1,
        image: "reactjs-image.png",
        category: "Programming",
        title: "Belajar Flow React JS untuk Pemula 🚀",
        level: 'Beginner',
        desc: "Memahami alur logic framework react js dari dasar sampai advance topik",
        duration: 12,
        lessons: 60
    },
    {
        id: 2,
        image: "nodejs-image.png",
        category: "Programming",
        title: "Memahami Node JS untuk Pemula 🚀",
        level: 'Beginner',
        desc: "Memahami alur logic framework react js dari dasar sampai advance topik",
        duration: 21,
        lessons: 120
    },
    {
        id: 3,
        image: "js-image.png",
        category: "Programming",
        title: "Memahami Javascript dari Dasar hingga Mahir 🚀",
        level: 'All Level',
        desc: "Memahami alur logic framework react js dari dasar sampai advance topik",
        duration: 34,
        lessons: 170
    },
    {
        id: 4,
        image: "UIUX.jpg",
        category: "UI UX",
        title: "Desian UI/UX dengan Figma dari Basic hingga Advance",
        level: 'All Level',
        desc: "Merancang User Interface dan User Experience dengan Figma",
        duration: 20,
        lessons: 97
    },
    {
        id: 5,
        image: "desain.jpg",
        category: "Desain Grafis",
        title: "Step by step belajar Desain Grafis dengan Photosop dan Illustrator",
        level: 'Beginner',
        desc: "Pemula yang ini menguasai tools Adobe Photoshop dan Illustrator dan merancangnya menjadi sebuah desain",
        duration: 11,
        lessons: 55
    },
]

export const allProjects = [
    {
        id: 1,
        image: "crypto.jpg",
        url: 'https://react-cryptocurrencies.netlify.app',
        title: "Cryptocurrencies Live Search",
        desc: "React JS + Tailwind CSS + RapidAPI(CoinRanking)"
    },
    {
        id: 2,
        image: "ig-project.jpg",
        url: 'https://instagram-clone-23684.web.app',
        title: "Instagrame Clone",
        desc: "React JS + Styled Components + Firebase"
    },
    {
        id: 3,
        image: "hulu-clone.jpg",
        url: 'https://next-hulu-clone-seven.vercel.app',
        title: "Hulu Clone",
        desc: "React JS + Next Js + Tailwind CSS"
    },
    {
        id: 4,
        image: "dummy-blog.png",
        url: 'https://next-dummy-blog.vercel.app/',
        title: "Dummy Blog",
        desc: "React JS + Next Js + Tailwind CSS"
    },
    {
        id: 5,
        image: "img-ecommerce.jpg",
        url: 'https://ecommerce-oct.web.app/',
        title: "Ecommerce",
        desc: "React JS + Styled Components + Sweet Alert + Firebase"
    },
]

export const categoryCourse = () => [...new Set(allCourses.map(course => course.category))]
export const levelCourse = () => [...new Set(allCourses.map(course => course.level))]
export const findCourse = (courseId) => allCourses.find(course => course.id === courseId)
export const filterCourses = (queries) => {
    return allCourses.filter(course => {
        return course.category.toLowerCase().includes(queries?.category?.toLowerCase() || '') &&
            course.level.toLowerCase().includes(queries?.level?.toLowerCase() || '') &&
            course.duration >= (+queries?.duration || 0)
    })
}