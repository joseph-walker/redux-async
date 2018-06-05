import Html exposing (..)
import Html.Events exposing
    ( onClick
    , onInput
    )
import Html.Attributes exposing
    ( value
    )
import Task exposing
    ( perform
    )
import Time exposing
    ( millisecond
    )
import Process exposing
    ( sleep
    )

type alias Model =
    { count : Int
    , delay : String
    }

type Action
    = StartIncrement
    | DoIncrement
    | ChangeDelay String

init : (Model, Cmd Action)
init =
    let
        model =
            { count = 0
            , delay = "500"
            }
    in
        ( model
        , Cmd.none
        )

update : Action -> Model -> (Model, Cmd Action)
update action model =
    case action of
        StartIncrement ->
            let
                delay : Int
                delay =
                    Result.withDefault 0
                        << String.toInt
                        <| model.delay
            in
                ( model
                , perform (\_ -> DoIncrement)
                    << sleep
                    << (*) millisecond
                    << toFloat
                    <| delay
                )
        ChangeDelay newDelay ->
            ( { model | delay = newDelay }, Cmd.none )
        DoIncrement ->
            ( { model | count = model.count + 1 }, Cmd.none )

view : Model -> Html Action
view model =
    div []
        [ h1
            []
            [ text <| "Count: " ++ (toString model.count)
            ]
        , input
            [ onInput ChangeDelay
            , value model.delay
            ]
            []
        , button
            [ onClick StartIncrement
            ]
            [ text "Increment"
            ]
        ]

main : Program Never Model Action
main = program
    { init = init
    , update = update
    , subscriptions = \_ -> Sub.none
    , view = view
    }