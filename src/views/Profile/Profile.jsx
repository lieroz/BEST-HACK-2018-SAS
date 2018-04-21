import React from 'react';
import { Grid, InputLabel } from 'material-ui';

import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from 'components';

import avatar from 'assets/img/faces/ed.jpg';

function Profile({ ...props }) {
  return (
    <div>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={8}>
          <RegularCard
            cardTitle="Редактировать Профиль"
            cardSubtitle="Ваш профиль"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={5}>
                    <CustomInput
                      labelText="Компания"
                      id="company"
                      formControlProps={{
                        fullWidth: true
                      }}
                      // inputProps={{
                      //   disabled: true
                      // }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText="Никнейм"
                      id="username"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Почта"
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                </Grid>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Имя"
                      id="first-name"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Фамилия"
                      id="last-name"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                </Grid>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Город"
                      id="city"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Страна"
                      id="country"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Почтовый индекс"
                      id="postal-code"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                </Grid>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={12}>
                    <InputLabel style={{ color: '#AAAAAA' }}>
                      Дополнительная информация
                    </InputLabel>
                    <CustomInput
                      labelText="Здесь должен быть какой-то текст!"
                      id="about-me"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5
                      }}
                    />
                  </ItemGrid>
                </Grid>
              </div>
            }
            footer={<Button color="primary">Обновить</Button>}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <ProfileCard
            avatar={avatar}
            subtitle="Доцент"
            title="Рязанова"
            description="Я не придурок!!!"
            footer={
              <Button color="primary" round>
                Подписаться
              </Button>
            }
          />
        </ItemGrid>
      </Grid>
    </div>
  );
}

export default Profile;
