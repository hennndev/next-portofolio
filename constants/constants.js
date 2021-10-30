export const allCourses = [
    {
        id: 1,
        image: "reactjs-image.png",
        category: "Programming",
        title: "Belajar Flow React JS untuk Pemula 🚀",
        level: 'Beginner',
        desc: "Memahami alur logic framework react js dari dasar sampai advance topik"
    },
    {
        id: 2,
        image: "nodejs-image.png",
        category: "Programming",
        title: "Memahami Node JS untuk Pemula 🚀",
        level: 'Beginner',
        desc: "Memahami alur logic framework react js dari dasar sampai advance topik"
    },
    {
        id: 3,
        image: "js-image.png",
        category: "Programming",
        title: "Memahami Javascript dari Dasar hingga Mahir 🚀",
        level: 'All Level',
        desc: "Memahami alur logic framework react js dari dasar sampai advance topik"
    },
    {
        id: 4,
        image: "UIUX.jpg",
        category: "UI UX",
        title: "Desian UI/UX dengan Figma dari Basic hingga Advance",
        level: 'All Level',
        desc: "Merancang User Interface dan User Experience dengan Figma"
    },
    {
        id: 5,
        image: "desain.jpg",
        category: "Desain Grafis",
        title: "Step by step belajar Desain Grafis dengan Photosop dan Illustrator",
        level: 'Beginner',
        desc: "Pemula yang ini menguasai tools Adobe Photoshop dan Illustrator dan merancangnya menjadi sebuah desain"
    },
]

export const allProjects = [
    {
        id: 1,
        imgSrc: "crypto.jpg",
        url: 'https://react-cryptocurrencies.netlify.app',
        title: "Cryptocurrencies Live Search",
        desc: "React JS + Tailwind CSS + RapidAPI(CoinRanking)"
    },
    {
        id: 2,
        imgSrc: "ig-project.jpg",
        url: 'https://instagram-clone-23684.web.app',
        title: "Instagrame Clone",
        desc: "React JS + Styled Components + Firebase"
    },
    {
        id: 3,
        imgSrc: "hulu-clone.jpg",
        url: 'https://next-hulu-clone-seven.vercel.app',
        title: "Hulu Clone",
        desc: "React JS + Next Js + Tailwind CSS"
    },
    {
        id: 4,
        imgSrc: "dummy-blog.png",
        url: 'https://next-dummy-blog.vercel.app/',
        title: "Dummy Blog",
        desc: "React JS + Next Js + Tailwind CSS"
    },
    {
        id: 5,
        imgSrc: "img-ecommerce.jpg",
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
            course.level.toLowerCase().includes(queries?.level?.toLowerCase() || '')
    })
}