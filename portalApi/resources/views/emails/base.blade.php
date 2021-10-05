@component('mail::message')
# Introduction

hi, this massage was send you for login to app

@component('mail::button', ['url' => $url])
click here to go to your homepage
@endcomponent



Time: {{ date('H:i:s') }}
<br>
Date: {{date('Y-m-d')}}


Thanks,<br>
{{ config('app.name') }}
@endcomponent

