export class Application {

  constructor(public ApplicationCode: string,
    public ApplicationId: string,
    public id: number,
    public ApplicationName: string,
    public IsAccess: boolean,
    public Url: string,
    public InNewTab: boolean,
    public UrlParam: string,
    public IsAppIconActive: boolean,
    public IsExternalUrl: boolean) { }

  public ImageUrl: string;
}
