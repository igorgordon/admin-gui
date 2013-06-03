function Ctrl($scope) {
    $scope.list = [];
    $scope.text = 'hello';
    $scope.submit = function() {
        if (this.text) {
            this.list.push(this.text);
            this.text = '';
        }
    };
}