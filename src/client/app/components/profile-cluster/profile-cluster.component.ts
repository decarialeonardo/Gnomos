module App {

    export interface IGnome extends ng.IScope{
        profile: {
            id: number,
            name: string,
            thumbnail: string,
            age: number,
            weight: number,
            height: number,
            hair_color: string,
            professions: Array<string>,
            friends: Array<string>
        }
        
    }

    export class ProfileClusterComponent implements ng.IDirective{
        public restrict = "E";
        public replace = true;
        public templateUrl = "static/components/profile-cluster/profile-cluster.component.html";
        public scope = {};
        public controller = App.ProfileClusterController;
        public bindToController = {
            profile: "="
        };
        public controllerAs = "ctrl";

        public link: (scope: IGnome, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;

        constructor() {
            
        }

        static getFactory(): ng.IDirectiveFactory {
            const directive = () => new ProfileClusterComponent();
            return directive;
        }
    }

    export class ProfileClusterController {
        private profile:IGnome;

        constructor(){}

        public roundToTwo(num:number) {    
            return Math.round(num * 100) / 100;
        }
    }
}