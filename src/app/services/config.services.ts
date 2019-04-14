export class ConfigService{
    private urlService:string;
    contructor()
    {
        this.urlService='http://localhost:8030/';
    }

    
    getUrlService(): string{
        return this.urlService;
    }
}