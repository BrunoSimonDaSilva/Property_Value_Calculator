# Real Estate Price Calculator (Machine Learning)

This project is a real estate price calculator based on Machine Learning, developed to demonstrate practical knowledge in Machine Learning, backend development with FastAPI, and frontend development with React.

The main focus of the project is the Machine Learning pipeline, system architecture, and full stack integration between model, API, and user interface, rather than producing real-world property valuations.

---

## Dataset

The model was trained using the dataset **"House Prices: Advanced Regression Techniques"**, available on Kaggle.

To access and download this dataset, it is required to have a Kaggle account and explicitly accept the dataset terms and conditions on the Kaggle platform.

Dataset details:

* Location: Ames, Iowa, United States
* Time period: approximately 2006 to 2010
* Source: Ames Assessor’s Office

The predicted prices reflect housing market patterns specific to Ames, Iowa. The model should not be interpreted as a universal or real-world pricing solution for other regions.

---

## Part 1 – Machine Learning (Training)

The Machine Learning component was implemented using neural networks with Keras (TensorFlow).

### Training pipeline

* Selection of relevant numerical features
* Feature normalization using StandardScaler
* Target (price) normalization
* Split into training and validation datasets
* Model training with validation
* Model evaluation
* Persistence of the trained model and scalers

### Model architecture

* Fully connected neural network (Dense layers)
* ReLU activation functions
* Batch Normalization
* Dropout layers
* L2 regularization
* Adam optimizer
* Loss function: Mean Squared Error (MSE)

### Evaluation

The model was evaluated using standard regression metrics:

* Root Mean Squared Error (RMSE)
* Mean Absolute Error (MAE)
* R² score

Additional visual analysis included:

* Actual vs predicted values
* Residual analysis
* Training and validation loss curves

The final trained model and preprocessing scalers are saved to disk for later use by the backend.

---

## Part 2 – Backend (FastAPI)

The backend was developed using FastAPI and exposes the trained Machine Learning model through a REST API.

### Backend responsibilities

* Load the trained model only once at application startup
* Load the feature and target scalers used during training
* Receive property data via HTTP requests
* Apply the same preprocessing pipeline used in training
* Perform predictions
* Inverse-transform the predicted value
* Return the estimated price

### Main endpoint

POST /calculateImovel

Expected response:

{
    253487.42
}

---

## Part 3 – Frontend (React)

The frontend was developed using React and provides the user interface for interacting with the system.

### Features

* Form for entering property characteristics
* Submission of data to the FastAPI backend
* Display of the estimated property price
* Numeric formatting using the United States locale

Number formatting is handled on the frontend using the "en-US" locale with toLocaleString.

---

## System flow

The user fills out the form in the React frontend.
The data is sent to the FastAPI backend.
The backend normalizes the input data.
The Keras model generates a prediction.
The predicted value is inverse-transformed.
The result is returned to the frontend and displayed to the user.

---

## Project purpose

This project was created for educational and demonstrative purposes, aiming to:

* Demonstrate applied Machine Learning knowledge
* Apply neural networks to a regression problem
* Integrate a Machine Learning model into a REST API
* Build a functional full stack application

It is not intended to be used as a commercial or real-world property valuation tool.

---

## Technologies used

Backend and Machine Learning:

* Python
* TensorFlow / Keras
* Scikit-learn
* NumPy
* Joblib
* FastAPI

Frontend:

* JavaScript
* React

Other:

* Kaggle dataset
* REST API

---

## Final notes

The model learns patterns specific to the dataset used. For real-world deployment, it would be necessary to:

* Use region-specific and up-to-date data
* Include location-related features
* Continuously retrain the model

---

## Author
Bruno Simon
Full stack Machine Learning project developed for educational and technical demonstration purposes, focusing on neural networks, API integration, and frontend-backend communication.
---

# pt-BR
# Calculadora de Preços de Imóveis (Machine Learning)

Este projeto é uma calculadora de preços de imóveis baseada em Machine Learning, desenvolvida com o objetivo de demonstrar conhecimentos práticos em Machine Learning, desenvolvimento backend com FastAPI e frontend com React.

O foco principal do projeto é o pipeline de Machine Learning, a arquitetura do sistema e a integração full stack entre modelo, API e interface, e não a previsão de preços reais universais.

---

## Dataset

O modelo foi treinado utilizando o dataset **"House Prices: Advanced Regression Techniques"**, disponível no Kaggle.

Para acessar e realizar o download deste dataset, é necessário possuir uma conta no Kaggle e aceitar explicitamente os termos e condições do dataset na plataforma.

Detalhes do dataset:

* Localização: Ames, Iowa, Estados Unidos
* Período aproximado: 2006 a 2010
* Fonte: Ames Assessor’s Office

Os preços previstos refletem padrões específicos do mercado imobiliário da cidade de Ames, Iowa. O modelo não deve ser utilizado como referência real para outras regiões.

---

## Parte 1 – Machine Learning (Treinamento)

A etapa de Machine Learning foi desenvolvida utilizando redes neurais com Keras (TensorFlow).

### Pipeline de treinamento

* Seleção de variáveis numéricas relevantes
* Normalização das variáveis de entrada com StandardScaler
* Normalização do valor alvo (preço do imóvel)
* Divisão do conjunto de dados em treino e validação
* Treinamento com acompanhamento de validação
* Avaliação do modelo com métricas de regressão
* Salvamento automático do modelo treinado e dos scalers

### Arquitetura do modelo

* Rede neural totalmente conectada (camadas Dense)
* Funções de ativação ReLU
* Batch Normalization
* Dropout para regularização
* Regularização L2
* Otimizador Adam
* Função de perda: Mean Squared Error (MSE)

### Avaliação

O modelo é avaliado utilizando métricas clássicas de regressão:

* RMSE (Root Mean Squared Error)
* MAE (Mean Absolute Error)
* R² (Coeficiente de determinação)

Também são analisados:

* Gráfico de valores reais versus previstos
* Análise de resíduos
* Curvas de loss de treino e validação

### Persistência do modelo

Após o treinamento, os artefatos são salvos automaticamente no diretório do backend:

ImovelCalc_back/models/ml_models

Arquivos gerados:

* house_price_model.h5
* scaler_X.pkl
* scaler_y.pkl

Esses arquivos são carregados diretamente pela API FastAPI para realizar previsões, sem necessidade de mover arquivos manualmente.

---

## Parte 2 – Backend (FastAPI)

O backend foi desenvolvido com FastAPI e é responsável por disponibilizar o modelo de Machine Learning através de uma API REST.

### Responsabilidades do backend

* Carregar o modelo treinado apenas uma vez na inicialização
* Carregar os scalers utilizados no treinamento
* Receber os dados do imóvel via requisições HTTP
* Aplicar o mesmo pipeline de normalização do treino
* Executar a predição
* Desnormalizar o valor previsto
* Retornar o preço estimado

### Endpoint principal

POST /calculateImovel

Resposta esperada:

{
    253487.42
}

---

## Parte 3 – Frontend (React)

O frontend foi desenvolvido em React e fornece a interface de interação com o usuário.

### Funcionalidades

* Formulário para entrada das características do imóvel
* Envio dos dados para o backend FastAPI
* Exibição do preço estimado
* Formatação numérica no padrão dos Estados Unidos

A formatação é realizada no frontend utilizando toLocaleString com a localidade "en-US".

---

## Fluxo do sistema

O usuário preenche o formulário no frontend React.
Os dados são enviados para o backend FastAPI.
O backend normaliza os dados de entrada.
O modelo Keras realiza a predição.
O valor previsto é desnormalizado.
O resultado é retornado ao frontend e exibido ao usuário.

---

## Objetivo do projeto

Este projeto foi desenvolvido com fins educacionais e demonstrativos, com o objetivo de:

* Demonstrar conhecimento prático em Machine Learning
* Aplicar redes neurais a um problema de regressão
* Integrar um modelo de ML a uma API REST
* Construir uma aplicação full stack funcional

Não se trata de um produto comercial nem de uma ferramenta real de avaliação imobiliária.

---

## Tecnologias utilizadas

Backend e Machine Learning:

* Python
* TensorFlow / Keras
* Scikit-learn
* NumPy
* Joblib
* FastAPI

Frontend:

* JavaScript
* React

Outros:

* Dataset do Kaggle
* API REST

---

## Observações finais

O modelo aprende padrões específicos do dataset utilizado. Para uso real em produção, seria necessário:

* Utilizar dados regionais atualizados
* Incluir variáveis de localização
* Re-treinar o modelo continuamente

---

## Autor
Bruno Simon
Projeto full stack com Machine Learning desenvolvido para fins educacionais e demonstração técnica, com foco em redes neurais, integração via API e comunicação entre frontend e backend.
