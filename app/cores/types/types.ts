/**
 *
 * USE SHOULD DEFINE YOUR OWN TYPES FOR OTHER PROJECT
 *
 */

//Profile type
export type Profile = {
  name: string;
  birth_year: string;
  gender: number;
  score: number;
};

//Login Data type
export type LoginData = {
  refresh: string;
  access: string;
  profile: Partial<Profile>;
};

//login response type
export type LoginAuthReponse = {
  statusCode: number;
  message: string;
  data: Partial<Profile>;
};

//refresh token response type
export type RefreshTokenResponse = {
  access: string;
};
