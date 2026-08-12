import type { Certification } from "./types";

/** The professional certificate first, then its constituent courses. */
export const certifications: Certification[] = [
  {
    id: "ibm-ai-engineering",
    title: "IBM AI Engineering Professional Certificate",
    issuer: "IBM · Coursera",
    description:
      "A six-module track covering machine learning and deep learning end to end — the major Python libraries, neural network architectures, and hands-on lab implementations of each. The through-line was less about any single model than about how to implement them properly and transfer that to new problems.",
    href: "https://coursera.org/verify/professional-cert/ZETRE67HZNX9",
  },
  {
    id: "deep-neural-networks-pytorch",
    title: "Deep Neural Networks with PyTorch",
    issuer: "IBM · Coursera",
    description:
      "Part of the IBM AI Engineering track. Practical work in PyTorch alongside Pandas and NumPy, building foundational through intermediate understanding of deep neural networks.",
    href: "https://coursera.org/verify/H2JNT8CU2PED",
  },
  {
    id: "deep-learning-tensorflow",
    title: "Building Deep Learning Models with TensorFlow",
    issuer: "IBM · Coursera",
    description:
      "Supervised architectures — convolutional and recurrent networks — followed by unsupervised ones, including restricted Boltzmann machines for a recommendation system and autoencoders for image reconstruction.",
    href: "https://coursera.org/verify/4699XVBMPFRA",
  },
  {
    id: "keras-neural-networks",
    title: "Introduction to Deep Learning & Neural Networks with Keras",
    issuer: "IBM · Coursera",
    description:
      "Fundamentals of deep learning and neural network design, built out across the TensorFlow and Keras library surface.",
    href: "https://coursera.org/verify/5ZFZ6JEZHD4T",
  },
  {
    id: "computer-vision",
    title: "Introduction to Computer Vision and Image Processing",
    issuer: "IBM · Coursera",
    description:
      "Image classification with computer vision tooling and Pillow, closing on a final project training a model to distinguish between traffic signs from a labelled image set.",
    href: "https://coursera.org/verify/99XC332MHPH8",
  },
  {
    id: "ml-with-python",
    title: "Machine Learning with Python",
    issuer: "IBM · Coursera",
    description:
      "A broad introduction to machine learning concepts and their application in Python, built through lectures and labs and assessed with a final exam and project.",
    href: "https://coursera.org/verify/5DPXLD3JTLCW",
  },
  {
    id: "house-prices-regression",
    title: "Predicting House Prices with Regression using TensorFlow",
    issuer: "Coursera",
    description:
      "A guided regression project over a housing dataset — date, age, transit distance, nearby amenities, coordinates and sale price — handled through Pandas, NumPy, Scikit-Learn, Matplotlib and Keras.",
    href: "https://coursera.org/verify/CDG2EWV5CRUZ",
  },
  {
    id: "streamlit-data-app",
    title: "Build a Data Science Web App with Streamlit and Python",
    issuer: "Coursera",
    description:
      "An interactive map of New York City motor vehicle collision statistics, built in Python and Streamlit, with an emphasis on structuring a data app so the code survives a change of dataset.",
    href: "https://coursera.org/verify/JT3PJ8KY4B5U",
  },
];
