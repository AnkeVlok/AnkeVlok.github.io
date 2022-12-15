
import self1 from "../img/self1.jpeg"

export let colors = ["rgb(255,100,100)", "rgb(255,255,255)"];

export const info = {
    firstName: "Anke",
    lastName: "Vlok",
    initials: "Ace", // the example uses first and last, but feel free to use three or more if you like.
    position: "And I'm Interested In",
    selfPortrait: self1,
    gradient: `-webkit-linear-gradient(110deg, ${colors})`, 
    baseColor: colors[0],
    CV_Link: "https://drive.google.com/file/d/1exBY4Uspp8PYDYZ_8lWQSSaELOgLIb-3/preview",
    CV_Name: "Curriculum Vitae",
    miniBio: [ 
        {
            emoji: '✔',
            text: 'Applied Mathematics'
        },
        {
            emoji: '✔',
            text: 'Flow Modelling'
        },
        {
            emoji: "✔",
            text: "Computer Vision"
        },
        {
            emoji: "✔",
            text: "Machine Learning"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/anke.vlok/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/AnkeVlok?tab=repositories",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/anke-vlok-921811195/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }

    ],

    // portfolio: [
    //     {
    //         name: "MoonBoard Grader",
    //         github: "https://github.com/jcdw99/MoonBoard-Classifier",
    //         image: proj1,
    //         desc: '',
    //         tags: ['tag1', 'tag2']
    //     }
    // ],

    pages: [
        {
            field:"Honours Project",
            work:[
                
                {
                    name:"Honours project report",
                    desc:"An investigation is made into different resistance models for Newtonian fluid transport and non-Newtonian power-law fluid transport through granular porous media. Derivations are presented for the various models and the resistance models are plotted against experimental data found in the literature as to compare the predictive ability and accuracy of the resistance models. This study provides a comprehensive overview of the predictive capabilities of the relevant resistance models in terms of accuracy and sensitivity.",
                    link:"https://drive.google.com/file/d/1pCWZTT6Hn61fF2p25wiapN7PHB_dRPBT/preview",
                    tags: ["Porous Mediam", "Flow modelling", "Research"],
                    github: ""
                }
            ]
    
        },
        // {
        //     field:"Computational Fluid Dynamics",
        //     work:[
        //         {
        //             name:"A Java Neural Network Library",
        //             desc: "",
        //             link:"https://drive.google.com/file/d/1B0_83Ms3R4oGqj4dKgYUhYWoIBPZm4Yr/preview",
        //             tags: ["PSO as NN Trainers", "Quantum PSO as NN Trainers", "Stochastic Gradient Decent", "Minibatch Training", "Dynamic Optimization Environment"],
        //             github: "https://github.com/jcdw99/ML_Assignment_2"
        //         },
        //         {
        //             name:"Comparison of Classifiers on a Breast Tumor Dataset",
        //             desc: "",
        //             link:"https://drive.google.com/file/d/1q2LfsuTk0yzYT7cosebo-eWCsyveWxQC/preview",
        //             tags: ["Decision Trees", "K-Nearest Neighbors", "Breast Tumor Classification", "Bilinear Interpolation", "SIFT Matching"]
        //         },
        //         {
        //             name:"Comparison of Hetero. and Homo. Ensemble Methods",
        //             desc: "",
        //             link:"https://drive.google.com/file/d/1dWMECQ4t2LBfB3YknkdsFT-n25k72-Zp/preview",
        //             tags: ["Heterogeneous Ensemble", "Homogeneous Ensemble", "Bagging", "Naive-Bayes", "Support Vector Machines", "Random Forest"]
        //         }
        //     ]



        // },
        {
            field:"Computer Vision",
            work:[
                {
                    name:"Feature Detection and Matching",
                    desc:"",
                    link:"https://drive.google.com/file/d/1YlGWlvfNpqoFRrfqYm_i_sJrjsdWvCEf/preview",
                    tags: ["Contrast Stretching", "Median Filteration", "Sharpening", "Bilinear Interpolation", "SIFT Matching"]

                },
                {
                    name:"Camera Matrices and Homographies",
                    desc:"",
                    link:"https://drive.google.com/file/d/1MS9S4zmnf4ujDQ3kubNJRcgNcOu1zpEZ/preview",
                    tags: ["Homographies", "SIFT", "Image Stitching"]

                },
                {
                    name:"3D rendering and Epipolar Geometry",
                    desc:"",
                    link:"https://drive.google.com/file/d/19CHAhiwMumHbCZOlMRdueotJ5jXaLEVS/preview",
                    tags: ["Camera Calibration", "Epipolar Lines"]
                },
                {
                    name:"3D Reconstruction and Image Rectification",
                    desc:" ",
                    link:"https://drive.google.com/file/d/1H9XEwufy20N9lyCUHMpbYsZsCodwIPev/preview",
                    tags: ["RANSAC", "Image Rectification", "Homography", "Epipolar Lines"]
                },
                {
                    name:"Traditional Classification Algorithms",
                    desc:"",
                    link:"https://drive.google.com/file/d/18tHVwM80nR-4Vl-FxgPsbdrmADlSYnzm/preview",
                    tags: ["Principle Component Analysis", "Support Vector Machines", "K-Nearest Neighbors", "Eigenfaces", "Bag-Of-Words"]
                },      
                {
                    name:"CNN: From Scratch and with Transfer Learning",
                    desc:"",
                    link:"https://drive.google.com/file/d/1ERbqJ7C0erg2MpyJGTA2qg0t3fLrN2sX/preview",
                    tags: ["CNN", "Transfer Learning", "Regularization", "Image Classification"]
                }
            ]
        }
        ,
        {
            field:"Digital Image Processing",
            work:[
                {
                    name:"Colour Models and Digital Image Composition",
                    desc: "",
                    link:"https://drive.google.com/file/d/1RwcWihVgEaTTCY6VLoKY-sRCxu_IOGPG/preview",
                    tags: ["Color Models", "Chromaticity Diagram", "Chromaticity Decomposition", "Colour Gambut"]
                },
                {
                    name:"Intensity Transformations and Spatial Filtering",
                    desc: "",
                    link:"https://drive.google.com/file/d/1SABfkptVy9JWUjua9nJd887ROd5-s_1u/preview",
                    tags: ["Histogram Equalization", "Gamma Equalization", "Contrast Stretching", "Median Filteration"]

                },
                {
                    name:"Fourier Transformation and Frequency Filtering",
                    desc: "",
                    link:"https://drive.google.com/file/d/1W26IVfaBrYobQi1zewpUmtaMgj8vW0rT/preview",
                    tags: ["Convolution Theorem", "Frequency Filtering", "Sharpening"]

                },
                {
                    name:"Image Restoration Techniques",
                    desc: "",
                    link:"https://drive.google.com/file/d/1a-vaGNuRll-mQXwPolw6pHSqJgj_v1fy/preview",
                    tags: ["Wiener Filter", "Convolution Theorem", "Cutoff Filter"]

                }
                ,
                {
                    name:"Morphological Filtering",
                    desc: "",
                    link:"https://drive.google.com/file/d/1yi9mrDxkHLhvHQN4RHdZ_cZbW-of2dPK/preview",
                    tags: ["Convolution", "Dilation and Erosion", "Skeletonization", "Hit-Miss Transform", "Masking"]

                },
                {
                    name:"Feature Extraction and Description",
                    desc: "",
                    link:"https://drive.google.com/file/d/14lKGMFcXXF6Xa1kDrNUyeT33KP_SLS7f/preview",
                    tags: ["Fourier Description", "Image Binarization", "Erosion"]

                }
            ]
        }
    ],

    About: [
        {
            field:"Curriculum Vitea",
            work:[
                
                {
                    name:"Curriculum Vitea",
                    desc: "",
                    link:"https://drive.google.com/file/d/1iBDmbtoVLDp6NoCEUJVfp-EmobeCFHaQ/preview"
                }
            ]
    
        }
    ]
} 