import React from 'react';

import Feed from '../Feed';

import { 
    Container, 
    Banner, 
    Avatar, 
    ProfileData, 
    LocationIcon, 
    CakeIcon, 
    Followage,
    EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>

        <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>

            <h1>Joás Corrêa</h1>
            <h2>@JoasCorrea</h2>

            <p>
                Developer at <a href='https://rocketseat.com.br'>@Rocketseat</a>
            </p> 

            <ul>
                <li>
                    <LocationIcon />
                    Santa Catarina, Brasil
                </li>
                <li>
                    <CakeIcon />
                    Nascido(a) em 27 de agosto de 1996
                </li>
            </ul>

            <Followage>
                <span>
                    seguindo <strong>94</strong>
                </span>
                <span>
                    <strong>672 </strong> seguidores
                </span>
            </Followage>
        </ProfileData>
        <Feed />
    </Container>
  )
}

export default ProfilePage;