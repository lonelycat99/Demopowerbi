export class GetData {
    public token_type: string;
    public scope: string;
    public expires_in: string;
    public ext_expires_in: string;
    public expires_on: string;
    public not_before: string;
    public resource: string;
    public access_token: string;
    public refresh_token: string;
    public id_token: string;
}

export class SendData{
    public grant_type: string;
    public scope: string;
    public resource: string;
    public client_id: string;
    public username: string;
    public password: string;

}