import React, { createContext, useContext, useState } from "react";

// Criação do contexto de autenticação
const AuthContext = createContext();

// Provider do contexto de autenticação
export const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(localStorage.getItem("token") || "");

	// Função para fazer login
	const login = async (username, password) => {
		const url = "http://localhost:8000/api/login/";

		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ username, password }),
			});

			if (response.ok) {
				const data = await response.json();
				const accessToken = data.access_token;

				// Armazena o token no localStorage
				localStorage.setItem("token", accessToken);

				// Atualiza o token no estado
				setToken(accessToken);
			} else {
				console.error("Falha na autenticação");
			}
		} catch (error) {
			console.error("Erro:", error);
		}
	};

	// Função para fazer logout
	const logout = () => {
		// Remove o token do localStorage
		localStorage.removeItem("token");

		// Limpa o token do estado
		setToken("");
	};

	return (
		<AuthContext.Provider value={{ token, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

// Hook personalizado para acessar o contexto de autenticação
export const useAuth = () => useContext(AuthContext);
