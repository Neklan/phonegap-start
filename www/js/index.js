/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

$("#homepage").live('pagecreate', function(event){
    getQuestionsList();
    function getQuestionsList() {

        jQuery.ajax({
            url: "http://4it445.vse.cz/teams/zs1213_e/public/rest/get-questions",
            dataType: 'jsonp',
            success: function(data) {
                jQuery('#questionsList li').remove();
                
                questions = data;
                $.each(questions, function(index, question) {
                    $('#questionsList').append('<li><a href="questiondetail.html?id=' + question.id + '">' +
                            '<h4>Otázka ' + question.id + '</h4>' +
                            '</a></li>');
                });
                jQuery('#questionsList').listview('refresh');
            }
        })
    }
})

$('#detailsPage').live('pageshow', function(event) {
    var id = getUrlVars()["id"];
    if(id){
        jQuery('.questionId').text(id);
    }
});

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}