---
title: "Global-Local Spatial-Temporal Aware Graph Attention Network for Network Traffic Forecasting"
collection: publications
category: conferences
permalink: /publication/GLSTaGAT
excerpt: 'The paper introduces GLSTaGAT, a model that captures global-local spatial-temporal dependencies through a data-driven fusion graph, node normalization, and multi-head attention, significantly improving network traffic forecasting accuracy.'
date: 2024-10-15
venue: 'WWW 2025, Under Review'
# paperurl: 'http://academicpages.github.io/files/paper3.pdf'
# citation: 'Your Name, You. (2024). &quot;Paper Title Number 3.&quot; <i>GitHub Journal of Bugs</i>. 1(3).'
---

Spatial-temporal network traffic forecasting is a challenging task due to the complex spatial relationships and dynamic temporal patterns present in each node. Traditional regression methods are not directly applicable to such graph data. Recently, Graph Neural Networks (GNNs) have been widely used to model spatial-temporal dependencies. However, existing methods face several limitations: (1) They rely solely on a predefined spatial adjacency matrix, overlooking hidden low-level temporal information. (2) They model spatial and temporal information separately, which inevitably leads to a loss of joint dependencies, or they capture only global or local dependencies. To address these issues, we propose the Global-Local Spatial-Temporal Aware Graph Attention Network (**GLSTaGAT**). Specifically, we adopt a data-driven spatial-temporal fusion graph that incorporates low-level spatial and temporal information, serving as the foundation for further graph convolutions. The GLSTaGAT block and its pooling variant are proposed to simultaneously capture local and global spatial-temporal dependencies. Additionally, we introduce node normalization to mitigate covariance shifts, enabling a smoother training process. An encoder-only transformer is utilized to model high-level joint dependencies, and a multi-head attention prediction layer is designed for final information aggregation and prediction. Experimental results on two real-world datasets demonstrate that GLSTaGAT outperforms the baselines by 36.37% (MAE), 32.19% (RMSE), and 23.99% (SMAPE) on average.

![GLSTaGAT Framework](../images/papers/GLSTaGAT/framework.png)