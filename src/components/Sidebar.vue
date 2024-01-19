<template>
    <aside :class="`${is_expanded && 'is-expanded'}`">
        <div class="logo">
            <img src="../assets/logo-adrar.png" alt="Adrar Classrooms">
        </div>
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-icons">keyboard_double_arrow_right</span>            
            </button>
        </div>
        <h3>Menu</h3>
        <div class="menu">
            <router-link class="button" to="/">
                <span class="material-icons">space_dashboard</span>
                <span class="text">Tableau de bord</span>
            </router-link>
            <router-link class="button" to="/course">
                <span class="material-icons">menu_book</span>
                <span class="text">Mes cours</span>
            </router-link>
            <router-link class="button" to="/class">
                <span class="material-icons">groups</span>
                <span class="text">Session</span>
            </router-link>
            <router-link class="button" to="/profile">
                <span class="material-icons">person</span>
                <span class="text">Profil</span>
            </router-link>
            <router-link class="button" to="/news">
                <span class="material-icons">info</span>
                <span class="text">Blog / Actualités</span>
            </router-link>
            <router-link class="button" to="/settings">
                <span class="material-icons">settings</span>
                <span class="text">Paramètres</span>
            </router-link>
        </div>

        <div class="flex"></div>

        <div class="menu">
            <router-link class="button" to="/login">
                <span class="material-icons">logout</span>
                <span class="text">Déconnexion</span>
            </router-link>
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue'

    const is_expanded = ref(false)

    const ToggleMenu = () => {
        is_expanded.value = !is_expanded.value
    }
</script>

<style Lang="scss" scoped>
    aside {
        display: flex;
        flex-direction: column;
        width: calc(2rem + 2rem);
        min-height: 100vh;
        overflow: hidden;
        padding: 1rem;

        background-color: var(--dark);
        color: var(--light);

        transition: 0.2s ease-out;

        .flex {
            flex: 1 1 0;
        }

        .logo {
            margin-bottom: 1rem;

            img {
                width: 2rem;
            }
        }

        .menu-toggle-wrap {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 1rem;

            position: relative;
            top: 0;
            transition: 0.2s ease-out;

            .menu-toggle {
                transition: 0.2s ease-out;

                .material-icons {
                    font-size: 2rem;
                    color: var(--light);
                    transition: 0.2s ease-out;
                }

                &:hover {
                    .material-icons {
                        color: var(--primary);
                        transform: translate(0.5rem);
                    }
                }
            }
        }

        h3, .button .text {
            opacity: 0;
            transition: 0.3s ease-out;
        }

        h3 {
            color: gray;
            font-size: 0.875rem; /*14px*/
            margin-bottom: 1.5rem;
            text-transform: uppercase;
        }

        .menu {
            margin: 0 -1rem;

            .button {
                display: flex;
                align-items: center;
                text-decoration: none;

                padding: 0.5rem 1rem;
                transition: 0.2s ease-out;

                .material-icons {
                    font-size: 2rem;
                    color: var(--light);
                    transition: 0.2s ease-out;
                }

                .text {
                    color: var(--light);
                    transition: 0.2s ease-out;
                }

                &:hover, &.router-link-exact-active {
                    background-color: var(--grey);

                    .material-icons {
                        color: var(--primary);
                    }
                }

                &.router-link-exact-active {
                    border-right: 5px solid var(--primary);
                }
            }
        }

        &.is-expanded {
            width: var(--sidebar-width);

            .menu-toggle-wrap {
                top: -3rem;

                .menu-toggle {
                    transform: rotate(-180deg);
                }
            }

            h3, .button .text {
                opacity: 1;
            }

            .button {
                .material-icons {
                    margin-right: 1rem;
                }
            }
        }

        @media (max-width: 768px) {
            position: fixed;
            z-index: 99;
        }
    }
</style>