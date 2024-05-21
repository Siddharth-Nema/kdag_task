export interface LectureRef {
  index: number;
  title: string;
  desc: string;
  moduleNo: number;
}

interface Module {
  title: string;
  desc: string;
  lectures: LectureRef[];
}

export var modules: { [id: string]: Module } = {
  m1: {
    title: 'Introduction to Python and Python Libraries',
    desc: 'This course will equip you with the fundamentals of Python programming and introduce you to the powerful world of Python libraries. You will learn the basics of Python syntax and structures, and then delve into how libraries extend Python capabilities, making it easier to tackle tasks in data analysis, web development, and more!',
    lectures: [
      {
        index: 1,
        title: 'Basics of Python',
        moduleNo: 1,
        desc: `Empower yourself with Python! This course lays the groundwork for your Python journey. You'll grasp core concepts like variables, data types, control flow, and functions. By the end, you'll be able to write basic Python programs and solve problems effectively.`,
      },
      {
        index: 2,
        title: 'NumPy',
        moduleNo: 1,
        desc: `Unleash the power of NumPy! This course equips you with NumPy, the Python library for numerical computing. You'll master efficient multidimensional arrays, explore mathematical functions, and delve into operations on large datasets. By the end, you'll be able to analyze and manipulate numerical data with ease.`,
      },
      {
        index: 3,
        title: 'Pandas',
        moduleNo: 1,
        desc: `Conquer your data with Pandas! This course equips you with Pandas, the powerful Python library for data analysis. You'll master DataFrames, a versatile data structure, and explore techniques for loading, cleaning, manipulating, and analyzing your data. By the end, you'll be able to transform raw data into insights and generate informative visualizations.`,
      },
    ],
  },
  m2: {
    title: 'ML Algorithms',
    desc: `Unleash the power of Machine Learning algorithms! This course will peel back the layers and reveal how these algorithms learn from data, make predictions, and tackle real-world challenges. You'll explore various algorithm types, from uncovering hidden patterns to making intelligent decisions.`,
    lectures: [
      {
        index: 1,
        moduleNo: 2,
        title: 'Handling Missing Values',
        desc: `Bridge the gaps in your data! This course explores techniques for handling missing values, a common challenge in data analysis. You'll learn methods like imputation, deletion, and model-based approaches to ensure your data is ready for robust analysis. By the end, you'll be able to effectively address missing values and unlock the full potential of your data.`,
      },
      {
        index: 2,

        moduleNo: 2,
        title: 'Types of Machine Learning',
        desc: `Demystify the world of Machine Learning! This course unveils the various types of machine learning algorithms. You'll explore supervised learning for prediction, unsupervised learning for pattern discovery, and reinforcement learning for decision-making in dynamic environments. Gain a comprehensive understanding of how algorithms learn from data and solve different problems.`,
      },
      {
        index: 3,

        moduleNo: 2,
        title: 'Linear Regression',
        desc: `Predict the future with Linear Regression! This course introduces linear regression, a fundamental supervised learning algorithm. You'll learn how to model linear relationships between variables and make predictions based on those relationships. By the end, you'll be able to analyze trends, forecast future values, and gain insights from your data.`,
      },
      {
        index: 4,
        moduleNo: 2,
        title: 'Logistic Regression',
        desc: `Navigate the world of classification with Logistic Regression! This course explores logistic regression, a powerful algorithm for predicting binary outcomes. You'll learn how to model the probability of an event and make informed decisions. Gain the ability to classify data points into categories, making logistic regression essential for various applications.`,
      },
      {
        index: 5,
        moduleNo: 2,
        title: 'Cost Function',
        desc: `Measure your model's performance with Cost Functions! This course dives into cost functions, a critical concept in machine learning. You'll understand how cost functions quantify the difference between your model's predictions and the actual data. Learn how to optimize cost functions to improve your model's accuracy and effectiveness.`,
      },
      {
        index: 6,
        moduleNo: 2,
        title: 'Gradient Ascent',
        desc: `Optimize your machine learning models with Gradient Ascent! This course introduces gradient ascent, an optimization algorithm widely used in machine learning. You'll learn how to iteratively adjust model parameters to minimize the cost function, leading to a better performing model. Gain the ability to fine-tune your models and achieve optimal results.`,
      },
    ],
  },
  m3: {
    title: 'Model Tuning',
    desc: `Master the art of Model Tuning! This course equips you to fine-tune your machine learning models, maximizing their performance and accuracy. You'll delve into techniques for optimizing hyperparameters, evaluating model performance, and preventing overfitting. By the end, you'll be able to train models that excel on real-world data.`,
    lectures: [
      {
        index: 1,
        moduleNo: 3,
        title: 'Generalisation',
        desc: `This course explores how well your machine learning model can perform on unseen data. It delves into techniques to improve a model's ability to generalize beyond the training data, preventing issues like overfitting.`,
      },
      {
        index: 2,
        moduleNo: 3,
        title: 'Overfitting and Underfitting',
        desc: `This course tackles two common pitfalls in model training: overfitting and underfitting. You'll learn to identify these issues and explore techniques to achieve the optimal balance between model complexity and data adaptation.`,
      },
      {
        index: 3,
        moduleNo: 3,
        title: 'Support Vector Machines (SVMs)',
        desc: `This course dives into SVMs, a powerful machine learning algorithm for classification. You'll learn how to tune hyperparameters specific to SVMs to improve their performance and generalizability.`,
      },
      {
        index: 4,
        moduleNo: 3,
        title: 'The Confusion Matrix',
        desc: `This course explains the confusion matrix, a visual tool used to evaluate the performance of a classification model. It helps you understand how well your model is classifying different categories, allowing you to identify areas for improvement during model tuning.`,
      },
      {
        index: 5,
        moduleNo: 3,
        title: 'Evaluation Metrics',
        desc: `This course equips you with a toolbox of metrics to assess the performance of your machine learning model. You'll learn about various metrics suited for different tasks (classification, regression) and how to use them effectively during model tuning to optimize your model's effectiveness.`,
      },
    ],
  },
  m4: {
    title: 'Tree-based Algorithms',
    desc: `Explore the power of Tree-Based Algorithms! This course dives deep into how these algorithms leverage tree structures to uncover patterns and make predictions. You'll learn about decision trees, random forests, and boosting techniques, gaining the ability to handle complex data and solve a wide range of machine learning problems.`,
    lectures: [
      {
        index: 1,
        moduleNo: 4,
        title: 'Tree Based Models',
        desc: `This course explores machine learning models that use a tree-like structure for decision making. You'll learn about algorithms like decision trees and random forests, understanding their strengths and applications in various tasks.`,
      },
      {
        index: 2,
        moduleNo: 4,
        title: 'Gradient Boosting',
        desc: `This course delves into gradient boosting, a powerful ensemble technique that combines multiple weak decision trees to create a stronger predictive model. You'll explore how it works and how it can improve performance on complex problems.`,
      },
      {
        index: 3,
        moduleNo: 4,
        title: 'Feature Selection & Engineering',
        desc: `This course equips you with techniques for selecting and engineering features from your data. You'll learn how to identify relevant features, remove irrelevant ones, and potentially create new features to improve the performance of your machine learning models.`,
      },
      {
        index: 5,
        moduleNo: 4,
        title: 'Hyperparameter Tuning',
        desc: `This course explores the art of tuning hyperparameters, which are settings that control the behavior of a machine learning model. You'll learn different techniques to find the optimal hyperparameter values that improve your model's generalization and performance.`,
      },
    ],
  },
  m5: {
    title: 'Neural Networks',
    desc: `Unravel the mysteries of Neural Networks! This course will illuminate the structure and function of these powerful learning algorithms. You'll delve into artificial neurons, activation functions, and how they work together to learn from data and make complex predictions. Explore various neural network architectures, from convolutional networks for image recognition to recurrent networks for handling sequential data. By the end, you'll gain a solid understanding of how Neural Networks power cutting-edge applications in artificial intelligence.`,
    lectures: [
      {
        index: 1,
        moduleNo: 5,
        title: 'Introduction to Deep Learning',
        desc: `This course provides a foundational understanding of deep learning, a powerful subset of machine learning inspired by the structure and function of the human brain. You'll explore deep neural networks and their capabilities for tackling complex tasks like image recognition and natural language processing.`,
      },
      {
        index: 2,
        moduleNo: 5,
        title: 'Unsupervised Learning',
        desc: `This course introduces unsupervised learning, a machine learning paradigm that deals with unlabeled data. You'll learn about techniques like clustering and dimensionality reduction used to uncover hidden patterns and structures within data.`,
      },
      {
        index: 3,
        moduleNo: 5,
        title: 'Dimensionality Reduction',
        desc: `This course dives into dimensionality reduction techniques, which aim to reduce the number of features in a dataset while preserving the most important information. You'll explore methods like Principal Component Analysis (PCA) used to improve the efficiency and performance of machine learning models.`,
      },
      {
        index: 4,
        moduleNo: 5,
        title: 'K Means Clustering',
        desc: `This course explores K-means clustering, a popular unsupervised learning algorithm that groups similar data points together. You'll learn how K-means works and how it can be used for tasks like customer segmentation and image segmentation.`,
      },
    ],
  },
};
