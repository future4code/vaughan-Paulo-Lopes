import { app } from "./data/app";
import { createRecipe } from "./endpoints/createRecipe";
import { followUser } from "./endpoints/followUser";
// import { getFollowRecipe } from "./endpoints/getFollowRecipes";
import { getProfile } from "./endpoints/getProfile";
import { getRecipe } from "./endpoints/getRecipe";
import { getUserProfile } from "./endpoints/getUserProfile";
import { login } from "./endpoints/login";
import { signUp } from "./endpoints/signUp";
import { unfollowUser } from "./endpoints/UnfollowUser";

//------------Signup------------Signup------------Signup------------Signup

app.post("/signup", signUp)

//------------login------------login------------login------------login

app.post("/login", login)

//------------Pegar próprio perfil------------Pegar próprio perfil------------Pegar próprio perfil------------Pegar próprio perfil

app.get("/user/profile", getProfile)

//------------Pegar perfil de outro usuário------------Pegar perfil de outro usuário------------Pegar perfil de outro usuário------------Pegar perfil de outro usuário

app.get("/user/:id", getUserProfile)

//------------Criar receita ------------Criar receita ------------Criar receita ------------Criar receita 

app.post("/recipes", createRecipe)

//------------Pegar receita ------------Pegar receita ------------Pegar receita ------------Pegar receita 

app.get("/recipes/:id", getRecipe)

//------------Seguir usuário------------Seguir usuário------------Seguir usuário------------Seguir usuário

app.post("/user/follow", followUser)

//-----------Deixar de seguir usuário-----------Deixar de seguir usuário-----------Deixar de seguir usuário-----------Deixar de seguir usuário

app.post("/user/unfollow", unfollowUser)

//------------Pegar feed de receitas------------Pegar feed de receitas------------Pegar feed de receitas------------Pegar feed de receitas
//Não Funciona
// app.get("/user/feed", getFollowRecipe)